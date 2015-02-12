var win= Ti.UI.createWindow({
	backgroundColor:"#8CC2D9",
	//height:Ti.UI.FILL,
	text:"Football App",
	textColor:"#C2EBC5",
	statusBarStyle:Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
});


var image=Ti.UI.createWindow({
	backgrounfImage:"nfl.jpeg",
	height: 400,
	width:300,
});
	



//I have four data arrays

var afcNorth=[
{title:"Ravens"},
{title:"Steelers"},
{title:"Bengals"},
{title:"Browns"},
];

var afcEast=[
{title:"Bills"},
{title:"Dolphins"},
{title:"Patriots"},
{title:"Jets"},
]; 

var afcSouth=[
{title:"Texans"},
{title:"Colts"},
{title:"Jaguars"},
{title:"Titans"},
];

var afcWest=[
{title:"Broncos"},
{title:"Cheifs"},
{title:"Raiders"}, 
{title:"Chargers"},
];



var afcNHeader=Ti.UI.createView({			//North
	backgroundColor:"#873EBB",

});
afcNLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC North"
});

var afcEHeader=Ti.UI.createView({			//East
	backgroundColor:"#873EBB",

});
afcELabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC East"
});


var afcSHeader=Ti.UI.createView({			//south
	backgroundColor:"#873EBB",

});
afcSLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC South" 
});


var afcWHeader=Ti.UI.createView({			//West
	backgroundColor:"#873EBB",

});
afcWLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC West"
});



var afcNSection=Ti.UI.createTableViewSection({headerTitle:"AFC North"});
var afcESection=Ti.UI.createTableViewSection({headerTitle:"AFC East"});
var afcSSection=Ti.UI.createTableViewSection({headerTitle:"AFC South"});
var afcWSection=Ti.UI.createTableViewSection({headerTitle:"AFC West"});


footballTable=Ti.UI.createTableView({
	data:[afcNSection,afcESection,afcSSection,afcWSection], //this let's you know how many sections you will have.
	backgroundImage:"nfl.jpeg",
	backgroundColor:"transparent",
	headerTitle:"NFL AFC Teams",
	separatorColor:"#47C2AF",
});

// var headerView=Ti.UI.createTableViewSection({headerTitle:"NFL AFC Teams"});
// headerView.add(headerTitle);

//detail function

// var getDetail=function(){
	// var winDetail=Ti.UI.createWindow({
		// backgroundColor:"#3BB050",
	// });
	// var labelTitle=Ti.UI.createLabel({
		// text:event.source.title,
	// });





for (i=0;i<afcNorth.length;i++){
	var northRow=Ti.UI.createTableViewRow({
	title:afcNorth[i].title,
	color:"#C2EBC5",

});
afcNSection.add(northRow);
}								

// northRow.addEventListener("click,function"(){
	// console.log("The north row was clicked"),
// });			


for (i=0;i<afcEast.length;i++){
	var eastRow=Ti.UI.createTableViewRow({
		title:afcEast[i].title,
		color:"#C2EBC5",
});
afcESection.add(eastRow);
}

for (i=0;i<afcSouth.length;i++){
	var southRow=Ti.UI.createTableViewRow({
	title:afcSouth[i].title,
	color:"#C2EBC5",
});
afcSSection.add(southRow);
}

for (i=0;i<afcWest.length;i++){
	var westRow=Ti.UI.createTableViewRow({
	title:afcWest[i].title,
	color:"#C2EBC5",
});
afcWSection.add(westRow);
}


var osName=Ti.Platform.name;
console.log(osName);

if(osName==="iPhone OS"){
	//footballTable.style=Ti.UI.iPhone.TableViewStyle.GROUPED; // don't use group because it does some weird shit.
} 

//footballTable.add(image);
win.add(footballTable);
win.open();

// require("Darby_Brittany_Project2.2");

//This is my attempt of doing JSON


var data=[

{afcNorth:[
{title:"Ravens","ravens",},
{title:"Steelers":"pittsburgh"},
{title:"Bengals":"cincinatti"},
{title:"Browns":"cleveland"},]},
	
	{afcEast:[
{title:"Bills":"buffalo"},
{title:"Dolphins":"Miami"},
{title:"Patriots":"new england"},
{title:"Jets":"new york"},
		
	]},
	{afcSouth:[
{title:"Texans":"Huston"},
{title:"Colts":"Indianapolis"},
{title:"Jaguars":"Jacksonville"},
{title:"Titans":"Tennessee"},
		
	]};
	{afcWest:[
{title:"Broncos":"Denver"},
{title:"Cheifs":"kansas City"},
{title:"Raiders":"Oakland"}, 
{title:"Chargers":"San Diego"},
		
]};


];











var win2=Ti.UI.createWindow({
	backgroundColor:'#B3E5E6',
	title:"SkyBlue Window",
});

var button = Titanium.UI.createButton({
    title: 'AFC Lineup',
});

button.addEventListener('click', function(){
    win.openWindow(win2, {animated:true});
});



