

win=Ti.UI.createWindow({
	backgroundColor:"#E4EBC2",
	//layout:"vertical", //Can't be set to horizontal when scrollView is also set to horizontal, one or the other
	statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});


var nav=Ti.UI.iOS.createNavigationWindow({
	window: win
});



require("secondary");
nav.open();






