var planning = $(".planning");
var electric = $(".electric");
var heating = $(".heating");
var transit = $(".transit");
var oneHundred = $(".oneHundred");
var math = $(".math");
 var resources = $(".resource");

$(".start-here").click(function(){
	showContent(".planningContent")
});
$(".generation").click(function(){
	showContent(".electricContent")
});
$(".buildings").click(function(){
	showContent(".heatingContent")
});
$(".transportation").click(function(){
	showContent(".transitContent")
});

function showContent(contentName){
	$(".contentBlock").hide();
	$(contentName).show();
}

$(".fas").addClass("fa-3x");
showContent(".planningContent");
