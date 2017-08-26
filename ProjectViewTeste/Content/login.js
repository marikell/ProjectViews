<<<<<<< HEAD
$(document).ready(function () {
    $("#pass").focus(function () {
        $(".login-card").css("margin-top", "-45px");
    });
    $("input").blur(function () {
        $(".login-card").css("margin-top", "0px");
    });
});     
=======
$('#password').focusin(function(){
  $('form').addClass('up')
});
$('#password').focusout(function(){
  $('form').removeClass('up')
});

// Panda Eye move
$(document).on( "mousemove", function( event ) {
  var dw = $(document).width() / 15;
  var dh = $(document).height() / 15;
  var x = event.pageX/ dw;
  var y = event.pageY/ dh;
  $('.eye-ball').css({
    width : x,
    height : y
  });
});

// validation


$('.btn').click(function(){
  $('form').addClass('wrong-entry');
    setTimeout(function(){ 
       $('form').removeClass('wrong-entry');
     },3000 );
});
>>>>>>> a852e662211d0438bce7346a86c60bc567abd103
