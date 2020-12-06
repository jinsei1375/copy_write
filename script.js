$(".answer").hide();
$(".question").on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).next().slideUp();
    $(this).find("span").text("+");
    $(this).removeClass("open");
  } else {
    $(this).next().slideDown();
    $(this).find("span").text("-");
    $(this).addClass("open");
  }
});
$('a[href^="#"]').on("click", function () {
  var speed = 1000;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
var $nav = $("#navArea");
var $btn = $(".hamberger_menu");
var $mask = $("#mask");
var open = "open"; // class
var nav = $(".nav_link");
// menu open close
$btn.on("click", function () {
  if (!$nav.hasClass(open)) {
    $nav.addClass(open);
    nav.show();
  } else {
    $nav.removeClass(open);
  }
});
// mask close
$mask.on("click", function () {
  $nav.removeClass(open);
  nav.hide();
});
nav.find("a").on("click", function () {
  $nav.removeClass(open);
  nav.hide();
});

// const $submit_btn = $("#js_submit");
// $(".text_area").on("change", function () {
//   if (
//     $('#form input[type="text"]').val() !== "" &&
//     $('#form input[type="email"]').val() !== "" &&
//     $('#form input[type="checkbox"]').val() !== "" &&
//     $("#form #privacyCheck").prop("checked") === true
//   ) {
//     $submit_btn.prop("disabled", false);
//   } else {
//     $submit_btn.prop("disabled", true);
//   }
// });

$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSebqozi8F1vB_7lkGPy0L1pTa0detbtp8yFcH2HjhmXSrTT6w/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});
