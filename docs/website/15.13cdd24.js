(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{183:function(s,r,n){"use strict";n.r(r);var a={components:{}},e=n(17),t=Object(e.a)(a,function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("section",[n("article",{staticClass:"markdown-body",staticStyle:{width:"96%"}},[n("h2",[s._v("安装")]),s._v(" "),n("h3",[s._v("使用 npm 或 yarn 安装")]),s._v(" "),s._m(0),s._v(" "),n("h2",[s._v("使用")]),s._v(" "),s._m(1),s._v(" "),n("h3",[s._v("手动加载")]),s._v(" "),s._m(2),s._v(" "),n("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Polycurve} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  resolution: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nconst polycurve = new Polycurve();\npolycurve.attr({\n  pos: [10, 10],\n  startPoint: [10, 10],\n  points: [\n    [21, 58, 221, 189.2639320225002, 165.8680339887499, 189.2639320225002],\n    [\n      165.8680339887499,\n      189.2639320225002,\n      110.73606797749979,\n      189.2639320225002,\n      110.73606797749979,\n      278.5278640450004\n    ]\n  ],\n  lineWidth: 1,\n  color: '#f00',\n  fillColor: 'green'\n});\n\npolycurve.on('mouseenter', () => {\n  polycurve.attr('fillColor', 'yellow');\n});\n\npolycurve.on('click', () => {\n  polycurve.attr('fillColor', 'yellow');\n});\n\npolycurve.on('mouseleave', () => {\n  polycurve.attr('fillColor', 'red');\n});\n\nlayer.append(polycurve);\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Polycurve} = spritejs;\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolution")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polycurve = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Polycurve();\npolycurve.attr({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startPoint")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("points")]),s._v(": [\n    ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("58")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("221")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("189.2639320225002")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("165.8680339887499")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("189.2639320225002")]),s._v("],\n    [\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("165.8680339887499")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("189.2639320225002")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.73606797749979")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("189.2639320225002")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.73606797749979")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("278.5278640450004")]),s._v("\n    ]\n  ],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f00'")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("\n});\n\npolycurve.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseenter'")]),s._v(", () => {\n  polycurve.attr("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fillColor'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(");\n});\n\npolycurve.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  polycurve.attr("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fillColor'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(");\n});\n\npolycurve.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseleave'")]),s._v(", () => {\n  polycurve.attr("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'fillColor'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(");\n});\n\nlayer.append(polycurve);\n")])])])],1)])},[function(){var s=this.$createElement,r=this._self._c||s;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("npm i sprite-extend-shapes\n")])])},function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" * "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("as")]),s._v(" spritejs "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'spritejs'")]),s._v(";\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Shapes "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite-extend-shapes'")]),s._v(";\n\nspritejs.use(Shapes);\n")])])},function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" * "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("as")]),s._v(" spritejs "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'spritejs'")]),s._v(";\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" {Circle} "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sprite-extend-shapes'")]),s._v(";\n\nspritejs.use(Circle);\n")])])}],!1,null,null,null);r.default=t.exports}}]);