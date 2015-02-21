//window

win=Ti.UI.createWindow({
	backgroundColor:"#B3E4E6",
	layout:"horizontal", //this layout mode allows wrapping
	//layout:"vertical"  //greate for wide view
	top:20,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

//loop


var makeViews=function(){
	for(var i=0; i<10; i++){
			
			//var size= i*100;
			var newView=Ti.UI.createView({
			backgroundColor:"#D685C2",
			borderColor:"black",
			height:75,
			width:75,  //to make it wider 
			//top:0,
			left:2, //left, right, etc 
			//bottom:2,
		});
		var newLabel=Ti.UI.createLabel({
			color:"#fff",
			text:"Square #"+i,
		});
		newView.add(newLabel);
		win.add(newView);
	}
};
makeViews();
win.open();

 
win.open();
