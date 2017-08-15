'use strict';
function getRandomColor() {
  return 'hsl(200, 99%, ' + Math.random() * 100 + '%)';
}

function drawCloud(ctx, color, positionX, positionY) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, 420, 270);
}


function getMaxTime(times) {
  var amountOfPlayers = times.length;
  var max = -1;
  for (var i = 0; i < amountOfPlayers; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

function creatGameChart(times, names, ctx) {
  var histogramHeight = 150;
  var step = histogramHeight / getMaxTime(times);
  ctx.textBaseline = 'bottom';
  var indent = 100; // px;
  var barWidth = 40; // px;
  var initialX = 120; // px;
  var initialY = 240; // px;
  var numberOfPlayers = times.length;
  for (var i = 0; i < numberOfPlayers; i++) {
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - times[i] * step);
  }
}

window.renderStatistics = function (ctx, times, names) {
  drawCloud(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  drawCloud(ctx, 'rgba(256, 256, 256, 1.0)', 100, 10);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono,';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

  var playerColor = 'rgba(255, 0, 0, 1)';
  var amountOfPlayers = names.length;

  for (var i = 0; i < amountOfPlayers; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? playerColor : getRandomColor();
  }
  getMaxTime(times);
  creatGameChart(times, names, ctx);
};


