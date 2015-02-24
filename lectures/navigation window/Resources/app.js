var win1=Ti.UI.createWindow({// this is a window
	backgroundColor:"green",
	title:"Color,"
});



var winDetail=Ti.UI.createWindow({ //this is a window
	backgroundColor:"Yellow",
	title:"color 2",
});


var win3=Ti.UI.createWindow({
	backgroundColor:"Purple",
	title:"Color 3",
});


var naviGroup=Ti.UI.iOS.createNavigationWindow({
	window:win2,
});


var button=Ti.UI.createButton({
	title:"Look at color 2",
});

button.addEventListener("Click",function(event){
	navigationGroup.openWindow(),
});





win1.open();





// //detail function
// 
// var getDetail=function(){
	// var winDetail=Ti.UI.createWindow({
		// backgroundColor:"#3BB050",
	// });
	// var labelTitle=Ti.UI.createLabel({
		// text:event.source.title,
	// });
// });
// 
// 
// 
// //this is the array
// 
// var afcNorth=[
// {title:"Ravens"},
// {title:"Steelers"},
// {title:"Bengals"},
// {title:"Browns"},
// ];
// 
// var afcEast=[
// {title:"Bills"},
// {title:"Dolphins"},
// {title:"Patriots"},
// {title:"Jets"},
// ]; 
// 
// var afcSouth=[
// {title:"Texans"},
// {title:"Colts"},
// {title:"Jaguars"},
// {title:"Titans"},
// ];
// 
// var afcWest=[
// {title:"Broncos"},
// {title:"Cheifs"},
// {title:"Raiders"}, 
// {title:"Chargers"},
// ];
// 
// 
// // JSON, XML, SQL
// 
// //this is JSON
// //make sure your JSON project is a data, array, properties, or objects.
// var  data={
	// property:value,
	// property:{
		// property:value,
		// propert:{},
	// }
// };
// 
// var data2=[
	// {afcNorth: [
// 		
	// ]},
// 	
// 	
	// {afcEast:[
// {title:"Ravens"},
// {title:"Steelers"},
// {title:"Bengals"},
// {title:"Browns"},]},
	// {afcSouth:[]},
	// {afcWest:[]};
// ];
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
