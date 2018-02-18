(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var setHeight = $("#content").height();
  $("#main-background").height(setHeight * .8);
  $("#bottom-background").height(setHeight * .25);
  $("#bottom-background").css('margin-top',setHeight * .75);

})(jQuery); // End of use strict

function changeCommittee(changeTo) {
  $("#research-arrow").css('visibility', 'hidden');
  $("#investment-arrow").css('visibility', 'hidden');
  $("#education-arrow").css('visibility', 'hidden');
  $("#consulting-arrow").css('visibility', 'hidden');
  if (changeTo == "research") {
    $("#research-arrow").css('visibility', 'visible');
    $("#committee-header").text("Research & Development");
    $("#committee-description").text("This committee researches new advances in the field, both at the protocol level and the application level. In addition, those who are developers, or are aspiring developers, will be working on creating and testing the ideas from our research and consulting committee");
  }
  if (changeTo == "investment") {
    $("#investment-arrow").css('visibility', 'visible');
    $("#committee-header").text("Investment");
    $("#committee-description").text("Investment Committee Message");
  }
  if (changeTo == "education") {
    $("#education-arrow").css('visibility', 'visible');
    $("#committee-header").text("Education");
    $("#committee-description").text("Education Committee Message");
  }
  if (changeTo == "consulting") {
    $("#consulting-arrow").css('visibility', 'visible');
    $("#committee-header").text("Consulting");
    $("#committee-description").text("Consulting Committee Message");
  }
}
