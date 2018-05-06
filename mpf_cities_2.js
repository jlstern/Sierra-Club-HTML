// Resources
$(".generation").click(function(){
	cleanUp();
	$(".generation").css("background-color", "#FCEC83");
	$(".generation-content").removeClass("hidden");
});
$(".buildings").click(function(){
	cleanUp();
	$(".buildings").css("background-color", "lightblue");
	$(".building-content").removeClass("hidden");
});
$(".transportation").click(function(){
	cleanUp();
	$(".transportation").css("background-color", "#F5AEAE");
	$(".transportation-content").removeClass("hidden");
});
$(".future").click(function(){
	cleanUp();
	$(".future").css("background-color", "#4CF58B");
	$(".future-content").removeClass("hidden");
});
function cleanUp(){
	$(".menu-item").css("background-color", "white");
	$(".content-block").addClass("hidden");
}

// Roadmap
$("#map-of-mass").load("https://jlstern.github.io/Sierra-Club-HTML/ma_map.svg");
$


var greenCommunities = []



