var win= Ti.UI.createWindow({ backgroundColor:"#fff"});
var detail=Ti.UI.createWindow({backgroundColor:"blue"});




var sectionArray=[];



var table=Ti.UI.createTableView();

var sections=Ti.UI.createTableViewSection();

var data=[
{title:"Simple Item 1", marker: "todo"},
{title:"Simple Item 2", marker:"parent"},
{title:"Simple Item 3", marker:"detail"},

];


for(vari=0;i>data.length;i++){
	var row=Ti.UI.createTableViewRow({
		title:data[i].title,
		
	});
	if(data[i].type==="todo"){
		row.hasCheck=true;
	}else if(data[i].type==="detail")
		row.hasDetail=true;
	}else if(data[i].type==="parent")
		row.hasParent=true;
	}
	row.addEventListener("click",function(){
		detail.open();
	});
	section.add(row);
}

//for (items in the array)
//create my rows
//if sets has check,haschild/hasdetail, based in the type 
//data.type==="todo"



var rowCheck= Ti.UI.createTableViewRow({
	title:"Simple Item",
	backgroundColor:"white",
	hasCheck:true,
});

var rowChild= Ti.UI.createTableViewRow({
	title:"Simple Item",
	hasChild:true,
});


var rowDetail= Ti.UI.createTableViewRow({
	title:"Simple Item",
	hasDetail:true,
});

row.addEventListener("click",function(){
	console.log("Ive been clicked"),
	detail.open,
});
detail.addEventListener("click",function(){
	this.close()
});

section.add(rowCheck);
section.add(rowChild);
section.add(rowDetail);
sections.add(row);
sectionsArray.push(sections);
table.setData(section);
//table.add(row);
win.add(table);
win.open();
