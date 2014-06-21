"use strict";

//view
var ImageGramView = Parse.View.extend({
	className: 'images',

	events: {
	
		'click .thumbnail-images' :'moveImage'
	},
	
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
	moveImage: function() {
		
		if (imageInstance == null) {
			imageInstance = new DetailView({model: this.model});
			console.log(this.model);
		}

	}
});

//Detail View
//come back to detailview
var DetailView = Parse.View.extend({
	secondTemplate: _.template($('.second-image-template').text()),


	initialize: function(){
		$('.detail-container').append(this.el);
		this.render();
	},
		render:function(){
			var renderedTemplate = this.secondTemplate(this.model.attributes)
			this.$el.html(renderedTemplate);
			return this;

			this.model.on( 'change', this.render.bind(this));
	},
		
});




