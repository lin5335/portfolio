window.addEventListener('load', function () {

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

  for(var i=0; i<design.length; i++) {
    design[i].addEventListener("click", function(e){
    e.preventDefault();     // 브라우저의 기본 동작을 실행하지 않도록 하는 메소드
    photo.src = this.href;
    overlay.style.display = "block";
    });

    overlay.addEventListener("click", function(){
    this.removeAttribute("style");
    });
  }

});
