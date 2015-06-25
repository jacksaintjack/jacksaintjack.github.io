$(document).ready(function() {
//Moving from place to place
  var pageHandler = function(event){
    console.log("this element ",$(this).attr('rel'));
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
    };

  $('#startScreen').on('click', 'a', pageHandler);
  $('#secondScreen').on('click', 'a', pageHandler);
  $('#thirdScreen').on('click', 'a', pageHandler);
  $('#fourthScreen').on('click', 'a', pageHandler);
  $('#fifthScreen').on('click', 'a', pageHandler);
    $('#choiceOne').on('click', 'a', pageHandler);
    $('#choiceTwo').on('click', 'a', pageHandler);
      $('#wrong').on('click', 'a', pageHandler);



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

  $('.dialogBoxTwo').on('click',function(){
    var $dialogs = $('.dialogTwo').siblings();
    var $active = $('.dialogTwo.active');
    var $newActive = $active.next();
    console.log($newActive);
    $('.dialogTwo').siblings().each(function(idx) {
      $(this).removeClass('active');
    });
    $newActive.addClass('active');
  });

  $('.dialogBoxThree').on('click',function(){
    var $dialogs = $('.dialogThree').siblings();
    var $active = $('.dialogThree.active');
    var $newActive = $active.next();
    console.log($newActive);
    $('.dialogThree').siblings().each(function(idx) {
      $(this).removeClass('active');
    });
    $newActive.addClass('active');
  });

  $('.dialogBoxFour').on('click',function(){
    var $dialogs = $('.dialogFour').siblings();
    var $active = $('.dialogFour.active');
    var $newActive = $active.next();
    console.log($newActive);
    $('.dialogFour').siblings().each(function(idx) {
      $(this).removeClass('active');
    });
    $newActive.addClass('active');
  });
      // Dialog Options
      $('.dialogBoxOptionOne').on('click',function(){
        var $dialogs = $('.dialogOptionOne').siblings();
        var $active = $('.dialogOptionOne.active');
        var $newActive = $active.next();
        console.log($newActive);
        $('.dialogOptionOne').siblings().each(function(idx) {
          $(this).removeClass('active');
        });
        $newActive.addClass('active');
      });

      $('.dialogBoxOptionTwo').on('click',function(){
        var $dialogs = $('.dialogOptionTwo').siblings();
        var $active = $('.dialogOptionTwo.active');
        var $newActive = $active.next();
        console.log($newActive);
        $('.dialogOptionTwo').siblings().each(function(idx) {
          $(this).removeClass('active');
        });
        $newActive.addClass('active');
      });

      $('.dialogBoxWrong').on('click',function(){
        var $dialogs = $('.dialogWrong').siblings();
        var $active = $('.dialogWrong.active');
        var $newActive = $active.next();
        console.log($newActive);
        $('.dialogWrong').siblings().each(function(idx) {
          $(this).removeClass('active');
        });
        $newActive.addClass('active');
      });

    $('.dialogBoxFive').on('click',function(){
      var $dialogs = $('.dialogFive').siblings();
      var $active = $('.dialogFive.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogFive').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

// Music Toggle
  var $song = $('#song');
  var $songTwo = $('#songTwo');
  var $songThree = $('#songThree');
  var $songFour = $('#songFour');

  $song.trigger('play');


  $('body').on('click', '#nextSongRoom', function () {
    // document.getElementById('songTwo').muted = false;
    $song.trigger('pause');
    $songTwo.trigger('play');
    });


  $('body').on('click', '#nextSongHallway', function () {
    // document.getElementById('songThree').muted = false;
    $songTwo.trigger('pause');
    $songThree.trigger('play');
    });

  $('body').on('click', '#nextSongRoomOne', function () {
    // document.getElementById('songThree').muted = false;
    $songThree.trigger('pause');
    $songFour.trigger('play');
    });



});
