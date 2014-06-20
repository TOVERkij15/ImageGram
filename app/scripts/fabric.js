'use strict';
var fabric;

var circle = new fabric.Circle({
	left:50,
	top:50,
	radius:50,

});

canvas.add(circle);

fabric.Image.fromURL('http://www.novasynergia.com/wp-content/uploads/gal/airplane.png', function(oImg) {
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://tuktukhire.terasoft.com.au/files/cache/4607a75ff4aa82f8e6449b48f79705cb.png', function(oImg) {
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://upload.wikimedia.org/wikipedia/commons/1/1c/%C3%89l%C3%A9phant_(d%C3%A9tour%C3%A9).png', function(oImg) {
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});