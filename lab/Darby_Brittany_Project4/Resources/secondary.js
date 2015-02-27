//this is for my Random image
var vsAngels=[];
//var math=math.random(angels);
var angels=Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"angels");//this is how you get stuff out of the file.
var angelsList=angels.getDirectoryListing();

for(i=0; i<angelsList.length; i++){
	
	var theImage=Ti.UI.createImageView({
		image:"angels/"+angelsList[i],
		//height:math,
		id:1,
	});
	
	
}; //this is the end of the for loop

//var viewAngels=(theImage);
imageWin.add(theImage);




// var win=Ti.UI.createWindow({
	// backgroundColor:"#3DB870",
	// height: Ti.UI.FILL,
	// title:"Grocery App",
// });
// 
// //data array
// 
// var breakfastItems=[
// {title:"Bacon"}, 
// {title:"eggs",},
// {title:"Frosted flakes"},
 // {title:"Milk"},
 // {title:"Oj"}]; //dictionary
// 
// var lunchItems=[
// {title:"bread"},
 // {title:"cheese"},
 // {title:"Bologna"},
  // {title:"chips"},
  // {title:"soda"},
  // ]; 
// 
// 
// var breakfastHeader=Ti.UI.createView({
	// backgroundColor:"#8CC2D9",
// });
// 
// breakfastLabel=Ti.UI.createLabel({
	// color:"fff",
	// text:"Breakfast",
// });
// breakfastHeader.add(breakfastLabel);

// var table=Ti.UI.createTableView({
	// //style:Ti.UI.iPhone.TableViewStyle.GROUPED,
	// data: breakfastItems, 
	// data:[breakfastSection, lunchSection], //this let's you know how many sections you will have.
	// backgroundColor:"#47C2AF",
	// headerTitle:"Groceries",
	// separatorColor: "#5639AC",
// 
// });

// for(i=0;i<breakfastItems.length;i++){
	// var bRow=Ti.UI.createTableViewRow({
// 	
	// title:breakfastItems[i].title,
// });
// breakfastSection.add(bRow);
// }													//these are the for loops that will run my arrays
// 
// for(i=0;i<lunchItems.length;i++){
// var lRow=Ti.UI.createTableViewRow({
	// title:lunchItems[i].title,
// });
// lunchSection.add(lRow);
// }



var doutzenSection=Ti.UI.createTableViewSection({headerTitle:"Doutzen"});
var jasmineSection=Ti.UI.createTableViewSection({headerTitle:"Jasmine"});




var adriana=[
{title:"Brazilian"},
];

var adrianaSection=Ti.UI.createTableViewSection({headerTitle:"Adriana"});

for(i=0;i<adriana.length;i++){
var aRow=Ti.UI.createTableViewRow({
	title:adriana[i].title,
});
adrianaSection.add(aRow);

}

var doutzen=[
{title:"The Netherlands"},
];

for(i=0;i<doutzen.length;i++){
	var dRow=Ti.UI.createTableViewRow({
		title:doutzen[i].title,
	});
	doutzenSection.add(dRow);
}

var jasmine=[
{title:"Huntington Beach"},
];

for(i=0;i<jasmine.length;i++){
	var jRow=Ti.UI.createTableViewRow({
		title:jasmine[i].title,
	});
	jasmineSection.add(jRow);
}

var angelTable=Ti.UI.createTableView({
	style:Ti.UI.iPhone.TableViewStyle.GROUPED,
	data:[adrianaSection, doutzenSection, jasmineSection],
	headertitle: "VS Angels",
	separatorColor:"black",
});

dataWin.add(angelTable);
