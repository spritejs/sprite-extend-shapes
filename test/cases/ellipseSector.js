module.exports = {
  ellipseSector: {
    default: {
      pos: [100, 100],
      radiusX: 15,
      radiusY: 30,
      ellipseSectortAngle: 0,
      endAngle: Math.PI * 1.3,
      lineWidth: 1,
      color: "red",
      bgcolor: "#eee",
      anticlockwise: true
    },
    noellipse: {
      pos: [100, 100],
      radiusX: 15,
      radiusY: 30,
      ellipseSectortAngle: 0,
      endAngle: Math.PI * 2,
      lineWidth: 1,
      color: "red",
      bgcolor: "#eee",
      noellipse: true
    }
  }
};
