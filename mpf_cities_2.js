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
function importMap(){
	var x = $("ma_map.svg").html();
	console.log(x);
}
// importMap();

var greenCommunities = []