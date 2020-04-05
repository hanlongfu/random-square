// generate 10 squares with random colors

// obtain the containerd div
var container = document.getElementById('container');

var array = [];
for (var i = 0; i < 40; i++) {
  var r = Tools.getRandom(0, 255);
  var g = Tools.getRandom(0, 255);
  var b = Tools.getRandom(0, 255);

  var box = new Box(container, {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
  });

  array.push(box);
}

setInterval(randomBox, 100);

// to avoid timer delay
randomBox();

function randomBox() {
  for (var i = 0; i < array.length; i++) {
    var box = array[i];
    box.random();
  }
}