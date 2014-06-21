'use strict';
var fabric;

var circle = new fabric.Circle({
	left:50,
	top:50,
	radius:50,

});

canvas.add(circle);

fabric.Image.fromURL('http://th00.deviantart.net/fs71/200H/f/2012/243/a/0/mustache_png____by_yazsexydilemma-d5d3enz.png', function(oImg) {
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});


fabric.Image.fromURL('http://media.goorin.com/media/catalog/product/cache/1/image/1120x1120/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-2690-BRO-L01.png', function(oImg) {
  oImg.scale(0.2).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://mail.mhrd.k12.nj.us/~lotforalincoln/Party%20Pictures/Party_hat.png', function(oImg) {
  oImg.scale(0.2).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://fc00.deviantart.net/fs70/f/2012/159/d/4/mustache_by_maddielovesselly-d52seig.png', function(oImg) {
  oImg.scale(0.3).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://www.dezignwithaz.com/images/mister-mustache-decal1.png', function(oImg) {
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://perua4files.files.wordpress.com/2014/01/heart-sunglasses.png?w=640', function(oImg) {
  oImg.scale(0.3).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://www.yooyo.us/wp-content/uploads/2014/03/yumi-pleated-sun-dress-sundresses-tumblr.png', function(oImg) {
  oImg.scale(0.3).setFlipX(true);
  canvas.add(oImg);
});