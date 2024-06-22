
var lis=document.getElementByTagName("li");
var img=document.getElementById("img");
var parag=document.getElementByClassName("para");
var headline=document.getElementById("ourheadline");
var mybutton=document.getElementById("button");
var list=document.getElementById("our-list");
var counter=1;

var listItems=document.getElementById("our-list").getElementsByTagName("li");

list.addEventListener("click",activateItem);

function activateItem(e){
	if(e.target.nodeName=="LI"){
	headline.innerHTML= e.target.innerHTML;
	for(i=0;i<e.target.parentNode.children.length;i++){
		e.target.parentNode.children[i].classList.remove("bc");
}

	e.target.classList.add("bc");}
}

mybutton.addEventListener("click",addNew);
function addNew()
{
	
list.innerHTML+="<li>something new "+counter+"</li>";
counter++;
}

window.onclick= function changeIt(ed){
	if(ed.targe==parag){img.style.display=inline-block;}
}
//hello 
function pressIt(){

	alert("hello");
}