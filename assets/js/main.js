// read-more
function myFunction(id) {
  let number = id.slice(-1);
  var dots = document.getElementById("dots_"+number);
  var moreText = document.getElementById("more_"+number);
  var btnText = document.getElementById("myBtn_"+number);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more <i class='far fa-arrow-alt-circle-right'></i>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
// navbar
(function ($) {
    "use strict";
  
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top ').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });
    $(function(){
      $('.scroll').on('click',function(e) {
        // e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - '93' }, 1000, 'easeInOutExpo');
      });
    });
   
   
    new WOW().init();
  
  
  
    document.addEventListener("DOMContentLoaded", function(){
              
      window.addEventListener('scroll', function() {
         
          if (window.scrollY > 30) {
              document.getElementById('navbar_top').classList.add('fixed-top');
              // add padding top to show content behind navbar
            //   navbar_height = document.querySelector('.navbar').offsetHeight;
            //   document.body.style.paddingTop = navbar_height + 'px';
          } else {
               document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
          } 
  
          
      });
  }); 
  // DOMContentLoaded  end
  
  })(jQuery);


//   slider banner
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// owl carousel
$('.owll').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    rtl:true,
    mouseDrag:false,
    autoplay:true,
    speed: 1700,
    navSpeed: 500,
    autoplayTimeout: 8000,
    lazyLoad: 'progressive',
    // animateOut: 'slideOutIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
  });

// testimonials
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    speed: 2000,
    autoplay: true,
    loop: true,
    // mousewheel: {
    //   invert: false,
    // },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  // new Typewriter('#typewriter', {
  //   // strings: ['Hello', 'World'],
  //   autoStart: true,
  //   loop: true,
  // });

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // chat bot

  function openDialogue(dialogue, dialogueHeight) {
    hideDialougue(dialogueHeight);
    let div = document.getElementById(dialogue);
    console.log(div);
    if(div) {
      div.style.bottom = '0px'
    }else if(div.style.bottom == '0px') {
      div.style.bottom = dialogueHeight;
    }
  } 
  
  function minimizeDialogue(dialogue, dialogueHeight) {
    let div = document.getElementById(dialogue);
    let minimize = document.getElementById('minimize'+ dialogue);
    let maximize = document.getElementById('maximize' + dialogue);
    console.log(maximize);
    console.log(minimize);
    if(div.style.bottom == '0px') {
      div.style.bottom = dialogueHeight;
      minimize.style.display = 'none';
      maximize.style.display = 'block';
    }
    else {
      div.style.bottom = '0px';
      minimize.style.display = 'block';
      maximize.style.display = 'none';
    }
  }
  
  function  hideDialougue(dialogue, dialogueHeight) {
      let div = document.getElementById(dialogue);
      if(div) {
        // div.style.display = 'none'
        div.style.bottom = dialogueHeight;
      }
  }
  

//   $(".open-chat").click(function() {
//     console.log("open");
//     $('#chat-popup').toggle(function() {
//         $('#chat-popup').show();
//     });
// });
//   $(".open-chat").click(function() {
//     console.log("open");
//     $('#chat-popup').toggle(function() {
//         $('#chat-popup').hide();
//     });
// });


// $(".open-chat").click(function() {
// $(".open-chat i").toggleClass("fas fa-times");
// });


//   $(".close_img_btn").click(function() {
//     $('#chat-popup').toggle(function() {
//         $('#chat-popup').hide();
        
//     });
// });