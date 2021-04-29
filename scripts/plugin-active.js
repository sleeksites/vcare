$(document).ready(function () {
  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    $(this).toggleClass("active");
  });
  // Smoothscroll script
  $(".smooth-scroll").click(function (e) {
    e.preventDefault();
    var dis = $(this),
      target = dis.attr("href"),
      offset = parseInt($(target).offset().top),
      header = $(".sidebar-nav");
    dis
      .addClass("active")
      .parent()
      .siblings()
      .find(".smooth-scroll")
      .removeClass("active");
    $("html,body").stop().animate({ scrollTop: offset }, 1000);
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $("#sidebar-wrapper").click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
  });
  if ($(window).width() > 991) {
    $(window).on("load", function (e) {
      document.getElementById("loader").style.display = "block";
      document.getElementById("hdr").style.display = "none";
      document.body.style.overflow = "hidden";

      var options = {
        strings: ["", " <h1>Welcome to V-Care.</h1>"],
        typeSpeed: 10,
      };

      var typed = new Typed("#loader", options);
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        $(".typed-cursor").hide();
        document.getElementById("hdr").style.display = "block";
        $("body").addClass("active");
        document.body.style.overflow = "auto";
      }, 500);
    });
  }
});
