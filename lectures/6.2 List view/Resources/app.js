//layout


var win=Ti.UI.createWindow({
	backgroundColor:"white",
	top: 20,
});

var list=Ti.UI.createListView();
var listSection=[];

var produce=Ti.UI.createListSection({
	headerTitle:"Produce",
});

var dairy= Ti.UI.createListSection({
	headerTitle:"dairy",
});


//create item
produceData=[
	{properties:{title:"Celery",image:"Celery.png"}},
	{properties:{title:"Carrot", image:"Celery.png"}},
	{properties:{title:"Apple", image:"Celery.png"}},

];

produce.setItems(produceData);



listSection.push(produce, dairy);
list.sections=listSection;
console.log(listSection);

win.add(list);
win.open();
