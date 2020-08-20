(function($) {
	'use strict';
	jQuery(document).on('ready', function(){


        // START MENU JS
        $(window).on('scroll', function() {
          if ($(this).scrollTop() > 600) {
              $('.navbar-light').addClass('menu-shrink');
          } else {
              $('.navbar-light').removeClass('menu-shrink');
          }
      });			
      $('.navbar-nav .nav-item .nav-link').on('click', function(e){
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 50
          }, 1500);
          e.preventDefault();
      });
      
      $(document).on('click','.navbar-collapse.show',function(e) {
          if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
              $(this).collapse('hide');
          }
      });	
   
      // END MENU JS
   

        // Home Slider JS
        $('.home-slider').owlCarousel({
          items:1,
          loop:true,
          margin:10,
          nav: false,
          dots:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
      })

        // Counter JS
        $('.counter').counterUp({
          delay: 10,
          time: 1000
      });



          // Back to top 
          $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-scroll-long-up"></i></div>');
          $(window).scroll(function () {
              if ($(this).scrollTop() != 0) {
                  $('#toTop').fadeIn();
              } else {
                  $('#toTop').fadeOut();
              }
          }); 
          $('#toTop').click(function(){
              $("html, body").animate({ scrollTop: 0 }, 900);
              return false;
          });

          // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });

        // WOW JS
        new WOW().init();
///////////////////////////
    }); 	
})(jQuery);