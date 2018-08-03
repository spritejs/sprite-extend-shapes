module.exports = {
  ring: {
    default: {
      pos: [100, 100],
      innerRadius: 15,
      outterRadius: 50,
      fillColor: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      lineWidth: 4,
      startAngle: Math.PI * 0.5,
      endAngle: Math.PI * 2.6,
      bgcolor: '#eee',
    },

    sector: {
      pos: [100, 100],
      innerRadius: 15,
      outterRadius: 50,
      fillColor: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      lineWidth: 4,
      startAngle: Math.PI * 0.5,
      endAngle: Math.PI * 1.6,
      bgcolor: '#eee',
      color: 'red',
    },
  },
};
