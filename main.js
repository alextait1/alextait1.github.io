// <!-- ***docready*** -->
    $(function(){
      console.log("Docready is ready!");

      $('.main_carousel').flickity({
          // options
          cellAlign: 'left',
          contain: true,
      });

      $(".nav a").smoothScroll({
       offset: 0,
       speed: 2000,
      });

      $(".last_logo_link").smoothScroll({
       offset: 0,
       speed: 2000,
      });

    });

// <!-- ***end of doc ready*** -->
