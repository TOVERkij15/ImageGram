"use strict";

//collection
var ImageGramCollection = Parse.Collection.extend({
	model:ImageGram
});

 var collection = new ImageGramCollection();
	collection.fetch({
  success: function(collection) {
    collection.each(function(object) {
      console.log(object);
    });
  },
  error: function(collection, error) {
    
  }
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