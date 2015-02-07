var win=Titanium.UI.createWindow({
	backgroundColor:"blue",
	
});

var view=Titanium.UI.createView({
	backgroundColor:"purple",
	width: 300,
	height:200,
	top:10,
});

var view2=Titanium.UI.createView({
	backgroundColor:"purple",
	width: 300,
	height:200,
	top: 220,
});
var view3=Titanium.UI.createView({
	backgroundColor:"purple",
	width: 300,
	height:200,
	top: 430,
});


//add event listner
view.addEventListener('click', function(eventData){
	alert("I've been clicked again");
	console.log(eventData);
});
view3.addEventListener('swipe', function(eventData){
	alert("swiper no swiping");
	console.log(eventData);
});
view2.addEventListener("dblclick", function(event){
	alert("STOP CLICKING OR NAH");
	console.log(event);
});



 var loadFile=require("secondary");
console.log(loadFile.myArray);



win.add(view);
win.add(view2);
win.add(view3);
win.open();
