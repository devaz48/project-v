/* devaz48 project */
var canvas;

var init = 1;
var w = 1024;
var h = 768;
var r = 20;
var dx = 6;
var dy = 6;
var x = w / 2;
var y = h / 2;
var color = 0;

function draw(){
  canvas = myCanvas.getContext('2d');
  canvas.clearRect(x-r-1, y-r-1, r*2+2, r*2+2);
  color = (color+0x020304) % 0x1000000;
  if (x < r || w - r < x) dx = -dx;
  if (y < r || h - r < y) dy = -dy;
  x += dx;
  y += dy;
  canvas.beginPath();
  canvas.fillStyle="#"+(color+0x1000000).toString(16).substr(-6);
  canvas.arc(x, y, r, 0, Math.PI*2, true);
  canvas.closePath();
  canvas.fill();
}

window.onload = window.onresize = function() {
  canvas = myCanvas.getContext('2d');
  if (window.innerWidth) {
    w = myCanvas.width = window.innerWidth;
    h = myCanvas.height = window.innerHeight;
  } else {
    w = myCanvas.width = document.body.offsetWidth;
    h = myCanvas.height = document.body.offsetHeight;
  }
  x = w / 2;
  y = h / 2;
  r = w / 70;
  dx = dy = r / 3;

  if (init) {
    init = 0;
    setInterval(draw, 25);
  }
}



