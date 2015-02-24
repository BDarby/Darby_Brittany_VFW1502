//win
var win=Ti.UI.createWindow({
	backgroundColor:"#C2EAEB",
	layout:"vertical",
});
var swipeWin=Ti.UI.createWindow();
//var nav=Ti.UI.iOS.createNavigationWindow();

//views x2
//buttons

var button1=Ti.UI.createView({
	backgroundColor:"#ABE3CA",
	height: 100,
	width:100,
	id:0,
	title:"Button 1",
	isAwesome:true,
});

var button2=Ti.UI.createView({
	backgroundColor:"#E3ABDD",
	height: 100,
	width:100,
	id:1,
	title:"Button 2",
	isAwesome:false,
});
//set current page x2

var view1=Ti.UI.createView({
	backgroundColor:"#1B3750",
});

var view2=Ti.UI.createView({
	backgroundColor:"##D5B381",
});






//eventlisteners
button1.addEventListener("click", function(e){
	console.log(e);
	//set current page of swipe
	swipe.currentPage=e.source.id;
	swipeWin.add(swipe);
	swipeWin.open();
	
	
});

button2.addEventListener("click",function(e){
	console.log(e);
	swipe.currentPage=e.source.id;
	swipeWin.add(swipe);
	swipeWin.open();
});


//views for show


//scrollable
var viewCollection=[view1, view2];
var swipe=Ti.UI.createScrollableView({
	views:viewCollection,
	showPagingControl:true,
});
//add


//open

win.add(button1, button2);
//win.add(view1, view2);
win.open();


