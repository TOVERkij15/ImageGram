'use strict';
var fabric;

/*fabric.Image.fromURL('http://th00.deviantart.net/fs71/200H/f/2012/243/a/0/mustache_png____by_yazsexydilemma-d5d3enz.png', function(oImg) {
	oImg.left = 980,
	oImg.top = 500,
	oImg.scale(0.5).setFlipX(true);
	canvas.add(oImg);
});

fabric.Image.fromURL('http://media.goorin.com/media/catalog/product/cache/1/image/1120x1120/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-2690-BRO-L01.png', function(oImg) {
  oImg.left = 980,
  oImg.top = 200,
  oImg.scale(0.2).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://www.dezignwithaz.com/images/mister-mustache-decal1.png', function(oImg) {
  oImg.left = 980,
  oImg.top = 100,
  oImg.scale(0.5).setFlipX(true);
  canvas.add(oImg);
});

fabric.Image.fromURL('http://perua4files.files.wordpress.com/2014/01/heart-sunglasses.png?w=640', function(oImg) {
  oImg.left = 900,
  oImg.top = 300,
  oImg.scale(0.3).setFlipX(true);
  canvas.add(oImg);
});*/


/*fabric.Image.fromURL('http://www.wpclipart.com/recreation/sports/hockey/ice_hockey_12.png', function(fabric) {
  fabric.filters.push(new fabric.Image.filters.Sepia());
  fabric.applyFilters(canvas.renderAll.bind(canvas));
  canvas.add(fabric);
});



/*fabric.Image.fromURL('https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/392970_10200868345373455_279817565_n.jpg', function(img) {

  // add filter
  img.filters.push(new fabric.Image.filters.Grayscale());

  // apply filters and re-render canvas when done
  img.applyFilters(canvas.renderAll.bind(canvas));

  // add image onto canvas
  canvas.add(img);
});*/




/*var canvas = new fabric.Canvas('c');
var imgElement = document.getElementById('http://www.wpclipart.com/recreation/sports/hockey/ice_hockey_12.png');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
});
canvas.add(imgInstance);






/*fabric.Image.filters.Tint = fabric.util.createClass({

  type: 'Tint',

  /**
   * Constructor
   * @memberOf fabric.Image.filters.Tint.prototype
   * @param {Object} [options] Options object
   */
  //That's Different : HexColor
  /*initialize: function(HexColor) {
    this.color = HexColor;
  },


  /**
   * Applies filter to canvas element
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  /*applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data;

    //That's different : computation of values
    var rUser = ((this.color).toString ()).substr(0,2);
    var gUser = ((this.color).toString ()).substr(2,2);
    var bUser = ((this.color).toString ()).substr(4,2);


    for (var i = 0, len = data.length; i < len; i += 4) {


        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        data[i] = parseInt ((r * parseInt (rUser, 16))/255);
        data[i + 1] = parseInt ((g * parseInt (gUser, 16))/255);
        data[i + 2] = parseInt ((b * parseInt (bUser, 16))/255);


    }

    context.putImageData(imageData, 0, 0);
  },

/**
 * Returns json representation of filter
 * @return {Object} json representation of filter
 */
/*toJSON: function() {
  return {
    type: this.type,
    color: this.color
  };
}
});

/*canvas.add(new fabric.Rect({
  left: 50,
  top: 50,
  height: 20,
  width: 20,
  fill: 'green'
}));
console.log(canvas.toSVG());

canvas.add(new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50,
  fill: 'red'
}));
console.log(JSON.stringify(canvas));

/*fabric.Image.fromURL('http://l.yimg.com/bt/api/res/1.2/QoYQSygHsCbfRZsx1yp6zQ--/YXBwaWQ9eW5ld3M7cT04NTt3PTYwMA--/http://media.zenfs.com/en/person/Ysports/patrick-sharp-hockey-headshot-photo.jpg',function(img){

	img.filters.push(new fabric.Image,filters.Greyscale());

	img.applyFilters(canvas.renderAll.bind(canvas));

	canvas.add(img);
});*/

