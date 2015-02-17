// // require(Darby_Brittany_Project2.2);
// // Darby_Brittany_Project2.add("Darby_Brittany_Project2");
// 
// 
// //windows
// 
// var team=Ti.UI.createWindow({
	// backgroundColor:"green",
	// title:"AFC teams",
// });
// 
// var winT=Ti.UI.iOS.createNavigationWindow({
	// window:team,
// 	
// });
// var winN=Ti.UI.createWindow({  //window North
	// backgroundColor:"Yellow",
	// title:"AFC North",
// });
// 
// 
// var winE=Ti.UI.createWindow({ //window east
	// window:"AFC East",
// });
// 
// var winS=Ti.UI.createWindow({ // window South
	// window:"AFC South",
// });
// 
// var winW=Ti.UI.createWindow({ //window west
	// window:"AFC West",
// });
//  
//  
 // //buttons
//  
//  
 // var buttonN = Titanium.UI.createButton({  //creates button for North
    // title: 'AFC Lineup',
    // top:300,
// });
//  
 // var buttonE = Titanium.UI.createButton({ //creates button for East
    // title: 'AFC Lineup',
    // top:400,
// });
// 
// var buttonS=Titanium.UI.createButton({//creates button for South
    // title: 'AFC Lineup',
    // top:500,
// });
//     
// var buttonW=Titanium.UI.createButton({  //creates button for West
    // title: 'AFC Lineup',
    // top:600,
// });
//  
// 
// 
// 
// //Event listeners
// 
// buttonN.addEventListener("click", function(){   //this close The north window
	// winN.open(winE);
// });
// 
// buttonE.addEventListener("click",function(){  //this closes the east window
	// winE.closeWindow();
// });
// 
// buttonS.addEventListener("click",function(){  //this close the south window
	// winS.closeWindow;	
// });
// 
// buttonW.addEventListener("click",function(){  //this closes the west window
	// winW.closeWindow;
// });
// 
// 
// //this is the for loop
// 
// //.........i got nothing
// 
// 
// 
// //I think this is the code refractoring part
// 
// 
// var data=[
// 
// {afcNorth:[
// {title:"Ravens":"ravens"},
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
// 
// 
// 
// //detail function...not sure how this works though
// 
// // var getDetail=function(){
	// // var winDetail=Ti.UI.createWindow({
		// // backgroundColor:"#3BB050",
	// // });
	// // var labelTitle=Ti.UI.createLabel({
		// // text:event.source.title,
	// // });
// 
// 
// 
// 
// data.view();
// winN.open(buttonN);
// winE.open(buttonE);
// winS.open(buttonS);
// winW.open(buttonW);
// winT.open();
// team.open();
