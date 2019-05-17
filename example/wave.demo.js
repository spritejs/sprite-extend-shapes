function renderWaveShapes() {
  const group = new Group({
    boxSizing: 'content-box',
    pos: [750, 0],
    size: [240, 800],
    bgcolor: 'green'
  });
  layer.append(group);

  const wave = new Wave();
  wave.attr({
    pos: [10, 10],
    radius: 80,
    offset: 10,
    lineWidth: 10,
    bgcolor: 'red',
    color: '#158bca',
    fillColor: '#158bca',
    percent: [0.8, 0.7, 0.4],
    wavesColor: ['#3488da', '#2c65c6'],
    amplitude: 20,
    shapeColor: '#58b8fe',
    shapeFillColor: '#e5f7ff',
    shapeScale: 0.5,
    shape:
      'M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
    speed: 0
  });

  group.appendChild(wave);

  let speed = 0;
  const step = () => {
    speed += 0.1;
    wave.attr('speed', speed);
    requestAnimationFrame(step);
  };
  step();

  const wave2 = new Wave();
  wave2.attr({
    pos: [10, 190],
    radius: 80,
    offset: 10,
    lineWidth: 5,
    color: '#158bca',
    fillColor: '#158bca',
    bgcolor: 'red',

    percent: 0.6,
    amplitude: 20,
    shapeScale: 5,
    trim: true,
    shape:
      'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
    speed: 0
  });

  group.appendChild(wave2);

  let speed2 = 0;
  const step2 = () => {
    speed2 += 0.1;
    wave2.attr('speed', speed2);
    requestAnimationFrame(step2);
  };
  step2();

  const wave3 = new Wave();
  wave3.attr({
    pos: [10, 370],
    radius: 60,
    offset: 10,
    lineWidth: 10,
    bgcolor: 'red',

    wavesColor: '#158bca',
    outlineColor: '#158bca',
    percent: 1.9,
    amplitude: 20,
    speed: 0
  });

  group.appendChild(wave3);
}
