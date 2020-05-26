 $('.j-customers').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     dots: true
 });



 $(".accordion_tab").on("click", function() {

     if ($(this).parent().hasClass("active")) {
         $(this).parent().removeClass("active");
         $(this).siblings(".content").slideUp(300);

     } else {

         $(".accordion_tab").parent().removeClass("active");
         $(this).parent().addClass("active");
         $(".accordion .content").slideUp(300);
         $(this).siblings(".content").slideDown(300);
     }
 });


 $(".j-scroll").click(function(e) {
     e.preventDefault();

     var target = $(this).attr('href');

     $('html, body').animate({
         scrollTop: $(target).offset().top
     }, 1000);
 });


 var big_slides = $('.og-big .item').size();
 var small_slides = $('.og-small .item').size();
 var currentSlide = 0;

 function autoChange() {
     currentSlide++;
     if (currentSlide > big_slides) { currentSlide = 1; }

     $('.og-big .item').removeClass('active');
     $('.og-big .item:nth-child(' + currentSlide + ')').addClass('active');
     $('.og-small .item').removeClass('active');
     $('.og-small .item:nth-child(' + currentSlide + ')').addClass('active');
     $('.create_list .create_item').removeClass('active');
     $('.create_list .create_item:nth-child(' + currentSlide + ')').addClass('active');
 }


 $('.og-small .item').click(function() {

     var currentS = $(this).index() + 1;

     console.log(currentS);


     $('.og-small .item').removeClass('active');
     $(this).addClass('active');

     $('.og-big .item').removeClass('active');
     $('.og-big .item:nth-child(' + currentS + ')').addClass('active');



     $('.og-small .item').removeClass('active');
     $('.og-small .item:nth-child(' + currentS + ')').addClass('active');


 });



 // form labels
 $('.fly-labels .field .input').focus(function() {
     $(this).parent().addClass('focus');
 });

 $('.fly-labels .field .input').blur(function() {
     if (!$(this).val()) {
         $(this).parent().removeClass('focus');
     }
 });



 $(window).load(function() {
     $('#wrap,.modal-box').addClass('active');
 });


 $('.modal-close').click(function() {
     $('#wrap,.modal-box').removeClass('active');
 });




 var remain_bv = 599;

 function parseTime_bv(timestamp) {
     if (timestamp < 0) timestamp = 0;

     var day = Math.floor((timestamp / 60 / 60) / 24);
     var hour = Math.floor(timestamp / 60 / 60);
     var mins = Math.floor((timestamp - hour * 60 * 60) / 60);
     var secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
     var left_hour = Math.floor((timestamp - day * 24 * 60 * 60) / 60 / 60);

     // $('span.afss_day_bv').text(day);
     // $('span.afss_hours_bv').text(left_hour);

     if (String(mins).length > 1)
         $('span.afss_mins_bv').text(mins);
     else
         $('span.afss_mins_bv').text("0" + mins +" :");
     if (String(secs).length > 1)
         $('span.afss_secs_bv').text(secs);
     else
         $('span.afss_secs_bv').text("0" + secs);

 }


 $(document).ready(function() {
     var $element = $('.order-box');
     let counter = 0;

     $(window).scroll(function() {
         var scroll = $(window).scrollTop() + $(window).height();
         var offset = $element.offset().top

         if (scroll > offset && counter == 0) {

             setInterval(function() {
                 remain_bv = remain_bv - 1;
                 parseTime_bv(remain_bv);
                 if (remain_bv <= 0) {
                     return false;
                 }
             }, 1000);
             counter = 1;
         }
     });



 });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiICQoJy5qLWN1c3RvbWVycycpLnNsaWNrKHtcclxuICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgIGRvdHM6IHRydWVcclxuIH0pO1xyXG5cclxuXHJcblxyXG4gJChcIi5hY2NvcmRpb25fdGFiXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICQodGhpcykuc2libGluZ3MoXCIuY29udGVudFwiKS5zbGlkZVVwKDMwMCk7XHJcblxyXG4gICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAkKFwiLmFjY29yZGlvbl90YWJcIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICQoXCIuYWNjb3JkaW9uIC5jb250ZW50XCIpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncyhcIi5jb250ZW50XCIpLnNsaWRlRG93bigzMDApO1xyXG4gICAgIH1cclxuIH0pO1xyXG5cclxuXHJcbiAkKFwiLmotc2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICBzY3JvbGxUb3A6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3BcclxuICAgICB9LCAxMDAwKTtcclxuIH0pO1xyXG5cclxuXHJcbiB2YXIgYmlnX3NsaWRlcyA9ICQoJy5vZy1iaWcgLml0ZW0nKS5zaXplKCk7XHJcbiB2YXIgc21hbGxfc2xpZGVzID0gJCgnLm9nLXNtYWxsIC5pdGVtJykuc2l6ZSgpO1xyXG4gdmFyIGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gZnVuY3Rpb24gYXV0b0NoYW5nZSgpIHtcclxuICAgICBjdXJyZW50U2xpZGUrKztcclxuICAgICBpZiAoY3VycmVudFNsaWRlID4gYmlnX3NsaWRlcykgeyBjdXJyZW50U2xpZGUgPSAxOyB9XHJcblxyXG4gICAgICQoJy5vZy1iaWcgLml0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCgnLm9nLWJpZyAuaXRlbTpudGgtY2hpbGQoJyArIGN1cnJlbnRTbGlkZSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICQoJy5vZy1zbWFsbCAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKCcub2ctc21hbGwgLml0ZW06bnRoLWNoaWxkKCcgKyBjdXJyZW50U2xpZGUgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKCcuY3JlYXRlX2xpc3QgLmNyZWF0ZV9pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICQoJy5jcmVhdGVfbGlzdCAuY3JlYXRlX2l0ZW06bnRoLWNoaWxkKCcgKyBjdXJyZW50U2xpZGUgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuIH1cclxuXHJcblxyXG4gJCgnLm9nLXNtYWxsIC5pdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgIHZhciBjdXJyZW50UyA9ICQodGhpcykuaW5kZXgoKSArIDE7XHJcblxyXG4gICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTKTtcclxuXHJcblxyXG4gICAgICQoJy5vZy1zbWFsbCAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgJCgnLm9nLWJpZyAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKCcub2ctYmlnIC5pdGVtOm50aC1jaGlsZCgnICsgY3VycmVudFMgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblxyXG5cclxuICAgICAkKCcub2ctc21hbGwgLml0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgJCgnLm9nLXNtYWxsIC5pdGVtOm50aC1jaGlsZCgnICsgY3VycmVudFMgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblxyXG4gfSk7XHJcblxyXG5cclxuXHJcbiAvLyBmb3JtIGxhYmVsc1xyXG4gJCgnLmZseS1sYWJlbHMgLmZpZWxkIC5pbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2ZvY3VzJyk7XHJcbiB9KTtcclxuXHJcbiAkKCcuZmx5LWxhYmVscyAuZmllbGQgLmlucHV0JykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICBpZiAoISQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgICB9XHJcbiB9KTtcclxuXHJcblxyXG5cclxuICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgICQoJyN3cmFwLC5tb2RhbC1ib3gnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiB9KTtcclxuXHJcblxyXG4gJCgnLm1vZGFsLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgJCgnI3dyYXAsLm1vZGFsLWJveCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuIH0pO1xyXG5cclxuXHJcblxyXG5cclxuIHZhciByZW1haW5fYnYgPSA1OTk7XHJcblxyXG4gZnVuY3Rpb24gcGFyc2VUaW1lX2J2KHRpbWVzdGFtcCkge1xyXG4gICAgIGlmICh0aW1lc3RhbXAgPCAwKSB0aW1lc3RhbXAgPSAwO1xyXG5cclxuICAgICB2YXIgZGF5ID0gTWF0aC5mbG9vcigodGltZXN0YW1wIC8gNjAgLyA2MCkgLyAyNCk7XHJcbiAgICAgdmFyIGhvdXIgPSBNYXRoLmZsb29yKHRpbWVzdGFtcCAvIDYwIC8gNjApO1xyXG4gICAgIHZhciBtaW5zID0gTWF0aC5mbG9vcigodGltZXN0YW1wIC0gaG91ciAqIDYwICogNjApIC8gNjApO1xyXG4gICAgIHZhciBzZWNzID0gTWF0aC5mbG9vcih0aW1lc3RhbXAgLSBob3VyICogNjAgKiA2MCAtIG1pbnMgKiA2MCk7XHJcbiAgICAgdmFyIGxlZnRfaG91ciA9IE1hdGguZmxvb3IoKHRpbWVzdGFtcCAtIGRheSAqIDI0ICogNjAgKiA2MCkgLyA2MCAvIDYwKTtcclxuXHJcbiAgICAgLy8gJCgnc3Bhbi5hZnNzX2RheV9idicpLnRleHQoZGF5KTtcclxuICAgICAvLyAkKCdzcGFuLmFmc3NfaG91cnNfYnYnKS50ZXh0KGxlZnRfaG91cik7XHJcblxyXG4gICAgIGlmIChTdHJpbmcobWlucykubGVuZ3RoID4gMSlcclxuICAgICAgICAgJCgnc3Bhbi5hZnNzX21pbnNfYnYnKS50ZXh0KG1pbnMpO1xyXG4gICAgIGVsc2VcclxuICAgICAgICAgJCgnc3Bhbi5hZnNzX21pbnNfYnYnKS50ZXh0KFwiMFwiICsgbWlucyArXCIgOlwiKTtcclxuICAgICBpZiAoU3RyaW5nKHNlY3MpLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICQoJ3NwYW4uYWZzc19zZWNzX2J2JykudGV4dChzZWNzKTtcclxuICAgICBlbHNlXHJcbiAgICAgICAgICQoJ3NwYW4uYWZzc19zZWNzX2J2JykudGV4dChcIjBcIiArIHNlY3MpO1xyXG5cclxuIH1cclxuXHJcblxyXG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgdmFyICRlbGVtZW50ID0gJCgnLm9yZGVyLWJveCcpO1xyXG4gICAgIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgdmFyIG9mZnNldCA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcFxyXG5cclxuICAgICAgICAgaWYgKHNjcm9sbCA+IG9mZnNldCAmJiBjb3VudGVyID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICByZW1haW5fYnYgPSByZW1haW5fYnYgLSAxO1xyXG4gICAgICAgICAgICAgICAgIHBhcnNlVGltZV9idihyZW1haW5fYnYpO1xyXG4gICAgICAgICAgICAgICAgIGlmIChyZW1haW5fYnYgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICBjb3VudGVyID0gMTtcclxuICAgICAgICAgfVxyXG4gICAgIH0pO1xyXG5cclxuXHJcblxyXG4gfSk7Il0sImZpbGUiOiJjb21tb24uanMifQ==
