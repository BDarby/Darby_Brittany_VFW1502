var Steelers1=["T.Polamalu", "Big Ben", "J.Harrison", "A,Brown", "M.Pouncey"];   //this is my array.
var count = 0;

var Steelers= Ti.UI.createLabel({
	text:"Pittsburgh Steelers!",
	color:"Yellow",
	font:{fontSize: 30},
	top: 150,
});
 // var PittHead=Ti.UI.createView({
 	// backgroundColor:"Red",
 	// height: 80,
 	// top:30,
 // });




//buttons
var nextButton = Ti.UI.createLabel({
	color:"Blue",
	text: "Next",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font:{fontSize: 12},
	bottom: 10,
	right: 10,

});
nextButton.addEventListener("click", function(){
	if (count==4){
		count=0;
	}else{
		count++;
	}
	Steelers.text=Steelers1[count];
});


//Steelers1.text=Steelers[count];


var backButton = Ti.UI.createLabel({
	color:"Blue",
	text: "Previous",
	font:{fontSize:12},
	bottom: 10,
	left:10,

});
backButton.addEventListener("click", function(){
	if (count==0){
		count=4;
	}else{
		count--;
	}
Steelers.text=Steelers1[count];	
});




// var backLabel=Ti.UI.createLabel({
	// text:"Back",
// });
// backButton.add("backLabel");
// 
win.add(nextButton,backButton);
//PittHead.add(Steelers);
win.add(Steelers1);

