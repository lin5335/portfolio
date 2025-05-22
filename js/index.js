$(function () {

  const scrolls = document.querySelectorAll(".menu_scroll");
  const onePage = document.querySelectorAll("#one");
  const twoPage = document.querySelectorAll("#two");
  const threePage = document.querySelectorAll("#three");
  const fourPage = document.querySelectorAll("#four");
  const fivePage = document.querySelectorAll("#five");

  const firstTop = onePage[0].offsetTop;
  const secondTop = twoPage[0].offsetTop;
  const thirdTop = threePage[0].offsetTop;
  const fourthTop = fourPage[0].offsetTop;
  const fifthTop = fivePage[0].offsetTop;

  scrolls[0].addEventListener('click', function () {
    window.scroll({top:firstTop, behavior: 'smooth'})
  })

  scrolls[1].addEventListener('click', function () {
    window.scroll({top:secondTop, behavior: 'smooth'})
  })

  scrolls[2].addEventListener('click', function () {
    window.scroll({top:thirdTop, behavior: 'smooth'})
  })

  scrolls[3].addEventListener('click', function () {
    window.scroll({top:fourthTop, behavior: 'smooth'})
  })

  scrolls[4].addEventListener('click', function () {
    window.scroll({top:fifthTop, behavior: 'smooth'})
  })



  var overlay = document.getElementById("overlay");
  var photo = document.getElementById("photo");
  var design = document.querySelectorAll(".gallery > a");

  for (var i = 0; i < design.length; i++) {
    design[i].addEventListener("click", function (e) {
      e.preventDefault();

      var href = this.href;
      photo.src = href;

      // design4 이미지일 때만 스크롤 가능하도록
      if (href.includes("design4_lg.png")) {
        overlay.classList.add("active");
        overlay.style.overflow = "hidden";

        const scrollBox = document.getElementById("photo-scroll");
        scrollBox.style.maxHeight = "90vh";
        scrollBox.style.overflowY = "auto";

        photo.style.height = "auto";
        photo.style.maxHeight = "none";
        photo.style.maxWidth = "100%";

        photo.onload = function () {
          scrollBox.scrollTop = 0;
        };
      } 
      
      else {
        overlay.classList.add("active");
        overlay.style.overflow = "hidden";

        const scrollBox = document.getElementById("photo-scroll");
        scrollBox.style.maxHeight = "none";
        scrollBox.style.overflowY = "hidden";

        photo.style.maxHeight = "80vh";
        photo.style.maxWidth = "90%";
      }
    });

      overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
        overlay.style.overflow = "hidden";

        const scrollBox = document.getElementById("photo-scroll");
        scrollBox.removeAttribute("style");
        photo.removeAttribute("style");
      });
    }
});