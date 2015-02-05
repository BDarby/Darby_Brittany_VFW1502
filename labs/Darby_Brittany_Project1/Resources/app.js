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



