
//script of dashboard
x="home";
var anchors =$("#sidebar_id a").click(function() {
    $(this).addClass("active");
    anchors.not(this).removeClass("active");
})


document.getElementById("landingpage").style.display="block";
$("#specialities").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#specialities").offset().top   //id of div to be scrolled
    }, 1000);
});


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




function myFunction1(name){
   

    document.getElementById("landingpage").style.display="none";
    document.getElementById(name).style.display="block";
}











function myFunction(component){
    current=document.getElementById(x);
   
    current.style.display="none";
    next=document.getElementById(component);
    next.style.display="block";
    x=component;
  
}
