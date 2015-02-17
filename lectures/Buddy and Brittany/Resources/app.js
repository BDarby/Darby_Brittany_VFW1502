var win=Ti.UI.createWindow({
	backgroundColor:"White",
});
 
 
var listView=Ti.UI.createListView({
	backgroundColor:"#6A246B",
	top:20,
});
 var sections=[];// create empty array because we are going to push something in there
 
//First section
var musicSection=Ti.UI.createListSection({
 	headerTitle:"Music Artist",
 });
 var musicDataSet=[
 {properties:{title:"Disturbed"}},
 {properties:{title:"Five finger death punch"}},
 {properties:{title:"Korn"}},
 {properties:{title:"Fall out boy"}},
 {properties:{title:"Panic! at the disco"}},
 ];

//second section

var movieSection=Ti.UI.createListSection({
	headerTitle:"Movie Titles",
});

var movieDataSet=[
 {properties:{title:"Dracula Untold"}},
 {properties:{title:"Avengers"}},
 {properties:{title:"Spiderman"}},
 {properties:{title:"Man of Steel"}},
 {properties:{title:"Batman Returns"}},
 ];
musicSection.setItems(musicDataSet);
sections.push(musicSection,movieSection);
movieSection.setItems(movieDataSet);




listView.sections = sections;
win.add(listView);
win.open();
