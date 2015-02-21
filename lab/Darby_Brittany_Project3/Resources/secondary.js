var pWidth=Ti.Platform.displayCaps.platformWidth;

var numOfItems=20;
var itemInRow=4;
var space= 4;
var spaceUsed=4*2*5;
var itemSize=(pWidth-spaceUsed)/4;
console.log(itemSize);
var math=pWidth/4;

var viewContainer =Ti.UI.createScrollView({
	layout:"horizontal",
	contentWidth: pWidth,
	top: 20,
});


var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"players");
console.log(gallery);
var galleryList = gallery.getDirectoryListing();
console.log(galleryList);


for(i=0;i < galleryList.length;i++){
	
var theImage=Ti.UI.createImageView({
		image:"players/"+galleryList[i],
		width:math,
		height:math,
		//left: itemSize,
		//right: itemSize,
		bottom: space,
		borderColor:"black",
	});
	
	viewContainer.add(theImage);
	
};





	
var playerCollection=[];

for(i=0; i<galleryList.length; i++){
	var view=Ti.UI.createImageView({
		image:galleryList.image,
	
	});
	var scrollView=Ti.UI.createScrollView();
	scrollView.add(view);
	// var label=Ti.UI.createLabel({
		// text:galleryList[i].name,
	//});
	//view.add(label);
	playerCollection.push(scrollView);
};

var scrollableView=Ti.UI.createScrollableView({
	views:playerCollection,
});
 


// var view1 = Ti.UI.createView({ backgroundColor:'#123', name:"View Red"});
// var view2 = Ti.UI.createView({ backgroundColor:'#246', name:"View Green" });
// var view3 = Ti.UI.createView({ backgroundColor:'#48b', name :"View Blue" });
// var scrollWin=Ti.UI.createScrollView({
		// //set layout
		// layout:"horizontal",
		// //set content
		// contentWidth:deviceWidth,
		// top:20,
// 		
	// });
	
	
	// var deviceWidth=Ti.Platform.displayCaps.platformWidth;
	// var numOfItems=25;
	// var itemInRow=4;
	// var space=5;
	// var spaceUsed=4*2*5; //4 is the number of rows, 5 is the number of spaces we have
	// var itemSize=(deviceWidth-spaceUsed*4)/4;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//open window
win.add(viewContainer);

