$(document).ready(function(){
const descc = document.getElementById("textbelowidk");
const texts = ["Mother: Júlia Vidal, 58.\nFather: Gualter Ferreira, 39. (Uptight)\nSisters (1)\nHayle, 8\nSons (2)\nMateo, 5\nTiburcio, 6 (Deceased)", 
               "Family Surname: Zapatero-Campo\nGrandmother: Oracion Campo, 52. (On The Run)\nGrandfather: León Zapatero, 62.\nPaternal Aunts\nCielo, 35 (Alcoholic)\nArgentina, 29 (Anti-Social)\nMercado, 26 (Murdered)\nPaternal Uncles\nPatricio, 32 (Very anxious)\nRainerio, 24",
               "Family Surname: Hirama\nMother: Madra Khrebtov, 35. (Religious)\nFather: Sergio Hirama, 29.\nSisters (4)\nNotburga, 14 (Homosexual)\nHeidy, 17 (Depressed)\nEstelle, 11\nRosmaria, 7 (Kidnapped)", 
               "Family Surname: Yoshizawa\nGrandmother: Caroline Obando, 89.\nGrandfather: Patrick Yoshizawa, 95. (Openly Racist)\nPaternal Aunts\nViolet, 65 (Criminal)\nPaternal Uncles\nMorimasa, 66 (Religious)",
               "Family Surname: Donoso\nGrandmother: Constancia Calvo, 53. (Depressed)\nGrandfather: Godofredo Donoso, 60. (Openly Racist)\nMaternal Uncles\nKondo, 27\nVerissimo, 22\nBolade, 35",
               "Family Surname: Owiti\nMother: Kidawa Sinzoyiheba, 60.\nFather: Alimayu Owiti, 53. (Homophobic)\nBrothers (1)\nZewde, 25 (Religious)\nMC's Children: 1\nDaughters (1)\nShukara, 3",
               "<h2>MC's Family</h2>MC Family Surname: <b>Owiti</b><hr><b>Mother: </b>Kidawa Sinzoyiheba, 60. <br><b>Father: </b>Alimayu Owiti, 53. <i> (Homophobic)</i><hr><b>Brothers (1)</b><br>Zewde, 25<i> (Religious)</i><br><hr><b>MC's Children: 1</b><br><b>Daughters (1)</b><br>Shukara, 3<br>",
              ];

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
