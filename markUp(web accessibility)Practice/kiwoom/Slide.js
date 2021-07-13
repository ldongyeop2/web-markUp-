$(document).ready(function(){
    const menus = $('.headerm');
    const lists = $(".inList");
    const slides =$(".swiper-wrapper");
    const button =$(".upButton");
    

    window.addEventListener('scroll',(function() {
      const position = $(window).scrollTop();
      if(position > 100) {
        button.addClass("active");
      } else if (position <100) {
        button.removeClass("active");
      }
    }))

    button[0].addEventListener('click',(function() {
      window.scrollTo({top:0, left:0, behavior:'smooth'});
    }));

   
    lists.mouseenter(function() {
      lists.removeClass("active");
      $(this).addClass("active");
    });
    
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3.5,
        centeredSlides: true,
        autoplay: {
          delay:4000
        },
        loop:true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
  })
