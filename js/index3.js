// 페이지 스크롤링
// 마우스 휠 버튼을 굴리면 다음 페이지로 스크롤 한다.

$(function () {
    const $html = $('html');
    const $window = $(window);

    let windowHeight = $window.height();

    let pageIndex = Math.round($window.scrollTop() / windowHeight);

    console.log('LOAD: pageIndex = ' + pageIndex);

    $html.animate({ scrollTop: pageIndex * windowHeight }, 10);

    const lastPageIndex = $('.page').length - 1;


    const $sections = $('.page');

    window.addEventListener('wheel', function (event) {
        event.preventDefault();
        if ($html.is(':animated')) return;

        if (event.deltaY > 0) {
            if (pageIndex >= lastPageIndex) return;
            pageIndex++;
        } else {
            if (pageIndex <= 0) return;
            pageIndex--;
        }

        const targetTop = $sections.eq(pageIndex).offset().top;

        console.log('pageIndex = %d, targetTop = %d', pageIndex, targetTop);

        $html.animate({ scrollTop: targetTop }, 500);
    }, { passive: false });
});