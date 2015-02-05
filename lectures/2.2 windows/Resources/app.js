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



var win=Titanium.UI.createWindow({
	backgroundColor:"#6ACDBD",
});
var view=Titanium.UI.createView({
	backgroundColor:"#6ACDBD",
});


var title = Ti.UI.createLabel({
 title: "Practice",
 top:10,
});


var shark=Ti.UI.createView({
	backgroundImage:"sharks.jpeg",
	width:200,
	length:200,
});



win.add(shark);
win.add(title);
win.add(view);  //this is like the console.log
win.open();     //this is like the console.log










