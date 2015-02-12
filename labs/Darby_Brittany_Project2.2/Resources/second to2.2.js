require(Darby_Brittany_Project2.2);
Darby_Brittany_Project2.add("Darby_Brittany_Project2.2");


var team=Ti.UI.createWindow({
	backgroundColor:"green",
	title:"AFC teams",
});

var winT=Ti.UI.iOS.createNavigationWindow({
	window:team,
	
});
var winN=Ti.UI.createWindow({
	backgroundColor:"Yellow",
	title:"AFC North",
});


var winE=Ti.UI.createWindow({
	window:"AFC East",
});

var winS=Ti.UI.createWindow({
	window:"AFC South",
});

var winW=Ti.UI.createWindow({
	window:"AFC West",
});
 
 
 //buttons
 
 
 var buttonN = Titanium.UI.createButton({
    title: 'AFC Lineup',
    top:300,
});
 
 var buttonE = Titanium.UI.createButton({
    title: 'AFC Lineup',
    top:400,
});
 
buttonNo=addEventListener("click", function(){
	winN..closeWindow




var win2 = Titanium.UI.createWindow({
    backgroundColor: '#6ACDA7',
    title: 'sea glass window'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: win2
});

var win4= Ti.UI.createWindow({
	backbroundColor:"#B43C66",
	title:"Purple window",
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: '#B3E5E6',
    title: 'Blue Window'
});

var button2=Ti.UI.createButton({
	title:"Open the purple window"
});
button2.addEventListener('click', function(){
    win1.openWindow(win4, {animated:true});
});


var button = Titanium.UI.createButton({
    title: 'Open Blue Window'
});
button.addEventListener('click', function(){
    win1.openWindow(win3, {animated:true});
});

win2.add(button);
var button2 = Titanium.UI.createButton({
    title: 'Close Blue Window'
});
button2.addEventListener('click', function(){
    win1.closeWindow(win3, {animated:false}); //win3.close() will also work!!
});
win4.add(button2);
win3.add(button);
win1.open();