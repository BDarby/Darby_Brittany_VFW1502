//created a windor

var create=Ti.UI.createWindow({
	backgroundColor:"#53C6BE",
	height: Ti.UI.FILL,  //this means to fill up the whole page.
});

var  shark=Ti.UI.createWindow({
	backgroundImage:"sharks.jpeg", //this is the image i use.
	width:350,
	height:500,
});

var word=Ti.UI.createLabel({
	text:"Shark Week",
	color:"#9D36A1",
	font:{fontSize:40,fontFamily:"Zapfino"},  //this is my font size and family
	top:0,
});











var message=["They","Will","Eat","your","ASS!!!"];   //made the array
var count=0; //this is the counter

var leftButton=Ti.UI.createLabel({ 				//this is the left button
	color:"#B3CFE6",
	text:"left",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	bottom:30,
	left:30,
});




 leftButton.addEventListener("dblclick",function(){  //*IMPORTANT* IS THE COUNTER TO MAKE MY BUTTONS WORK
	if(count==4){
		count=0;
	}else{
		count--;
	}
	word.text=message[count];  //have to ask question on what this means
});


var rightButton=Ti.UI.createLabel({ 				//this is the right button
	color:"#B3CFE6",
	text:"right",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	bottom:30,
	right:30,
});




rightButton.addEventListener("dblclick",function(){  //*IMPORTANT* IS THE COUNTER TO MAKE MY BUTTONS WORK
	if(count==4){
		count=0;
	}else{
		count++;
	}
	word.text=message[count];
});


// nextButton.addEventListener("click", function(){  // this is how the button works
	 // if (count==4){
		 // count=0;
	 // }else{
		 // count++;
	 // }
	 // Steelers.text=Steelers1[count];
 // });
 
 var slider=Ti.UI.createSlider({
 	height:150,
 	width:300,
 	bottom:50,
 });
 
 
 create.add(slider);
 create.add(rightButton,leftButton);
 create.open();
 shark.open();
 create.add(word);   // you call it the window you create.

 
 

 
