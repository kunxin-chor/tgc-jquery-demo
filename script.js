/* global $ */

// DOM READY
$(function(){
  
  $("#change").click(function(){
    $("#greeting img").attr('src', 'german.jpg');
  })
  
  $("#expand").click(function(){
     let s = {
      'animation-name': 'sizechange',
      'animation-duration': '4s',
      'animation-fill-mode': 'forwards'
    }
    
    $("#latest-arrivals .product-item").css(s);
  })
})