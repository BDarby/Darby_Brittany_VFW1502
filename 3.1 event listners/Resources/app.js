//create a window
//add custom color
//create a view
//add a view
//open a window

var win=Titanium.UI.createWindow({
	backgroundColor:"blue",
	
});

var view=Titanium.UI.createView({
	backgroundColor:"purple",
	width: 300,
	height:200,
});

//add event listner
view.addEventListener('click', function(eventData){
	alert("I've been clicked");
	console.log(eventData);
});
 

win.add(view);
win.open();
