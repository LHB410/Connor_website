$('#sec-1').addClass("active");

//Smooth scrolling
$("#sec-1").click(function () {
  $('html, body').animate({
    scrollTop: $("#bio").offset().top - 66
  }, 1000);
  return false;
});

$("#sec-2").click(function () {
  $('html, body').animate({
    scrollTop: $("#videos").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-3").click(function () {
  $(' html,body').animate({
    scrollTop: $("#music").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-4").click(function () {
  $(this).addClass("active");
  $('html,body ').animate({
    scrollTop: $("#performances").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-5").click(function () {
  $(this).addClass("active");
  $('html,body ').animate({
    scrollTop: $("#bands").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-6").click(function () {
  $(this).addClass("active");
  $('html,body ').animate({
    scrollTop: $("#shop").offset().top - 112
  }, 1000);
  return false;
});

$("#sec-7").click(function () {
  $(this).addClass("active");
  $('html,body ').animate({
    scrollTop: $("#contact").offset().top - 112
  }, 1000);
  return false;
});

$('#videos').waypoint(function () {

  $(".container ul li").children().removeClass("active");
  $("#sec-2").addClass("active");

}, { offset: 101 });


$('#music').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-3").addClass("active");
}, { offset: 101 });

$('#performances').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-4").addClass("active");
}, { offset: 101 });

$('#bio').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-1").addClass("active");
}, { offset: 0 });

$('#bands').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-5").addClass("active");
}, { offset: 0 });

$('#shop').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-6").addClass("active");
}, { offset: 0 });

$('#contact').waypoint(function () {
  $(".container ul li").children().removeClass("active");
  $("#sec-7").addClass("active");
}, { offset: 0 });
