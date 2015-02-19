var viewContainer =Ti.UI.createScrollView({
	layout:"vertical",
	top:0,
	left:50,
	bottom:2/4,
});


var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"players");
console.log(gallery);
var galleryList = gallery.getDirectoryListing();
console.log(galleryList);



for(i=0;i < galleryList.length;i++){
	
var theImage=Ti.UI.createImageView({
		image:"players/"+galleryList[i],
		//width:pWidth,
		
		borderColor:"black",
	});
	
	viewContainer.add(theImage);
	
};
	
//open window
win.add(viewContainer);

