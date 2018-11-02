export default {
  ring: {
    default: {
      pos: [100, 100],
      innerRadius: 15,
      outerRadius: 50,
      fillColor: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      lineWidth: 4,
      lineDash: [0, 0],
      lineDashOffset: 2,
      startAngle: Math.PI * 0.5,
      endAngle: Math.PI * 2.6,
      bgcolor: '#eee',
    },

    sector: {
      pos: [100, 100],
      innerRadius: 15,
      outerRadius: 50,
      fillColor: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      lineWidth: 4,
      startAngle: Math.PI * 0.5,
      endAngle: Math.PI * 2.6,
      bgcolor: '#eee',
      color: 'red',
    },
  },
};
