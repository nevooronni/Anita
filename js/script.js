//Javascript/jquery file

//js backend
//open
function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

//close
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

//jquery front end
$(document).ready(function() {
	$("input#submit").click(function(event) {
    
    //takes the input of the form and turns into to a string
		var input = $("input#email").val();

		//inpits the string onto our good old span element
		$("span#email102").text(input);

		//shows hidden subscribe confirmation
		$("div#hiddenSubscribe").show();

	  //when you click the popups dissapears 
	  $("span#closebtn").click(function() {
	  	$("div#hiddenSubscribe").hide();
	  });
	  event.preventDefault();
	}) ;
			
});
		
  

    
