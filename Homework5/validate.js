$(document).ready(function(){
	
	// Validate email
	$("#validate").click(function(){
		console.log("I got clicked");
		var t1 = $("#userName").val();
		var t2 = $("#userEmail").val();
		var t3 = $("#userMessage").val();
		
		if(t1 == "" || t2 == "" || t3 == ""){
			window.alert("All fields are required!!");
		}
		
		var numAt = 0;
		var numPeriods = 0;
		for(i = 0; i < t2.length; i++){
			if(t2[i] == '@'){
				numAt++;
			}
			else if(t2[i] == '.'){
				if(numAt != 0){
					numPeriods++;
				}
			}			
		}
		if(numAt == 1 && numPeriods >= 1){
			window.location.replace("./advexperience.html");
		}
		else{
			window.alert("Please enter a valid email address");
		}
	});
	
});