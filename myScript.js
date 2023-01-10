$(document).ready(function(){
const descc = document.getElementById("textbelowidk");
const texts = ["Mother: Júlia Vidal, 58.\nFather: Gualter Ferreira, 39. (Uptight)\nSisters (1)\nHayle, 8\nMC's Children: 2\nSons (2)\nMateo, 5\nTiburcio, 6 (Deceased)", "text 2", "text 3", "text 4"];

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      descc.textContent = texts[Math.floor(Math.random() * texts.length)];
      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    descc.textContent = texts[Math.floor(Math.random() * texts.length)];
    $(this).append('<div class="status dislike">Dislike!</div>');
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
  
  });

});
