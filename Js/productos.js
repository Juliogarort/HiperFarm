'use strict';

$(document).ready(function () {
    $(".filter-btn").click(function () {
      var category = $(this).attr("data-category");

      $(".filter-btn").removeClass("active");
      $(this).addClass("active");

      if (category === "todos") {
        $(".product-item").show();
      } else {
        $(".product-item")
          .hide()
          .filter("[data-category='" + category + "']")
          .show();
      }
    });
  });