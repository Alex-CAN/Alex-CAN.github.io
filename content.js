$(document).ready(function (){
  $('.content').hide();
  $('.btn').on('click', function(){
    $('.content').hide();      
    var text = $(this).siblings();
    text.addClass('active');
    $('.active').fadeToggle(400);
    $('.active').removeClass('active');     
  });
  
  var headerText = $('.dock-text-box');
  var resumeLink = headerText.children('a')[0]
  var contactLink = headerText.children('a')[1]
  var title = headerText.children('h1')
  
  $(resumeLink).on('click', function(){
    $('.resume').fadeToggle();
    $(title).fadeToggle(400);
    $(contactLink).fadeToggle(400);
  });
  
//  $(contactLink).on('click', function(){
//    $('.contact').fadeToggle();
//    $(title).fadeToggle(400);
//    $(resumeLink).fadeToggle(400);
//  });
})
