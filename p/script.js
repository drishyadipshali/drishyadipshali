var parag=document.getElementById("pa");
var hi=document.getElementById("hi");
var button=document.getElementById("button");
var rajesh=document.getElementById("rajesh");
var kiran=document.getElementById("kiran");
var dipesh=document.getElementById("dipesh");
var image1=document.getElementsByClassName("image1");
var image2=document.getElementsByClassName("image2");
var image3=document.getElementsByClassName("image3");
var rtarrow=document.getElementsByClassName("prev");
var ltarrow=document.getElementsByClassName("next");

function pressIt() {
	// body...
	parag.style.display="block";
	parag.style.color="red";
}

function touchIt(){
	document.getElementById("hi").innerHTML="hello i m virus";
	button.style.background="red";
}

window.onclick= function feelIt(e){
if(e.target==hi)
{ 
	button.style.color="blue";
	button.style.background="green";
	parag.style.display="none";
}
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}