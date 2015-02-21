


//win
var win=Ti.UI.createWindow({
	backgroundColor:"#ccc",
	orientationModes:[
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	
		]
});

//view
var box= Ti.UI.createView({
	backgroundColor:"#C39CDE",
	width: 200,
	height:200,
});

//event listener
// box.addEventListener("orientationchange", function(){
	// console.log("Things Change");
	// var phoneSize=Ti.Platform.displayCaps.platformWidth;
	// box.width=phoneSize;
	// console.log(phoneSize);
	
//});


var changeSize=function(){
	phoneSize=Ti.Platform.displayCaps.platformWidth;
	box.width=phoneSize/2;
	if (box===3){
		box.backgroundColor="red";
	}else{
		box.backgroundColor="blue";
	}
	console.log(phoneSize);
};



Ti.Gesture.addEventListener("orientationchange",changeSize);


//add
win.add(box);

//open
win.open();
