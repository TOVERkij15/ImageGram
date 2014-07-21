Parse.initialize("MaYyxQU280uNPxkOE52SHC2FyIBPulTOHcXFPtTV", "Vq6YQDoSdt49lG2tyBYbP7oZKpIzFkggUsHMXv0w");
//Creates a new instance of that class.
// var DetailView;
var imageInstance;
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
	});

var collection = new ImageGramCollection();

collection.fetch({add:true}).done(function() {
	collection.each(function(imageGramModel) {
		// console.log(collection);
		// console.log(imageGramModel);
		new ImageGramView({model: imageGramModel});
		// console.log(ImageGramView);
		
	});
});




//var dataUrl = canvas.toDataURL();

/*var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
	var file = fileUploadControl.files[0];
	var name = "photo.jpg";
 
	var parseFile = new Parse.File(name, file);
}
parseFile.save().then(function() {
  
}, function(error) {
  
});

// var collection = new ImageGramCollection();
// 	collection.fetch({
//   success: function(collection) {
//     collection.each(function(object) {
//       console.log(object);
//     });
//   },
//   error: function(collection, error) {
    
//   }
// });
/*ImageGram = Parse.Object.extend("ImageGram");

query = new Parse.Query(ImageGram);

query.equalTo('url',false)
query.limit = 10;
query.descending('createdAt');

query.find({
	success: function(results){

	},
	error: function(error){

	}
});*/






 
/*var ImageGram = Parse.Object.extend("ImageGram");
var query = new Parse.Query(ImageGram);
query.get("ohIqjrBFIK",{
	success: function(objects) {
	},
	error: function(objects, error) {

	}
});*/

 

//To create a new post with a single comment 
//Types
/*var Post = Parse.Object.extend("Post");
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

var Imagepost = imageComment.get("parent");
Imagepost.fetch({
  success: function(Imagepost) {
    var title = Imagepost.get("title");
  }
});*/













