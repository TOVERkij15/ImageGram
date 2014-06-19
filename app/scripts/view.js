"use strict";

//view
var ImageGramView = Parse.View.extend({
	className: 'images',

	template: _.template($('.image-template').text()),

	initialize: function(){
		$('.container').append(this.el)
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate);
		return this;
		
	},
	
});

