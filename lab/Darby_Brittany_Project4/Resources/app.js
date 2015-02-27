//WINDOWS
 
 
 
var mainWin=Ti.UI.createWindow({  //where all three buttons will show up.
 backgroundImage:"vs2.jpg",
 });
 
 
 
var imageWin=Ti.UI.createWindow({  //this is where the random images of the models will appear.
 backgroundColor:"#E2A7B0",
 });

var dataWin=Ti.UI.createWindow({  //this is where the information about the models will go.
	backgroundColor:"#9CCFDE",
});

var vidWin=Ti.UI.createWindow({ //this will a video of the VS fashion show.
	backgroundColor:"#B68CD9",
});


//NAVIGATION WINDOW
var pages=Ti.UI.iOS.createNavigationWindow({   //this is the navigation window
	window:mainWin, 
	
});

//BUTTONS
var models=Ti.UI.createButton({
	title:"Models",
	bottom:70,
});

var info=Ti.UI.createButton({
	title:"Information",
	bottom:50,
});

var video=Ti.UI.createButton({
	title:"Video",
	bottom:30,
});



// //these buttons close each window
// var models1=Ti.UI.createButton({
	// title:"Main Page",
	// bottom:50,
// });
// 
// var info1=Ti.UI.createButton({
	// title:"Main Page",
	// bottom:50,
// });
// 
// var video1=Ti.UI.createButton({
	// title:"Main Page",
	// bottom:50,
// });

//EVENT LISTENERS

models.addEventListener("click",function(){
	pages.openWindow(imageWin,{animated:true});
});

info.addEventListener("click",function(){
	pages.openWindow(dataWin,{animated:true});
});

video.addEventListener("click",function(){
	pages.openWindow(vidWin,{animated:true});
});



// vidWin.add(video1);
// dataWin.add(info1);
// imageWin.add(models1);







//require("secondary");
//mainWin.add(models, info, video);
//mainWin.open();
require("secondary");
pages.add(models, info, video);
pages.open();

