"use strict";
//Creates a new subclass of parse objects.
var ImageGram = Parse.Object.extend({
	className: "ImageGram",
});

//collection
var ImageGramCollection = Parse.Collection.extend({
	model:ImageGram,
});



//collection
/*var ImageGramCollection = Parse.Collection.extend({
	model:ImageGram
});

 var collection = new ImageGramCollection();
	collection.fetch({
  success: function(imageGram) {
    collection.each(function(object) {
      console.log(object);
    });
  },
  error: function(imageGram, error) {
    
  }
});*/