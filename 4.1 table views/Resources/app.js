//Initial window/ BASIC SET UP

var win=Ti.UI.createWindow({
	backgroundColor:"#3DB870",
	height: Ti.UI.FILL,
	title:"Grocery App",
});

//data array

var breakfastItems=[
{title:"Bacon"}, 
{title:"eggs",},
{title:"Frosted flakes"},
 {title:"Milk"},
 {title:"Oj"}]; //dictionary

var lunchItems=[
{title:"bread"},
 {title:"cheese"},
 {title:"Bologna"},
  {title:"chips"},
  {title:"soda"},
  ]; 


var breakfastHeader=Ti.UI.createView({
	backgroundColor:"#8CC2D9",
});

breakfastLabel=Ti.UI.createLabel({
	color:"fff",
	text:"Breakfast",
});
breakfastHeader.add(breakfastLabel);


//table view  and table view section


var breakfastSection=Ti.UI.createTableViewSection({headerTitle:"Breakfast"});
//headerView:breakfastHeader;-don't do this
	
// 
var lunchSection=Ti.UI.createTableViewSection({headerTitle:"Lunch"});
// headerView:lunchHeader;
// 

var table=Ti.UI.createTableView({
	//style:Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: breakfastItems, 
	data:[breakfastSection, lunchSection], //this let's you know how many sections you will have.
	backgroundColor:"#47C2AF",
	headerTitle:"Groceries",
	separatorColor: "#5639AC",

});

//TODO: add table view section to table
//TODO: change color of rows.


for(i=0;i<breakfastItems.length;i++){
	var bRow=Ti.UI.createTableViewRow({
	
	title:breakfastItems[i].title,
});
breakfastSection.add(bRow);
}													//these are the for loops that will run my arrays

for(i=0;i<lunchItems.length;i++){
var lRow=Ti.UI.createTableViewRow({
	title:lunchItems[i].title,
});
lunchSection.add(lRow);
}


//device detection
var osName=Ti.Platform.name;
console.log(osName);

if(osName==="iPhone OS"){
	table.style=Ti.UI.iPhone.TableViewStyle.GROUPED;  //make sure to add semicolon, since it's not a property
} 

//open
win.add(breakfastLabel);
win.add(table);
//image.open();
win.open();
