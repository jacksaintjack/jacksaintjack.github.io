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
  $('#sixthScreen').on('click', 'a', pageHandler);
  $('#seventhScreen').on('click', 'a', pageHandler);
    $('#OptionTwoScreenOne').on('click', 'a', pageHandler);
    $('#OptionTwoScreenTwo').on('click', 'a', pageHandler);
  $('#eighthScreen').on('click', 'a', pageHandler);
  $('#ninethScreen').on('click', 'a', pageHandler);
    $('#OptionThreeScreenOne').on('click', 'a', pageHandler);
    $('#OptionThreeScreenTwo').on('click', 'a', pageHandler);
  $('#tenthScreen').on('click', 'a', pageHandler);
  $('#eleventhScreen').on('click', 'a', pageHandler);
  $('#twelthScreen').on('click', 'a', pageHandler);
  $('#thirteenthScreen').on('click', 'a', pageHandler);
  $('#fourtenthScreen').on('click', 'a', pageHandler);
  $('#fiftenthScreen').on('click', 'a', pageHandler);
  $('#sixtenthScreen').on('click', 'a', pageHandler);


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

    $('.dialogBoxSix').on('click',function(){
      var $dialogs = $('.dialogSix').siblings();
      var $active = $('.dialogSix.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogSix').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxSeventh').on('click',function(){
      var $dialogs = $('.dialogSeventh').siblings();
      var $active = $('.dialogSeventh.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogSeventh').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogTwoBoxOne').on('click',function(){
      var $dialogs = $('.dialogBoxTwoOptionOne').siblings();
      var $active = $('.dialogBoxTwoOptionOne.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogBoxTwoOptionOne').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });
    $('.dialogTwoBoxTwo').on('click',function(){
      var $dialogs = $('.dialogBoxTwoOptionTwo').siblings();
      var $active = $('.dialogBoxTwoOptionTwo.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogBoxTwoOptionTwo').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxEighth').on('click',function(){
      var $dialogs = $('.dialogEighth').siblings();
      var $active = $('.dialogEighth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogEighth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxNineth').on('click',function(){
      var $dialogs = $('.dialogNineth').siblings();
      var $active = $('.dialogNineth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogNineth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxThreeOptionOne').on('click',function(){
      var $dialogs = $('.dialogThreeOptionOne').siblings();
      var $active = $('.dialogThreeOptionOne.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogThreeOptionOne').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxThreeOptionTwo').on('click',function(){
      var $dialogs = $('.dialogThreeOptionTwo').siblings();
      var $active = $('.dialogThreeOptionTwo.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogThreeOptionTwo').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxTenth').on('click',function(){
      var $dialogs = $('.dialogTenth').siblings();
      var $active = $('.dialogTenth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogTenth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxEleventh').on('click',function(){
      var $dialogs = $('.dialogEleventh').siblings();
      var $active = $('.dialogEleventh.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogEleventh').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxTwelth').on('click',function(){
      var $dialogs = $('.dialogTwelth').siblings();
      var $active = $('.dialogTwelth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogTwelth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxThirteenth').on('click',function(){
      var $dialogs = $('.dialogThirteenth').siblings();
      var $active = $('.dialogThirteenth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogThirteenth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxFourtenth').on('click',function(){
      var $dialogs = $('.dialogFourtenth').siblings();
      var $active = $('.dialogFourtenth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogFourtenth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxFiftenth').on('click',function(){
      var $dialogs = $('.dialogFiftenth').siblings();
      var $active = $('.dialogFiftenth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogFiftenth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });

    $('.dialogBoxSixtenth').on('click',function(){
      var $dialogs = $('.dialogSixtenth').siblings();
      var $active = $('.dialogSixtenth.active');
      var $newActive = $active.next();
      console.log($newActive);
      $('.dialogSixtenth').siblings().each(function(idx) {
        $(this).removeClass('active');
      });
      $newActive.addClass('active');
    });


// Wrong Answer Message and damage


$('body').on('click', '.wrongAnswer', function(e){
  e.preventDefault();
  alert("This answer is wrong! You have " + mainCharacter.life + " life left")

});

$('body').on('click', '.endAnswer', function(e){
  e.preventDefault();
  return mainCharacter.endDamage();
});


// Music Toggle
  var $song = $('#song');
  var $songTwo = $('#songTwo');
  var $songThree = $('#songThree');
  var $songFour = $('#songFour');
  var $songFive = $('#songFive');
  var $songSix = $('#songSix');
  var $songSeven = $('#songSeven');
  var $songEight = $('#songEight');
  var $songDark = $('#songDark');
  var $songGood = $('#songGood');
  var $songEvil = $('#songEvil');

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

  $('body').on('click', '#nextSongRoomTwo', function () {
    // document.getElementById('songThree').muted = false;
    $songFour.trigger('pause');
    $songFive.trigger('play');
    });

  $('body').on('click', '#nextSongRoomThree', function () {
    // document.getElementById('songThree').muted = false;
    $songFive.trigger('pause');
    $songSix.trigger('play');
    });

  $('body').on('click', '#nextSongRoomFour', function () {
    // document.getElementById('songThree').muted = false;
    $songSix.trigger('pause');
    $songSeven.trigger('play');
    });

  $('body').on('click', '#nextSongChurchRoom', function () {
    // document.getElementById('songThree').muted = false;
    $songSeven.trigger('pause');
    $songEight.trigger('play');
    });

  $('body').on('click', '#nextSongDark', function () {
    // document.getElementById('songThree').muted = false;
    $songEight.trigger('pause');
    $songDark.trigger('play');
    });

  $('body').on('click', '#nextSongGood', function () {
    // document.getElementById('songThree').muted = false;
    $songEight.trigger('pause');
    $songGood.trigger('play');
    });

  $('body').on('click', '#nextSongEvil', function () {
    // document.getElementById('songThree').muted = false;
    $songEight.trigger('pause');
    $songEvil.trigger('play');
    });


});
