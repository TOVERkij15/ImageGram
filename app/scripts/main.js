Parse.initialize("MaYyxQU280uNPxkOE52SHC2FyIBPulTOHcXFPtTV", "Vq6YQDoSdt49lG2tyBYbP7oZKpIzFkggUsHMXv0w");
//Creates a new subclass of parse objects.
var ImageGram = Parse.Object.extend({
	className: "ImageGram",
});
//Creates a new instance of that class.
var imageGram = new ImageGram();
//saves url and caption inputs
$('.button').click(function(){
	imageGram.set('url', $('.add-photo-input').val());
	imageGram.set('caption',$('.captionInput').val());

		imageGram.save(null,{
			success: function(imageGram){
				console.log('success!',imageGram.id)
			},
			error: function(imageGram, error) {
				console.log('errors')
			}
		});
	})
//refresh object
imageGram.fetch({
	success:function(imageGram){
		console.log('refresh bitch!')
	},
	error:function(imageGram,error){

	}
});

//To create a new post with a single comment 
//Types
var Post = Parse.Object.extend("Post");
var Comment = Parse.Object.extend("Comment");

//Creating Post
var imagePost = new Post();
imagePost.set("title", "Food Everywhere");
imagePost.set("content", "Where is the food?");

//Creating the comment
var imageComment = new Comment();
imageComment.set("content", "The food is everywhere!");

//Adds the post as a value in the comment
imageComment.set("parent",imagePost);

//Saves everything
imageComment.save();




 


 














