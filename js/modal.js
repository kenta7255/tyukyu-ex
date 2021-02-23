$(function () {
  "use strict";

  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });

  const config = {
    mode: "range",
    locale: "ja",
    minDate: "today"
  }
  flatpickr("#date", config);
}(
));