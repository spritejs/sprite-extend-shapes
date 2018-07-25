# sprite-extend-shapes

## 项目说明

`sprite-extend-shapes` 是基于`SpriteJS`的常用几何图形扩展库。当前支持的图形：

- [Shape](#Shape)
  - [Polyline](#Polyline)
  - [Arc](#Arc)
  - [PolyCurve](#PolyCurve)
  - [Polygon](#Polygon)
    - [Triangle](#Triangle)
    - [Rectangle](#Rectangle)
    - [Star](#Star)
  - [EllipseSector](#EllipseSector)
    - [Ellipse](#Ellipse)
      - [EllipseArc](#EllipseArc)
      - [Circle](#Circle)
    - [Sector](#Sector)
  - [Ring](#Ring)

## Shape

`Shape` 类继承至 `sprite-core` 的 `BaseSprite`，是该图形扩展库所有图形的基类。

### Polyline

`Ployline` 用于绘制线条。支持的属性：

|   属性    |         说明         |       默认值       |
| :-------: | :------------------: | :----------------: |
|  points   |   各个连接点的坐标   |       `null`       |
|   color   | 连接点之间连线的颜色 | `rgba(0, 0, 0, 1)` |
| lineWidth |       线条宽度       |         1          |
|  lineCap  |   线条末端绘制样式   |      `round`       |
| lineJoin  |   两线条交汇处样式   |      `round`       |

示例：
![polyline](./pictures/polyline.png)

```javascript
const polyline = new Polyline();
polyline.attr({
  color: {
    vector: [0, 0, 150, 150],
    colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
  },
  lineWidth: 10,
  points: [[0, 0], [0, 100], [200, -50]],
  bgcolor: "#eee"
});
```

### Arc

`Arc` 用于绘制弧线。支持的属性：

|     属性      |              说明              |  默认值  |
| :-----------: | :----------------------------: | :------: |
|    center     |        绘制弧线的中心点        |  `null`  |
|  startPoint   |         弧线绘制的起点         | `[0, 0]` |
|     angle     |       绘制弧线转过的角度       |   `0`    |
|     color     |           弧线的颜色           |  `#000`  |
|   lineWidth   |            弧线宽度            |   `1`    |
| anticlockwise | 当该值为`true`时，将逆时针绘制 | `false`  |

示例：
![arc](./pictures/arc.png)

```javascript
const arc = new Arc();
arc.attr({
  center: [100, 100],
  startPoint: [0, 0],
  angle: (Math.PI / 2) * 0.75,
  lineWidth: 5
});
```

### Polycurve

`Polycurve` 用于绘制多重曲线，其底层使用的是 `canvas.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)` API（因此也可以理解为“绘制多个贝塞尔曲线”）。支持的属性：

|    属性    |                             说明                             |  默认值  |
| :--------: | :----------------------------------------------------------: | :------: |
|   points   | 绘制贝塞尔曲线的数组（**注意数组的每一子数组长度应为 `6`**） |   `[]`   |
| startPoint |                           绘制起点                           | `[0, 0]` |
| lineWidth  |                           曲线宽度                           |    1     |
|  lineCap   |                       曲线末端绘制样式                       | `round`  |
|  lineJoin  |                       两曲线交汇处样式                       | `round`  |

示例：

![polycurve](./pictures/polycurve.png)

```javascript
const polycurve = new Polycurve();
polycurve.attr({
  points: [[20, -10, 110, 50, -20, 40], [10, -10, 20, 50, 0, 0]],
  lineWidth: 5
});
```

### Polygon

`Polygon` 用于绘制多边形。支持的属性：

|   属性    |      说明      |       默认值       |
| :-------: | :------------: | :----------------: |
|  points   |  各顶点的坐标  |       `null`       |
|   color   |    边的颜色    | `rgba(0, 0, 0, 1)` |
| fillColor | 多边形填充颜色 | `rgba(0, 0, 0, 1)` |
| lineWidth |    线条宽度    |         1          |
|  lineCap  | 边末端绘制样式 |      `round`       |
| lineJoin  | 两边交汇处样式 |      `round`       |

示例：

![polygon](./pictures/polygon.png)

```javascript
const polygon = new Polygon();
polygon.attr({
  color: {
    vector: [0, 0, 150, 150],
    colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
  },
  fillColor: "yellow",
  points: [[0, 0], [100, 100], [200, -50]]
});
```

#### Triangle

`Triangle` 继承至 `Polygon`，用于绘制三角形，其大部分属性与 `Polygon` 一致。在 `Polygon` 的基础上，`Triangle` 需要设置“两边的长度”和“两边的夹角”即可完成绘制。

| 属性  |   说明   |   默认值   |
| :---: | :------: | :--------: |
| sides | 两边边长 | `[10, 10]` |
| angle | 两边夹角 |    `60`    |

示例：

![triangle](./pictures/triangle.png)

```javascript
const triangle = new Triangle();
triangle.attr({
  color: "red",
  sides: [80, 80],
  angle: "60",
  fillColor: "yellow"
});
```

#### Rectangle

`Rectangle` 继承至 `Polygon`，用于绘制矩阵。同 `Triangle`，`Rectangle` 需要设置“两边的长度”和“两边的夹角”即可完成绘制。

| 属性  |   说明   |   默认值   |
| :---: | :------: | :--------: |
| sides | 两边边长 | `[10, 10]` |
| angle | 两边夹角 |    `60`    |

示例：

![rectangle](./pictures/rectangle.png)

```javascript
const rect = new Rect();
rect.attr({
  color: "red",
  sides: [60, 80],
  angle: 60,
  fillColor: "yellow"
});
```

#### Star

`Star` 继承至 `Polygon` 用于绘制规则的多角形。`Star` 将多角形的绘制分为`内接圆`和`外接圆`之上点的连接，默认`内接圆`的半径为`0.4 * 外接圆的半径`，也可手动设置。

|    属性     |    说明    |     默认值     |
| :---------: | :--------: | :------------: |
|   radius    | 外接圆半径 |      `0`       |
| innerRadius | 内切圆半径 | `0.4 * radius` |
|    angle    |  角的数量  |      `5`       |

示例：

![star](./pictures/star.png)

```javascript
const star = new Star();
star.attr({
  radius: 40,
  innerRadius: 30,
  color: "red",
  angles: 5,
  fillColor: "yellow"
});
```

### EllipseSector

`EllipseSector` 继承至 `Shape`，用于绘制椭圆扇形。

|    属性    |       说明       |       默认值       |
| :--------: | :--------------: | :----------------: |
|  radiusX   |      短半径      |        `10`        |
|  radiusY   |      长半径      |        `20`        |
| startAngle |     起始角度     |        `0`         |
|  endAngle  |     终止角度     |       `360`        |
|   color    |   描边线条颜色   | `rgba(0, 0, 0, 1)` |
| fillColor  |     填充颜色     | `rgba(0, 0, 0, 1)` |
| lineWidth  |     线条宽度     |         1          |
|  lineCap   | 线条末端绘制样式 |      `round`       |
|  lineJoin  | 两线条交汇处样式 |      `round`       |

示例：

![ellipseSector](./pictures/ellipseSector.png)

```javascript
const ellipseSector = new EllipseSector();
ellipseSector.attr({
  radiusX: 30,
  radiusY: 80,
  startAngle: 0,
  endAngle: Math.PI * 1.3,
  lineWidth: 1,
  color: "red"
});
```

#### Ellipse

`Ellipse` 继承至 `EllipseSector`，用于绘制椭圆。
不难发现，只需将 EllipseSector 的 `startAngle` 始终设为 `0`，`endAngle` 始终设为 `360` 即可。

示例：

![ellipse](./pictures/ellipse.png)

```javascript
const ellipse = new Ellipse();
ellipse.attr({
  radiusX: 30,
  radiusY: 80,
  fillColor: "red",
  lineWidth: 5
});
```

##### EllipseArc

`EllipseArc` 继承至 `Ellipse`，用于绘制椭圆弧线（与 `Arc` 的区别）。
`EllipseArc` 放开了 `startAngle` 和 `endAngle` 的限制。

示例：

![ellipseArc](./pictures/ellipseArc.png)

```javascript
const ellipseArc = new EllipseArc();
ellipseArc.attr({
  radiusX: 30,
  endAngle: 120,
  radiusY: 80,
  fillColor: "red",
  lineWidth: 5
});
```

##### Circle

`Circle` 继承至 `Ellipse`。当`Ellipse`的“长半径”和“短半径”相等时，椭圆就成了圆。

|  属性  | 说明 | 默认值 |
| :----: | :--: | :----: |
| radius | 半径 |  `10`  |

示例：

![circle](./pictures/circle.png)

```javascript
const circle = new Circle();
circle.attr({
  radius: 30,
  lineWidth: 5,
  color: "red"
});
```

#### Sector

`Sector` 继承至 `EllipseSector`，用于绘制规则的扇形。当`EllipseSector`的“长半径”和“短半径”相等时，即可绘制规则的扇形。

|  属性  | 说明 | 默认值 |
| :----: | :--: | :----: |
| radius | 半径 |  `10`  |

示例：

![sector](./pictures/sector.png)

```javascript
const sector = new Sector();
sector.attr({
  startAngle: 0,
  endAngle: Math.PI * 0.7,
  radius: 50,
  lineWidth: 5,
  color: "red"
});
```

### Ring

`Ring` 继承至 `Shape`，用于绘制圆环。

|    属性     |     说明     |       默认值       |
| :---------: | :----------: | :----------------: |
| innerRadius |   内圆半径   |        `10`        |
| outerRadius |   外圆半径   |        `20`        |
| startAngle  |   起始角度   |        `0`         |
|  endAngle   |   终止角度   |       `360`        |
|    color    | 描边线条颜色 | `rgba(0, 0, 0, 1)` |
|  fillColor  |   填充颜色   | `rgba(0, 0, 0, 1)` |
|  lineWidth  |   线条宽度   |         1          |

示例：

![ring](./pictures/ring.png)

```javascript
ring.attr({
  innerRadius: 15,
  outerRadius: 50,
  fillColor: {
    vector: [0, 0, 150, 150],
    colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
  },
  lineWidth: 4,
  startAngle: Math.PI * 0.5,
  endAngle: Math.PI * 1.6
});
```
