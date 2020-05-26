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