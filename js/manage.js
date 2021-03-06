$(document).ready(function () {
    var active_star;
    var inside_star;
    let flat = true;
    $(".show-popup").click(function () {
      if (flat === true) {
        active_star = $(this);
        inside_star = active_star.closest(".customer").find(".container-customer");
        $(inside_star).fadeIn();
        flat = false;
      }
    });
    $(".close-popup").click(function () {
      if (flat === false) {
        $(inside_star).fadeOut();
        flat = true;
      }
    });
  });