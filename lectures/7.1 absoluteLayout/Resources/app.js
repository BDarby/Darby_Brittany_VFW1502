//window

win=Ti.UI.createWindow({
	backgroundColor:"#B3E4E6",
	layout:"horzontal", //this layout mode allows wrapping
	//layout:"vertical"  //greate for wide view
	top:20,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

//loop
//var numberOfViews=10;

var makeViews=function(){
	for(var i=0; i<10; i++){
	
	//var size= i*100;
	var newView=Ti.UI.createView({
	backgroundColor:"#D685C2",
	borderColor:"black",
	height:100,
	width:100,  //to make it wider 
	//top:0,
	left:2, //left, right, etc 
	bottom:2,
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

 var view=Ti.UI.createView({
	backgroundColor:"#C6DBEC",
	 height:100,
	 width:100,
	 left:0,
	 top:0,
 });

//add


//open
win.open();
