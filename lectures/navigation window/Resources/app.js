var win1=Ti.UI.createWindow({// this is a window
	backgroundColor:"green",
	title:"Color,"
});



var winDetail=Ti.UI.createWindow({ //this is a window
	backgroundColor:"Yellow",
	title:"color 2",
});


var win3=Ti.UI.createWindow({
	backgroundColor:"Purple",
	title:"Color 3",
});


var naviGroup=Ti.UI.iOS.createNavigationWindow({
	window:win2,
});


var button=Ti.UI.createButton({
	title:"Look at color 2",
});

button.addEventListener("Click",function(event){
	navigationGroup.openWindow(),
});





win1.open();




for (var i = 0; i < itemCount; i++) {

var view = Ti.UI.createImageView({
image : "Movies/" + galleryList[i],
backgroundColor : "transparent",
top : margin,
left : margin,
width : size,
height : size,
index : i,
borderRadius : 10,
name: i
});

viewContainer.add(view);

view.addEventListener("click", function() {

var newWindow = Ti.UI.createWindow({

backgroundColor : "white",
title : "Movies On Demand",
layout : "horizontal"

});

navGroupWin.openWindow(newWindow, {
animated : true
});



for (var i = 0; i < galleryList.length; i++) {


var renters = Ti.UI.createImageView({
image : "Movies/" + galleryList[i],
backgroundColor : "transparent",
index : i,
width : pWidth,
//borderRadius : 10,
name: i

});

myArray.push(renters);

};

var scrollableView = Ti.UI.createScrollableView({
views : myArray,
showPagingControl : true,
backgroundColor : "black",
pagingControlOnTop:true,
pagingControlColor:"transparent"
});

newWindow.add(scrollableView);
scrollableView.currentPage = this.name;

});

};
