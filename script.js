
$(document).ready(function() {
var svgNS = "http://www.w3.org/2000/svg", 
	button= document.getElementById("svg-button"),
	clicks = 0,
	radius = 10;

function changeRadius(){
	if(clicks >= 1 ){
		radius+=10;
	};
};

function createCircle() {
    var myCircle = document.createElementNS(svgNS,"circle"); 
   	myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"cx",350);
   	myCircle.setAttributeNS(null,"cy",350);
    myCircle.setAttributeNS(null,"r", radius);
    myCircle.setAttributeNS(null,"fill","black");
    myCircle.setAttributeNS(null,"stroke","none");
    document.getElementById("mySVG").appendChild(myCircle);
};

$(button).click(function(){
	changeRadius();
	createCircle();
	clicks++;
	console.log(radius);
	console.log(clicks);
});

});