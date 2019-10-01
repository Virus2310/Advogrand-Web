
let time = 2;
let cc = 1;
$(window).scroll(function () {
   $('#counter').each(function () {
      let
         cPos = $(this).offset().top,
         topWin = $(window).scrollTop();
      if (cPos < topWin + 500) {
         if (cc < 2) {
            $('.count-num').addClass('viz');
            $('span').each(function () {
               let i = 1,
                  num = $(this).data('num'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     } else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})