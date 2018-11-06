function loadData(){
	var myData = [{"university": "University of Montana", "city": "Missoula", "state": "MT", "degree": "Bachelor of Science", "major": "Computer Science", "minor": "Mathematics", "gpa": "3.68", "graduation": "May 2018"},{"university": "University of Montana", "city": "Missoula", "state": "MT", "degree": "Master of Science", "major": "Computer Science", "minor": "Education", "gpa": "N/A", "graduation": "May 2020"}];
	var myOtherData = [{"employer": "Habitat for Humanity", "employertype": "Non-profit"},{"employer": "Montana Community Theater", "employertype": "For-profit"}];
	document.getElementById("expDataUndergrad").innerHTML = "School: " + myData[0].university + "<br>" + 
	"City: " + myData[0].city + "<br>" + 
	"State: " + myData[0].state + "<br>" + 
	"Degree: " + myData[0].degree + "<br>" + 
	"Major: " + myData[0].major + "<br>" + 
	"Minor: " + myData[0].minor + "<br>" + 
	"GPA: " + myData[0].gpa + "<br>" + 
	"Graduation date: " + myData[0].graduation;
	
	document.getElementById("expDataGrad").innerHTML = "School: " + myData[1].university + "<br>" + 
	"City: " + myData[1].city + "<br>" + 
	"State: " + myData[1].state + "<br>" + 
	"Degree: " + myData[1].degree + "<br>" + 
	"Major: " + myData[1].major + "<br>" + 
	"Concentration: " + myData[1].minor + "<br>" + 
	"GPA: " + myData[1].gpa + "<br>" + 
	"Graduation date: " + myData[1].graduation;
	
	document.getElementById("nonprofit").innerHTML = "Employer: " + myOtherData[0].employer + "<br>" + 
	"Employer Type: " + myOtherData[0].employertype;
	
	document.getElementById("forprofit").innerHTML = "Employer: " + myOtherData[1].employer + "<br>" + 
	"Employer Type: " + myOtherData[1].employertype;
	
 }
 
 $(document).ready(function(){

		$("#coin").animate({left:1000},600).animate({top: '-=50'},600).animate({top: '+=50'},600);

	
	
});