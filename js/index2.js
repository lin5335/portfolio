$(function () {

  let currentIndex = 0; // 현재 슬라이드 인덱스

  const slideCount = $('.slides_img').length; // 슬라이드 이미지의 총 개수

  const slideWidth = $('#slideshow').width(); // 슬라이드 한 개의 너비

  // Next 버튼 클릭 이벤트
  $('#next').click(function () {
      if (currentIndex < slideCount - 1) {
          currentIndex++; // 인덱스 증가
      } else {
          currentIndex = 0; // 마지막 슬라이드면 첫 슬라이드로 이동
      }
      moveSlide(currentIndex);
  });

  // Prev 버튼 클릭 이벤트
  $('#prev').click(function () {
      if (currentIndex > 0) {
          currentIndex--; // 인덱스 감소
      } else {
          currentIndex = slideCount - 1; // 첫 슬라이드면 마지막 슬라이드로 이동
      }
      moveSlide(currentIndex);
  });

  // 슬라이드 이동 함수
  function moveSlide(index) {
      const newLeft = -index * slideWidth;
      $('.slides').animate({ left: newLeft }, 600); // 슬라이드를 왼쪽으로 이동
  }
});


