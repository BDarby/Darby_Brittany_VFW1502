// //device size
// var pWidth=Ti.Platform.displayCaps.platformsWidth;
// 
// 
// //window
// win=Ti.UI.createWindow({
	// backgroundColor:"#7DD4C1",
	// layout:"vertical",
	// statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
// });
// 
// var viewContainer =Ti.UI.createScrollView({
	// layout:"vertical"
// });
// 
// 
// var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"people");
// var galleryList = gallery.getDirectoryListing();
// console.log(galleryList);
// 
// 
// 
// for(i=0;i<galleryList.length;i++){
// 	
	// var theImage=Ti.UI.createImageView({
		// image:"people/"+galleryList[i],
		// width:pWidth,
		// borderColor:"black",
	// });
// 	
	// viewContainer.add(theImage);
// 	
// }
	
	//__________________________________________________________________________________________________
	
	//platfrom width
	var deviceWidth=Ti.Platform.displayCaps.platformWidth;
	var numOfItems=25;
	var itemInRow=4;
	var space=5;
	var spaceUsed=4*2*5; //4 is the number of rows, 5 is the number of spaces we have
	var itemSize=(deviceWidth-spaceUsed*2)/4;
	
	console.log(deviceWidth);
	console.log(itemSize);
	//console.log(spacedUsed);
	
	//windows
	var win=Ti.UI.createWindow({
		backgroundColor:"green",
	});
	
	
	//scrollview
	var scrollWin=Ti.UI.createScrollView({
		//set layout
		layout:"horizontal",
		//set content
		contentWidth:deviceWidth,
		top:20,
		
	});
	
	
	
	
	//loop
	for(i=0; i<numOfItems; i++){
		//views
		var view=Ti.UI.createView({
			backgroundColor:"red",
			width: itemSize,
			height:itemSize,
			left:space,
			right: space,
			bottom: space,
		});
		var label=Ti.UI.createLabel({
			color:"white",
			text:"square"+i,
		});
		view.add(label);
		scrollWin.add(view);
	}
	
	//views
	
	
	//position 4 up with padding
	
	//add
	
	win.add(scrollWin);
	win.open();
	
	
	
	
	
	
	
	
// //open window
// win.add(viewContainer);
// win.open();

