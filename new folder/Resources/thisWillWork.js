
var listSections=[];

var listView=Ti.UI.createListView({  //need this to view the list
	backgroundColor:"#C6DBEC",
});

var afcNorthSection=Ti.UI.createListSection({  //need this to create the sections of the list
	headerTitle:"Afc North",
});



var afcNorth=[
{properties:{title:"Ravens"}},
{properties:{title:"Steelers"}},
{properties:{title:"Bengals"}},
{properties:{title:"Browns"}},
];


var afcEastSection=Ti.UI.createListSection({
	headerTitle:"Afc East",
});
var afcEast=[
{properties:{title:"Bills"}},
{properties:{title:"Dolphins"}},
{properties:{title:"Patriots"}},
{properties:{title:"Jets"}},
]; 

var afcSouthSection=Ti.UI.createListSection({
	headerTitle:"Afc South",
	
});



var afcSouth=[
{properties:{title:"Texans"}},
{properties:{title:"Colts"}},
{properties:{title:"Jaguars"}},
{properties:{title:"Titans"}},
];

var afcWestSection=Ti.UI.createListSection({
	headerTitle:"Afc West",
});

var afcWest=[
{properties:{title:"Broncos"}},
{properties:{title:"Cheifs"}},
{properties:{title:"Raiders"}}, 
{properties:{title:"Chargers"}},
];

listView.section=section;
listSections.push(afcEastSection,afcSouthSection, afcWestSection);

afcNorthSection.setItems(afcNorth);
afcEastSection.setItems(afcEast);
afcSouthSection.setItems(afcSouth);
afcWestSection.setItems(afcWest);

listSections.push(afcNorthSection,afcEastSection,afcSouthSection,afcWestSection);

//win.add(listView);


//these are the exports
exports.afcNorth=afcNorth;
exports.afcEast=afcEast;
exports.afcSouth=afcSouth;
exports.afcWest=afcWest;




var afcNorthHeader=Ti.UI.createView({			//North
	backgroundColor:"#873EBB",

});
afcNorthLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC North"
});

afcNorthHeader.add(afcNorthLabel);


var afcEastHeader=Ti.UI.createView({			//East
	backgroundColor:"#873EBB",

});
afcEastLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC East"
});
afcEastHeader.add(afcEastLabel);


var afcSouthHeader=Ti.UI.createView({			//south
	backgroundColor:"#873EBB",

});
afcSouthLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC South" 
});

afcSouthHeader.add(afcSouthLabel);


var afcWestHeader=Ti.UI.createView({			//West
	backgroundColor:"#873EBB",

});
afcWestLabel=Ti.UI.createLabel({
	color:"#3DB870",
	text:"AFC West"
});
afcWestHeader.add(afcWestLabel);



var afcNSection=Ti.UI.createTableViewSection({headerTitle:"AFC North"});
var afcESection=Ti.UI.createTableViewSection({headerTitle:"AFC East"});
var afcSSection=Ti.UI.createTableViewSection({headerTitle:"AFC South"});
var afcWSection=Ti.UI.createTableViewSection({headerTitle:"AFC West"});


// these are my loops
for (i=0;i<afcNorth.length;i++){
	var row=Ti.UI.createTableViewRow({
		title:afcNorth[i].properties.title,
		color:"#C2EBC5",
	});
afcNSection.add(row);
row.addEventListener("click", function(event){
	console.log(event);
	
		var northWin=Ti.UI.createWindow({
			backgroundColor:"#33996B",
			
		});
		winT.openWindow(northWin);
		backgroundColor:"#D2C6EC",
});


}		

for (i=0;i<afcEast.length;i++){
	var eastRow=Ti.UI.createTableViewRow({
		title:afcEast[i].properties.title,
		color:"#C2EBC5",
	});
afcESection.add(eastRow);
eastRow.addEventListener("click", function(){
	var eastWin=Ti.UI.createWindow({
		backgroundColor:"#D2C6EC"
	});
	winT.openWindow(eastWin);
}

// for (i=0;i<afcSouth.length;i++){
	// var southRow=Ti.UI.createTableViewRow({
		// title:afcSouth[i].properties.title,
		// color:"#B3E4E6",
	// });
// afcSSection.add(southRow);
// southRow.addEventListener("click",function(){
	// var southWin=Ti.UI.
// 	
// })
// }

for (i=0;i<afcWest.length;i++){
	var westRow=Ti.UI.createTableViewRow({
		title:afcWest[i].properties.title, //this is how I "export" my arrays
		color:"##B3E4E6",
	});
afcWSection.add(westRow);
}

var section=[];//I am going to push my sections into this array.

var teamTable=Ti.UI.createTableView({
	headerTitle:"AFC Division",
});


section.push(afcNSection, afcESection, afcSSection, afcWSection);
teamTable.setData(section);
winN.add(teamTable);
