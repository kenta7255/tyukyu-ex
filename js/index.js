$(function () {
  "use strict";
  var header = $('.header');
  // 更新された場合に先に付与
  if ($(window).scrollTop() > 0) {
    $(header).addClass('bg-white');
  }

  // スクロールに応じて付与
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(header).addClass('bg-white');
    } else {
      $(header).removeClass('bg-white');
    }
  });

  // ロゴをクリックした際のスムーススクロール
  $(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1200, "swing");
  });

  // お知らせ部分のタブ制御
  $(function () {
    var tab = $('.news-category li');
    // ①タブをクリックしたら発動
    tab.click(function () {

      // ②クリックされたタブの順番を変数に格納
      var index = tab.index(this);

      // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
      tab.removeClass('active');

      // ④クリックされたタブにクリック済みデザインを適用する
      $(this).addClass('active');

      // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
      $('.cards').removeClass('show').eq(index).addClass('show');

    });
  });

  var interval = 8000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
  $(".fade-img-box img").hide();
  $(".fade-img-box img:first").addClass("active").show();

  var changeImage = function () {
    var $active = $(".fade-img-box img.active");
    var $next = $active.next("img").length ? $active.next("img") : $(".fade-img-box img:first");

    $active.fadeOut(fade_speed).removeClass("active");
    $next.fadeIn(fade_speed).addClass("active");
  }


  setInterval(changeImage, interval);

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