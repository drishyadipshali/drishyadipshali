$(function(){
$('.me').click(function(){
$('#nav').slideToggle();

});



	});
$(function(){
	//first submenu code start from here 

	$('.tick').click(function(){

	$('.tick  ul li').slideToggle();
});

//another submenu code start from here...
$('.arko').click(function(){

	$('.arko ul li').slideToggle().slideIn(500).css('bottom-color','red');});

});
// code for photo slide 
/*$(function(){
$('.next').on('click',function(){
	var currentImg= $('.active');
	var nextImg=currentImg.next();
	if(nextImg.length){
		currentImg.removeClass('active').css('z-index',-10);
		nextImg.addClass('active').css('z-index',10);
	}
});



// above code is for next image ...........
// now its turn for previous image.........



$('.prev').on('click',function(){
	var currentImg= $('.active');
	var prevImg=currentImg.prev();
	if(prevImg.length){
		currentImg.removeClass('active').css('z-index',-10);
		prevImg.addClass('active').css('z-index',10);
	}
});

//previous button code also finish from here
});*/
$(function(){
	var imag=$('.inner');
	var prev=$('.prev');
	var nex=$('.next');
$(nex).click(function(){
	if(imag.length){
		$('img').css('display','inline-block');
	$('imag').slideToggle();
	imag++;}

});



});