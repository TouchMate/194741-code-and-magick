'use strick';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

  var max = -1;


  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;

    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  // ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);
  ctx.textBaseline = 'bottom'; // Рисуем надпись от левого верхнего угла
  for (var i = 0; i < times.length; i++) {
    var indent = 50;  // px;
    var barWidth = 40; // px;
    var initialX = 120; // px;
    var initialY = 240;  // px;
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, barWidth, times[i] * step);

    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
  }
};
