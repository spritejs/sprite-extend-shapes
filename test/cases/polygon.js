export default {
  polygon: {
    default: {
      pos: [100, 100],
      color: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      fillColor: 'yellow',
      points: [[0, 0], [100, 100], [200, -50]],
      bgcolor: '#eee',
      lineWidth: 5,
    },
    nopoints: {
      pos: [100, 100],
      color: {
        vector: [0, 0, 150, 150],
        colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
      },
      fillColor: 'yellow',
      bgcolor: '#eee',
      lineWidth: 5,
    },
  },
};
