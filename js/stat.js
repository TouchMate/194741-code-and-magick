'use strict';
function getRandomColor() {
  return 'hsl(200, 99%, ' + Math.random() * 100 + '%)';
}

function drawCloud(ctx, color, positionX, positionY) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, 420, 270);
}
function findMaxValue(max, times) {
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
}

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  drawCloud(ctx, 'rgba(256, 256, 256, 1.0)', 100, 10);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono,';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

  var max = -1;
  // for (var i = 0; i < times.length; i++) {
  //   var time = times[i];
  //   if (time > max) {
  //     max = time;
  //   }
  // }
  findMaxValue(max, times);


  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  ctx.textBaseline = 'bottom';
  var indent = 100; // px;
  var barWidth = 40; // px;
  var initialX = 120; // px;
  var initialY = 240; // px;
  var playerColor = 'rgba(255, 0, 0, 1)';

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
    ctx.fillStyle = names[i] === 'Вы' ? playerColor : getRandomColor();
    buildGameChart();
    addChartNames();
    addChartNumbers();
  }
};


