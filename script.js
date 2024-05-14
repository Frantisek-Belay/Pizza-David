(function ($) {
  $(function () {
    /***** Scroll to section *****/
    $(".jq--scroll-our-pizza").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--our-pizza").offset().top },
        1000
      );
    });

    $(".jq--scroll-about-pizza").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--about-pizza").offset().top },
        1000
      );
    });

    $(".jq--scroll-references").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--references").offset().top },
        1000
      );
    });

    $(".jq--scroll-photogallery").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--photogallery").offset().top },
        1000
      );
    });

    $(".jq--scroll-contact").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--contact").offset().top },
        1000
      );
    });

    /***** Scroll button to section *****/
    $(".jq--scroll-button-first").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--our-pizza").offset().top },
        1000
      );
    });

    $(".jq--scroll-button-second").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--references").offset().top },
        1000
      );
    });

    /***** Mobile navigation - vysouvání a zpět *****/
    $(".jq--nav-icon").click(function () {
      $(".nav-background").fadeToggle();
      $(".mobile-nav-back").slideToggle();
      $("nav ul").fadeToggle();
    });
    /* .slideToggle() = plynulé vysouvání */
    /* .fadeToggle() = skokové vysouvání */

    /* Change hamburger to cross vice versa */
    $(".jq--image-hamburger").click(function () {
      if (
        $(".jq--image-hamburger").attr("src") ==
        "images/navigation_round_icon_32x32.png"
      ) {
        $(
          $(".jq--image-hamburger").attr(
            "src",
            "images/close_round_icon_32x32.png"
          )
        );
      } else {
        $(
          $(".jq--image-hamburger").attr(
            "src",
            "images/navigation_round_icon_32x32.png"
          )
        );
      }
    });
  });
})(jQuery);
