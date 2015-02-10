//Initial window/ BASIC SET UP

var win=Ti.UI.createWindow({
	backgroundColor:"#3DB870",
	height: Ti.UI.FILL,
	title:"Grocery App",
});





//data array

//var breakfastItems=["bacon","eggs","Frosted flakes","Milk","Oj"];
var breakfastItems=[{title:"Bacon"}, {title:"eggs"},{title:"Frosted flakes"}, {title:"Milk"},{title:"Oj"}]; //dictionary

var lunchItems=[{title:"bread"}, {title:"cheese"},{title:"Bologna"}, {title:"chips"},{title:"soda"}]; 


//table view  and table view section

var table=Ti.UI.createTableView({
	style:Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems, 
	dats:[breakfastSection, lunchSection],
	backgroundColor:"#47C2AF",
	headerTitle:"Gorceries",
	separatorColor: "#5639AC",

});
var breakfastSection=Ti.UI.createTableViewSection();
headerTitle:"Breakfast";
var lunchSection=Ti.UI.createTableViewSection();
headerTitle: "Lunch";


//TODO: add table view section to table
//TODO: change color of rows.


var breakfastHeader=Ti.UI.createView({
	backgroundColor:"",
});

breakfastLabel-Ti.UI.createLabel({
	color:"fff",
	text:"Breakfast"
});
breakfastHeader.add(breakfastHeader);


//device detection
var osName=Ti.Platform.name;
console.log(osName);

if(osName==="iPhone OS"){
	table.style=Ti.UI.iPhone.TableViewStyle.GROUPED;  //make sure to add semicolon, since it's not a property
}



//open
win.add(table);
win.open();
