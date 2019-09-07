// $('.count-num').each(function () {
//       $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//       }, {
//             duration: 4000,
//             easing: 'swing',
//             step: function (now) {
//                   $(this).text(Math.ceil(now));
//             }
//       });
// });

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