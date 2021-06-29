imageModal = (img, imgName) => {
  console.log("clicking image", img, imgName);
  let modalTitle = document.querySelector("#modalLabel");
  modalTitle.innerHTML = imgName;
  let modalImg = document.querySelector("#modalImage");
  modalImg.src = img;
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});



$(window).scroll(function () {
  let position = window.pageYOffset;

  if ($(window).scrollTop() > 280) {
    $('#mainNav').removeClass('navbar-fixed').addClass('navbar-trans');
    
  }
  if ($(window).scrollTop() < 281) {
    $('#mainNav').removeClass('navbar-trans').addClass('navbar-fixed');
  }


  $('.section').each(function () {
    let target = $(this).offset().top;
    let id = $(this).attr('id');
    let navLinks = $('#mainNav li a');
    if (position >= target) {
      navLinks.removeClass('current');
      $('#mainNav li a[href="#' + id + '"]').addClass('current');
    }
  });
});