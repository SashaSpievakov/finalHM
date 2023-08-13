// "Read more" button animations
$("#btn-1").click(() => {
  if ($("#p-1").css("display") === "none") {
    $("#p-1").show();
  } else {
    $("#p-1").hide();
  }
});

$("#btn-2").click(() => {
  $("#p-2").toggle();
});

$("#btn-3").click(() => {
  if ($("#p-3").css("display") === "none") {
    $("#p-3").slideDown();
  } else {
    $("#p-3").slideUp();
  }
});

$("#btn-4").click(() => {
  if ($("#p-4").css("display") === "none") {
    $("#p-4").fadeTo(1000, 0.6);
  } else {
    $("#p-4").hide();
  }
});

$("#btn-5").click(() => {
  if ($("#p-5").css("display") === "none") {
    $("#p-5").fadeIn();
  } else {
    $("#p-5").fadeOut();
  }
});

$("#btn-6").click(() => {
  $("#p-6").slideToggle();
});

$("#btn-7").click(() => {
  $("#p-7").slideToggle();
});

$("#btn-8").click(() => {
  $("#p-8").slideToggle();
});

$("#btn-9").click(() => {
  $("#p-9").slideToggle();
});

// Add 2 buttons to change the styles to light and dark
$(".lightTheme-button").click(() => {
  $("body").removeClass("dark");
});

$(".darkTheme-button").click(() => {
  $("body").addClass("dark");
});

// =================================
$(".title").fadeIn(3000);
$(".subtitle").fadeIn(3000);

// $(".theme-button").click(() => {
//   $("body").toggleClass("dark");
// });

let focusedId = 0;

$("img[alt='nature']").keydown(function (event) {
  switch (event.which) {
    case 37:
      focusedId = $(":focus").attr("id");
      const prevId = +focusedId - 1;
      $("img[id='" + prevId + "']").focus();
      break;
    case 39:
      focusedId = $(":focus").attr("id");
      const nextId = +focusedId + 1;
      $("img[id='" + nextId + "']").focus();
      break;
  }
});

$(".slide-button").click(() => {
  $(".slide-p").slideToggle();
});
