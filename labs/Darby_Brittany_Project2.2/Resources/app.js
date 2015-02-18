var team=Ti.UI.createWindow({ //this is the main window, that the open buttons will appear on
	backgroundColor:"green",
	title:"AFC teams",
});

var team2=Ti.UI.createWindow({  //this is the secondary window
	backgroundColor:"#C6DBEC",
});



var winT=Ti.UI.iOS.createNavigationWindow({
	window:team,
	
});
var winN=Ti.UI.createWindow({  //window North
	backgroundColor:"yellow",
	title:"AFC North",
});


var winE=Ti.UI.createWindow({ //window east
	window:"AFC East",
});

var winS=Ti.UI.createWindow({ // window South
	window:"AFC South",
});

var winW=Ti.UI.createWindow({ //window west
	window:"AFC West",
});
 
 
 //buttons
 
 
 var buttonN = Titanium.UI.createButton({  //creates button for North
    title: 'AFC  Lineup',
    top:300,
});
 
 
 

//Event listeners

buttonN.addEventListener('click',function(){   //this opens The north window
	winT.openWindow(winN,{animated:true});
});




//these are the exports.
var loadFile=require("thisWillWork");
console.log(loadFile.afcNorth);
console.log(loadFile.afcEast);
console.log(loadFile.afcSouth);
console.log(loadFile.afcWest);



team.add(buttonN);

winT.open();


require("second to2.2");
winT.open();
