$(document).ready(function () {
  var active_star
  var inside_star
  $(".GH-star-circle").click(function () {
    active_star = $(this);
    inside_star = active_star.find("i");

    $(".GH-popup").css("display", "flex");

    $("#close-popup").click(function () {
      $(".GH-popup").css("display", "none");
    });

    $(".btn-no").click(function () {
      $(".GH-popup").css("display", "none");

      $(active_star).css("background-color", "white");
      $(inside_star).css("color", "#919aa3");
    });

    $(".btn-yes").click(function () {
      $(".GH-popup").css("display", "none");

      $(active_star).css("background-color", "#f9b514");
      $(inside_star).css("color", "white");
    });
  });
});
