$(window).on("load", function () {
    /*-------------------- Preloader --------------------*/
    $(".preloader").fadeOut("slow");
  });
   
  $(document).ready(function () {
    /*-------------------- Navbar Shrink --------------------*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 90) {
        $(".navbar").addClass("navbar-shrink");
      }
      else {
        $(".navbar").removeClass("navbar-shrink");
      }
    });
   
    /*-------------------- Discover Carousel --------------------*/
    $('.discover-carousel').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
   
    /*-------------------- Reviews Carousel --------------------*/
    $('.reviews-carousel').owlCarousel({
      loop: true,
      margin: 0,
      // autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
   
    /*-------------------- Page Scrolling - ScrollIt --------------------*/
    $.scrollIt({
      topOffset: -50
    });
   
    /*-------------------- Navbar Collapse --------------------*/
    $(".nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
   
    /*-------------------- Toggle Theme - Light & Dark Mode --------------------*/
    function toggleTheme() {
      if (localStorage.getItem("sanamente-theme") !== null) {
        if (localStorage.getItem("sanamente-theme") === "dark") {
          $("body").addClass("dark");
        }
        else {
          $("body").removeClass("dark");
        }
      }
      updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
      $("body").toggleClass("dark");
      if ($("body").hasClass("dark")) {
        localStorage.setItem("sanamente-theme", "dark");
      }
      else {
        localStorage.setItem("sanamente-theme", "light");
      }
      updateIcon();
    });
    function updateIcon() {
      if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
      }
      else {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
      }
    }
   
  });
  