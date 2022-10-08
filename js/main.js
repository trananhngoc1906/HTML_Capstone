//Switch thay đổi theme dark light
document.getElementById("button").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");
};

function backToTop() {
  scrollTo(0, 0);
}

//hiệu ứng khi cuộn
window.onscroll = function () {
  // chiều cao khoảng cách tính từ top 0
  var pageYOffset = window.pageYOffset;

  //xử lý
  if (pageYOffset == 0) {
    document.getElementById("backtotop").style.display = "none";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("iconLeft").style.color = "#fb811e";
    document.getElementById("button").style.color = "white";
    document.getElementById("dropdown").style.color = "white";
  } else {
    document.getElementById("backtotop").style.display = "block";
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("iconLeft").style.color = "";
    document.getElementById("button").style.color = "black";
    document.getElementById("dropdown").style.color = "black";
  }
};

//OWL CAROPUSEL

$(".owl-carousel").owlCarousel({
  nav: false,
  autoplay: true,
  autoplayTimeout: 8000,
  responsive: {
    0: {
      items: 1,
    },
  },
});
