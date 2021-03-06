$(document).ready(function () {
  let curren;
  let inside;
  let flat = true;
  $(".show-popup").click(function () {
    if (flat === true) {
      curren = $(this);
      inside = curren
        .closest(".customer")
        .find(".container-customer");
      $(inside).fadeIn();
      flat = false;
    }
  });
  $(".close-popup").click(function () {
    if (flat === false) {
      $(inside).fadeOut();
      flat = true;
    }
  });
});
