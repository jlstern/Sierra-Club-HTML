var planning = $(".planning");
var electric = $(".electric");
var heating = $(".heating");
var transit = $(".transit");
var oneHundred = $(".oneHundred");
var math = $(".math");
 var resources = $(".resource");

$(".planning").click(function(){
	showContent(".planningContent")
});
$(".electric").click(function(){
	showContent(".electricContent")
});
$(".heating").click(function(){
	showContent(".heatingContent")
});
$(".transit").click(function(){
	showContent(".transitContent")
});

function showContent(contentName){
	$(".contentBlock").hide();
	$(contentName).show();
}

// showContent("electricContent");

// $(".menuItem").click(function(){
// 	$(".menuItem").hide();
// 	$(this).show();
// });

function getRandomColor(){
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ){
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function applyColors(){
 	for(i = 0; i < resources.length; i++){
 		resources[i].style.backgroundColor = getRandomColor();
 	}
}

applyColors();

