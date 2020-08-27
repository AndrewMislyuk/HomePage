//Form AJAX
$(document).ready(function () {
  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      swal("Alert Success", "With some body text and success icon!", "success"); //Sweet alert
      $("#form").trigger("reset");
    });
    return false;
  });
});
// Header--fixed
window.onscroll = function showHeader() {
  let header = document.querySelector(".header");
  if (window.pageYOffset > 300) {
    header.classList.add("header--fixed");
  } else if (window.pageYOffset < 10) {
    header.classList.remove("header--fixed");
  }
};
//Link
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    // если в href начинается с # , то ловим клик
    // проверим существование элемента чтобы избежать ошибки
    var scroll = $(this).attr("href");
    if ($(scroll).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll).offset().top - 50 }, 500); // анимируем скроолинг к элементу scroll
    }
    return false; // выключаем стандартное действие
  });
});
//Slider about
$(document).ready(function () {
  $(".about__slider").slick({
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    autoplay: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//Slider clients
$(document).ready(function () {
  $(".clients__slider").slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: false,
    autoplay: true,
    arrows: false,
    draggable: false,
  });
});
// Sort
$(function () {
  // category
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-work]").removeClass("hide");
    } else {
      $("[data-work]").each(function () {
        let item = $(this).data("work");
        if (item != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
  // Burger
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#nav").toggleClass("active");
  });
});
