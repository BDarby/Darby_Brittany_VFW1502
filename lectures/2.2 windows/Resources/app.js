/*var win = Titanium.UI.createWindow({
	//backgroundColor:"Black",
	backgroundColor:"#C9DE9C",
});


var view= Titanium.UI.createView({
	//backgroundColor: "ffffff",
	//backgroundImage:(http:/41.media.tumblr.com/49d6fb7fd697e9b157114bcfa3c923ae/tumblr_mn1d0msK3D1sqcwbmo1_500.jpg),
	backgroundImage:"galaxy.jpeg", //i renamed an image
	width: 500,
	height: 200,
});

win.add(view);
win.open();
*/



/*var win=Titanium.UI.createWindow({
	backgroundColor:"#6ACDBD",
});
var view=Titanium.UI.createView({
	backgroundColor:"#6ACDBD",
});


var title = Ti.UI.createLabel({
 title: "Practice",
 top:10,
});


var view2=Ti.UI.createView({    // can't get this to work
	backgroundImage:"sharks.jpeg",
	width:500,
	height:200,
});



win.add(view2);
win.add(title);
win.add(view);  //this is like the console.log
win.open();     //this is like the console.log
*/

//________________________________________________________________________________________________________________________
var title= Titanium.UI.createLabel({
	 text: "Pittsburgh Steelers", //this is the object
	 color:"White",
	 top:200
	}); 



var win=Titanium.UI.createWindow({
	backgroundImage:"steelers.jpeg",  //this is background
	width:500,
	height:800,
});


var Steelers=["T.Polamalu", "Big Ben", "J.Harrison", "A,Brown", "M.Pouncey"];   //this is my array.


var buttbar = Titanium.UI.createButtonBar({   //Titanium.UI.createButtonBar is the a function.
    labels:["Previous", "Next"],//
    backgroundColor:"#D8C9ED", //
    top:100,                   //  this whole thing is the method
    height:25,                 //
    width:200,                 //
});



var animation = Titanium.UI.createAnimation();  //animation is the property
animation.color = "red";
animation.duration = 5000;
title.animate(animation);



win.add(buttbar);
win.add(title);
win.add(win);
win.open();









