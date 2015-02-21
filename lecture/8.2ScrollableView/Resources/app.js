// win=Ti.UI.createWindow({
	// backgroundColor:"#ccc",
// });
// 	
// 	
// var img1 = Ti.UI.createImageView({
    // image:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/' +
    // 'Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/' +
    // '402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
// });
// var img1Wrapper = Ti.UI.createScrollView({
    // maxZoomScale:4.0,
// });
// img1Wrapper.add(img1);
// 
// var img2 = Ti.UI.createImageView({
    // image:'http://www.nasa.gov/images/content/' + 
    // '616903main_rover_comparison1600_1600-1200.jpg'
// });
// var img2Wrapper = Ti.UI.createScrollView({
    // maxZoomScale:4.0,
// });
// img2Wrapper.add(img2);
// var photosView = Ti.UI.createScrollableView({
    // showPagingControl:true,
    // views:[img1Wrapper, img2Wrapper]
// });
// win.add(photosView);
// 
// win.open();





var win = Ti.UI.createWindow();
var data=[
	{color:"red", name:"Roses"},
	{color:"green",name:"Grass"},
	{color:"blue",name:"Ocean"},
	{color:"yellow", name:"sunshine"},
];

var viewCollection=[];
for(i=0; i<data.length; i++){
	var view=Ti.UI.createView({
		backgroundColor:data[i].color,
		name:data[i].name,
	});
	var label=Ti.UI.createLabel({
		text:data[i].name,
	});

	view.add(label);
	viewCollection.push(view);
}

var scrollableView=Ti.UI.createScrollableView({
	views: viewCollection,
});



scrollableView.addEventListener('scrollend', function(eventData){
	console.log(eventData);
	if(eventData.currentPage === 3) //this is the current page on the array
	alert("You saw yellow");
});




var view1 = Ti.UI.createView({ backgroundColor:'#123', name:"View Red"});
var view2 = Ti.UI.createView({ backgroundColor:'#246', name:"View Green" });
var view3 = Ti.UI.createView({ backgroundColor:'#48b', name :"View Blue" });

var scrollableView = Ti.UI.createScrollableView({
  views:[view1,view2,view3],
  showPagingControl:true,
});

win.add(scrollableView);
win.open();