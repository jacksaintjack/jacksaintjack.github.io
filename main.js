$(document).ready(function() {

  var pageHandler = function(event){
    console.log("this element ",$(this).attr('rel'));
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
    };

  $('#startScreen').on('click', 'a', pageHandler);

  // For moving through dialog

  $('.dialogBox').on('click',function(){
    var $dialogs = $('.dialog').siblings();
    var $active = $('.dialog.active');
    var $newActive = $active.next();
    console.log($newActive);
    $('.dialog').siblings().each(function(idx) {
      $(this).removeClass('active');
    });
    $newActive.addClass('active');
});



  // Music Toggle
  $('body').on('click', '#nextSong', function () {
    document.getElementById('song').muted = true;
    });

  $('body').on('click', '#nextSong', function () {
    document.getElementById('songTwo').muted = false;
    });



});
