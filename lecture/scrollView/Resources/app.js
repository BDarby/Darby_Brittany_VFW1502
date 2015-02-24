var deviceWidth=Ti.Platform.displayWidth;


var win=Ti.UI.createWindow({
	backgroundColor:"White",
});


var view1=Ti.UI.createImageView({
	image:"sunsets/sunset1.jpeg",
});

var view2=Ti.UI.createImageView({
	image:"sunsets/sunset2.jpeg",
});

var view3=Ti.UI.createImageView({
	image:"sunsets/sunset3.jpeg",
	width: deviceWidth,
});


var zoom=Ti.UI.createScrollView({
	maxZoomScale:2.0,
	
});
var zoom2=Ti.UI.createScrollView({
	maxZoomScale: 2.0,
});

var viewContainer=[zoom, zoom2];

var swipe= Ti.UI.createScrollableView({
	views:viewContainer,
	showPagingControl:true,
	
});
swipe.currentPage=1;
swipe.setCurrentPage(1);



zoom.add(view3);
zoom2.add(view2);
win.add(swipe);
win.open();
