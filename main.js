$(document).ready(function() {

  var pageHandler = function(event){
    console.log("this element ",$(this).attr('rel'));
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
    };


  $('#startScreen').on('click', 'a', pageHandler);

  $('body').on('click', '#nextSong', function () {
    document.getElementById('song').muted = true;
    });

  $('body').on('click', '#nextSong', function () {
    document.getElementById('songTwo').muted = false;
    });



});
