

this.randomquote = function(){
var length = $("#quotes li").length;
var ran = Math.floor(Math.random()*length) + 1;
$("#quotes li:nth-child(" + ran + ")").show();
};

$(document).ready(function() {
//Moving from place to place
var pageHandler = function(event){
  console.log("this element ",$(this).attr('rel'));
  event.preventDefault();
  var clickedPage = $(this).attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');
};

  $('.wrapperOne').on('click', 'a', pageHandler);

// Used to cycle the quotes on page refresh

	randomquote();
});
