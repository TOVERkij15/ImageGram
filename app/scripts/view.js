"use strict";

//view
var ImageGramView = Parse.View.extend({
	className: 'imageGram',

	template: _.template($('.image-template').text()),


	initialize: function(){
	$('.image-container').append(this.model);
	this.render();
},

	render: function() {
		var renderTemplate = this.template(this.model)
		this.$el.html(renderTemplate);
		return this;
	
	}
});
