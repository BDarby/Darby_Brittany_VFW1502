


//windows

var team=Ti.UI.createWindow({
	backgroundColor:"green",
	title:"AFC teams",
});

var winT=Ti.UI.iOS.createNavigationWindow({
	window:team,
	
});
var winN=Ti.UI.createWindow({  //window North
	backgroundColor:"Yellow",
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
    title: 'AFC Lineup',
    top:300,
});
 
 var buttonE = Titanium.UI.createButton({ //creates button for East
    title: 'AFC Lineup',
    top:400,
});

var buttonS=Titanium.UI.createButton({//creates button for South
    title: 'AFC Lineup',
    top:500,
});
    
var buttonW=Titanium.UI.createButton({  //creates button for West
    title: 'AFC Lineup',
    top:600,
});
 



//Event listeners

buttonN.addEventListener("click",function(){   //this close The north window
	winT.open(winN,{animate:false});
});

buttonE.addEventListener("click",function(){  //this closes the east window
	winT.openWindow(winE, {animate:false});
});

buttonS.addEventListener("click",function(){  //this close the south window
	winT.openWindow(winS,{animate:false} );	
});

buttonW.addEventListener("click",function(){  //this closes the west window
	winT.closeWindow(winW,{animate:false});
});


//this is the for loop

//.........i got nothing



//I think this is the code refractoring part


// var data=[
// 
// {afcNorth:[
// {title:"Ravens","Baltimore"},
// {title:"Steelers":"pittsburgh"},
// {title:"Bengals":"cincinatti"},
// {title:"Browns":"cleveland"},
// ]
// 	
	// {afcEast:[
// {title:"Bills":"buffalo"},
// {title:"Dolphins":"Miami"},
// {title:"Patriots":"new england"},
// {title:"Jets":"new york"},
// ]
// 		
	// {afcSouth:[
// {title:"Texans":"Huston"},
// {title:"Colts":"Indianapolis"},
// {title:"Jaguars":"Jacksonville"},
// {title:"Titans":"Tennessee"},
// ]
// 
// 
	// {afcWest:[
// {title:"Broncos":"Denver"},
// {title:"Cheifs":"kansas City"},
// {title:"Raiders":"Oakland"}, 
// {title:"Chargers":"San Diego"},
// 		
// ]};
// 
// 
// ];



//detail function...not sure how this works though

// var getDetail=function(){
	// var winDetail=Ti.UI.createWindow({
		// backgroundColor:"#3BB050",
	// });
	// var labelTitle=Ti.UI.createLabel({
		// text:event.source.title,
	// });




// data.view();
winN.add(buttonN);
winE.add(buttonE);
winS.add(buttonS);
winW.add(buttonW);
winT.open();
//team.open();