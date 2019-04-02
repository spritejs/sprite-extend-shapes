export default [
  {
    title: '',
    path: '',
    redirect: 'ellipseSector'
  },

  {
    title: '圆形'
  },

  {
    title: 'ellipseSector',
    path: 'ellipseSector',
    component: () => import('./docs/ellipseSector.md')
  },

  {
    title: 'ellipseArc',
    path: 'ellipseArc',
    component: () => import('./docs/ellipseArc.md')
  },

  {
    title: 'ellipse',
    path: 'ellipse',
    component: () => import('./docs/ellipse.md')
  },

  {
    title: 'circle',
    path: 'circle',
    component: () => import('./docs/circle.md')
  },

  {
    title: 'sector',
    path: 'sector',
    component: () => import('./docs/sector.md')
  },

  {
    title: '多边形'
  },

  {
    title: 'polygon',
    path: 'polygon',
    component: () => import('./docs/polygon.md')
  },

  {
    title: 'triangle',
    path: 'triangle',
    component: () => import('./docs/triangle.md')
  },

  {
    title: 'rect',
    path: 'rect',
    component: () => import('./docs/rect.md')
  },

  {
    title: 'star',
    path: 'star',
    component: () => import('./docs/star.md')
  },

  {
    title: '曲线'
  },

  {
    title: 'polycurve',
    path: 'polycurve',
    component: () => import('./docs/polycurve.md')
  },

  {
    title: 'polyline',
    path: 'polyline',
    component: () => import('./docs/polyline.md')
  },

  {
    title: '其他'
  },

  {
    title: 'arc',
    path: 'arc',
    component: () => import('./docs/arc.md')
  },

  {
    title: 'ring',
    path: 'ring',
    component: () => import('./docs/ring.md')
  },

  {
    title: 'wave',
    path: 'wave',
    component: () => import('./docs/wave.md')
  }
];
