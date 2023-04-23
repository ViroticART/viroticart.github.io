$('.slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal);
reveal();

$(document).ready(function() {
  // required elements
  var imgPopup = $('.img-popup');
  var imgCont = $('.pintura');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');
  // handle events
  imgCont.on('click', function() {
    var img_src = $(this).children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
  });
  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });
  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
});



