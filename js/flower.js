// button switch
$("button").click(function () {
  $("button").removeClass("active");
  $(this).addClass("active");
});

// <!-- 時間滾軸 -->
function ScrollTimelineAnime() {
  $(".timeline li").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var startPoint = 100;
    if (scroll >= elemPos - windowHeight - startPoint) {
      var H = $(this).outerHeight(true);
      var percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100;
      if (percent > 100) {
        percent = 100;
      }

      $(this)
        .children(".border-line")
        .css({
          height: percent + "%", //CSSでパーセント指定
        });
    }
  });
}

$(window).on("scroll", function () {
  ScrollTimelineAnime();
});

$(window).on("load", function () {
  ScrollTimelineAnime();
});

// wowjs
new WOW().init();

// gotop button
$("#gotop").click(function () {
  $("html,#wrap").animate({ scrollTop: 0 }, "fast");
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

const size = Math.max(innerWidth, innerHeight);
gsap.set(".gridBlock", {});

const bigImg = new Image();
bigImg.addEventListener("load", function () {
  gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 1 });
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
