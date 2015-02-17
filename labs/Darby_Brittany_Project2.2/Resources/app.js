// var win=Ti.UI.createWindow({
	// backgroundColor:"#6ACDA7",
	// height:Ti.UI.FILL,
// });
// 
// var win2=Ti.UI.createWindow({
	// backgroundColor:"#DCE9BE",
	// height:Ti.UI.FILL,
// });
// 
// var win3=Ti.UI.createWindow({
	// backgroundColor:"#B3E5E6",
	// height:Ti.UI.FILL
// });
// 
// 
// //this is to create a navigation window
// var navGroup=Ti.UI.iOS.createNavigationWindow({
	// window:win2,
// });
// 
// var naviGroup=Ti.UI.iOS.createNavigationWindow({
	// window:win3,
// });
// 
// 
// 
// //these are my buttons
// var button1=Ti.UI.createButton({
	// title:"This is color 2",
	// bottom:100,
// });
// 
// var button2=Ti.UI.createButton({
	// title:"This is color 3",
	// bottom:100,
// });
// 
// 
// button1.addEventListener("click",function(event){
	// naviGroup.openWindow(win2,{animated:true});
// });
// 
// 
// //these are the event listeners
// 
// button2.addEventListener("click",function(event){
	// naviGroup.openWindow(win3);
	// win1.closeWindow(win3,{animated:false});
// });
// 
// 
// 
// win.add(button1,button2);
// win.open();
// naviGroup.open();
// 
// 
// 
// require("Darby_Brittany_Project2.2");
// 
// 













// var win2 = Titanium.UI.createWindow({
    // backgroundColor: '#6ACDA7',
    // title: 'sea glass window'
// });
// 
// var win1 = Titanium.UI.iOS.createNavigationWindow({
   // window: win2
// });
// 
// var win4= Ti.UI.createWindow({
	// backbroundColor:"#B43C66",
	// title:"Purple window",
// });
// 
// var win3 = Titanium.UI.createWindow({
    // backgroundColor: '#B3E5E6',
    // title: 'Blue Window'
// });
// 
// var button2=Ti.UI.createButton({
	// title:"Open the purple window"
// });
// button2.addEventListener('click', function(){
    // win1.openWindow(win4, {animated:true});
// });
// 
// 
// var button = Titanium.UI.createButton({
    // title: 'Open Blue Window'
// });
// button.addEventListener('click', function(){
    // win1.openWindow(win3, {animated:true});
// });
// 
// win2.add(button);
// var button2 = Titanium.UI.createButton({
    // title: 'Close Blue Window'
// });
// button2.addEventListener('click', function(){
    // win1.closeWindow(win3, {animated:false}); //win3.close() will also work!!
// });
// win4.add(button2);
// win3.add(button);
// win1.open();