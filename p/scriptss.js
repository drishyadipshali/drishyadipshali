
$(function(){
$('#p').css("color","red",'position',"relative");
//$("#p").css("border","1px solid red");
$('#hello').fadeOut(200).delay(300).show(200);
$('#box').animate({left:'200px'},700);
$('p:last').css('color','blue');
$('p:eq(2)').text('this line is changed by jquery');
$('#page button').css('top','200px');
//$('img').attr('src','p/2.jpg');
$('img').delay(500).fadeOut('500',function () {
	// body...
	$(this).attr('src','p/2.jpg').fadeIn(500);

});
$('button:gt(2)').css('border','2px solid green');
$('button:lt(2)').fadeIn(500).delay(300).fadeOut(500);
$('button:eq(3)').click(function(){
	$('#box').slideToggle();
	$('#box').click(function(){
		$('img').slideToggle();	});
});
});