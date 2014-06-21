"use strict";
//Creates a new subclass of parse objects.
var ImageGram = Parse.Object.extend({
	className: "ImageGram",
});

//collection
var ImageGramCollection = Parse.Collection.extend({
	model:ImageGram,
});



