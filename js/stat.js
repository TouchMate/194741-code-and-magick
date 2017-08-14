'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono,';


  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

  var max = -1;
  function findMaxValue() {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
  }
  findMaxValue(max);


  var histogramHeight = 150;
  var step = histogramHeight / (max);
  ctx.textBaseline = 'bottom';
  var indent = 100; // px;
  var barWidth = 40; // px;
  var initialX = 120; // px;
  var initialY = 240; // px;
  var playerColor = 'rgba(255, 0, 0, 1)';

  function getRandomColor() {
    return 'hsl(200, 99%, ' + Math.random() * 100 + '%)';
  }
  function assingColorToColumn(i) {
    ctx.fillStyle = names[i] === 'Вы' ? playerColor : getRandomColor();
  }
  function buildGameChart(i) {
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
  }
  function addChartNames(i) {
    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
  }
  function addChartNumbers(i) {
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - times[i] * step);
  }

  for (var i = 0; i < times.length; i++) {
    assingColorToColumn(i);
    buildGameChart(i);
    addChartNames(i);
    addChartNumbers(i);
  }
};


