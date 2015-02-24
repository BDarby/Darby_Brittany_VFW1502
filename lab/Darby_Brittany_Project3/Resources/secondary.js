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
		// console.log(eventData);
// });
	top: 20,
});

var players2=Ti.UI.createWindow({  					//this is the other window
 	backgroundColor:"White",
 	layout:"horizontal",
 	
 });
	



var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"players"); //this is how you get stuff out of the file.
console.log(gallery);
var galleryList = gallery.getDirectoryListing();
console.log(galleryList);



var playerCollection=[];
//this is the for that make my images appear
for(i=0;i < galleryList.length;i++){
	
var theImage=Ti.UI.createImageView({   //image view 1
		image:"players/"+galleryList[i],
		width:itemSize,
		height:itemSize,
		left: space,
		right: space,
		bottom: space,
		borderColor:"black",
		id:i,
	});

	
	
var view=Ti.UI.createImageView({   //image view 2
		image:"players/"+galleryList[i],
		width:pWidth,
});
 var zoom=Ti.UI.createScrollView({
	 maxZoomScale:2.0,
 });

zoom.add(view);
playerCollection.push(zoom);

viewContainer.add(theImage);


	theImage.addEventListener("click", function(event){ 			//this is the event listener
		var scrollableView=Ti.UI.createScrollableView({
	    views: playerCollection,

	
	    
});
	    nav.openWindow(players2);

		scrollableView.currentPage=event.source.id;
	//scrollableView.setCurrentPage(0);
	    showPagingControl:true,
		
		
		
		// scrollableView.currentPage=0;
		// scrollableView.setCurrentPage(0);
		players2.add(scrollableView);
		players2.open();
		

});

}
		
		                        
// swipe.currentPage=1;
// swipe.setCurrentPage(1);

// 
	// var scrollableView=Ti.UI.createScrollableView({
	// views: players2,
	// scrollableViewcurrentPage=0;
	// scrollableView.setCurrentPage(0);
	// showPagingControl:true,
// });
// 	



		
		
	
	



win.add(viewContainer);


var nav=Ti.UI.iOS.createNavigationWindow({
	window: win
});


	
//win.add(zoom);
nav.open();
//win.add(view);
