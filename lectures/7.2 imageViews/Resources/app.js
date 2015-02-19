//device size
var pWidth=Ti.Platform.displayCaps.platformsWidth;


//window
win=Ti.UI.createWindow({
	backgroundColor:"#7DD4C1",
	layout:"vertical",
	statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

var viewContainer =Ti.UI.createScrollView({
	layout:"vertical"
});


var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"people");
var galleryList = gallery.getDirectoryListing();
console.log(galleryList);



for(i=0;i<galleryList.length;i++){
	
	var theImage=Ti.UI.createImageView({
		image:"people/"+galleryList[i],
		width:pWidth,
		borderColor:"black",
	});
	
	viewContainer.add(theImage);
	
}
	
//open window
win.add(viewContainer);
win.open();

