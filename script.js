/* global $ */
function xyz()
{
    let s = {
      'animation-name': 'sizechange',
      'animation-duration': '4s',
      'animation-fill-mode': 'forwards'
    }
    
    $("#latest-arrivals .product-item").css(s);
}

function changeImage()
{
  $('#greeting img').attr('src', 'german.jpg');
}

// DOM READY
$(function(){
  $("#change").click(function(){
    $("#greeting img").attr('src', 'german.jpg');
  })
})