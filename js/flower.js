// button switch
$("button").click(function () {
  $("button").removeClass("active");
  $(this).addClass("active");
});

// <!-- 時間滾軸 -->

//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime() {
  $(".timeline li").each(function () {
    // それぞれのli要素の
    var elemPos = $(this).offset().top; // 上からの高さ取得
    var scroll = $(window).scrollTop(); // スクロール値取得
    var windowHeight = $(window).height(); // windowの高さ取得
    var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
    if (scroll >= elemPos - windowHeight - startPoint) {
      var H = $(this).outerHeight(true); //liの余白と高さを含めた数値を取得
      //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
      var percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100; //liの余白と高さの半分で線を100％に伸ばす

      // 100% を超えたらずっと100%を入れ続ける
      if (percent > 100) {
        percent = 100;
      }
      // ボーダーの長さをセット
      $(this)
        .children(".border-line")
        .css({
          height: percent + "%", //CSSでパーセント指定
        });
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on("scroll", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// scroll replay animation

// 1. 動くきっかけを独自の名前（関数：fadeAnime）で定義

function fadeAnime() {
  //動きの指定
  $(".fadeInTrigger").each(function () {
    //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top + 1; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn"); // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass("fadeIn"); // 画面外に出たらfadeInというクラス名を外す
    }
  });
}

// 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動く場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動く場合の記述

// 1. 動くきっかけを独自の名前（関数：fadeAnime）で定義
for (var i = 0; i < 1; i++) {
  function fadeLeAnime() {
    //動きの指定
    $(".cssanimation").each(function () {
      //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top + 1; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("leFadeInLeft"); // 画面内に入ったらfadeInというクラス名を追記
      } else {
        $(this).removeClass("leFadeInLeft"); // 画面外に出たらfadeInというクラス名を外す
      }
    });
  }
}

// 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {
  fadeLeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動く場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on("load", function () {
  fadeLeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動く場合の記述

// wowjs
new WOW().init();

// gotop button
/* 按下GoTop按鈕時的事件 */
$("#gotop").click(function () {
  $("html,body").animate({ scrollTop: 0 }, "fast"); /* 返回到最頂上 */
  return false;
});

/* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $("#gotop").fadeIn();
  } else {
    $("#gotop").fadeOut();
  }
});

// menu 展開
$(document).ready(function () {
  // 透過 on 隨時監聽
  $(".showmenu").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("menu-show");
  });
});

// 幻燈片特效

// 大圖
$(".small").hover(function () {
  var img = $(this).attr("data");
  console.log(img);
  $(".big-circle-star").attr("src", img);
});

$(".small").hover(function () {
  var img = $(this).attr("data");
  $(".div_class").css("display", "none");
  $(".star-p-all").css("display", "none");
  // 預設字
  $("#star-p-active").css("display", "none");
  // 預設字
  $("." + $(this).attr("data-title") + "_class").css("display", "");
});
// 圖對應字class

$(".small").click(function () {
  var img = $(this).attr("data");
  $(".section_class").css("display", "none");
  // 更改文字全
  $("big-picture").css("display", "none");
  // 預設字
  $("#star-p-active03").css("display", "none");
  // 預設字
  $("." + $(this).attr("data-title") + "_section").css(
    // 圖片設定data-title(abcd) 對應 文字的class(abcd)
    "display",
    ""
  );
});

// 圖對應字class
$(".small").click(function () {
  var img = $(this).attr("data");
  $(".section_class").css("display", "none");
  // 更改文字全
  $("s2").css("display", "none");
  // 預設字
  $("#star-p-active02").css("display", "none");
  // 預設字
  $("." + $(this).attr("data-title") + "_section").css(
    // 圖片設定data-title(abcd) 對應 文字的class(abcd)
    "display",
    ""
  );
  // 顯示
});

// 圖對應字class
$(".small").click(function () {
  var img = $(this).attr("data");
  $(".section_class").css("display", "none");
  // 更改文字全
  $("s2").css("display", "none");
  // 預設字
  $("#star-p-active04").css("display", "none");
  // 預設字
  $("." + $(this).attr("data-title") + "_section").css(
    // 圖片設定data-title(abcd) 對應 文字的class(abcd)
    "display",
    ""
  );
  // 顯示
});

// 藝廊圖片
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".grid-container",
      start: "top top",
      end: () => innerHeight * 4,
      scrub: true,
      pin: ".grid",
      anticipatePin: 1,
    },
  })
  .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
  .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
  .from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
  });

// Images to make it look better, not related to the effect
const size = Math.max(innerWidth, innerHeight);
gsap.set(".gridBlock", {});

const bigImg = new Image();
bigImg.addEventListener("load", function () {
  gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
});

bigImg.src =
  "https://raw.githubusercontent.com/flowering-time-design/flowering-time-design/master/imgs/take-photo.jpg";

/* locomotive-scroll-master */
/* 放在menu上面 */
/* <!-- <div class="o-scroll" id="js-scroll" data-scroll-container
> --> */

/* <!-- <link
        rel="stylesheet"
        href="./locomotive-scroll-master/docs/dist/styles/main.css"
      /> --> */
/* <!-- <script
nomodule
src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js"
crossorigin="anonymous"
></script>
<script
nomodule
src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll"
crossorigin="anonymous"
></script>

<script src="./locomotive-scroll-master/docs/dist/scripts/main.js"></script>
<script
async
src="https://www.googletagmanager.com/gtag/js?id=UA-144274538-1"
></script> */

/* <script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-144274538-1");
</script> --> */
