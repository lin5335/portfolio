// 페이지 스크롤링
// 마우스 휠 버튼을 굴리면 다음 페이지로 스크롤 한다.

$(function () {
    const $html = $('html');
    const $window = $(window);
    const $sections = $('.page');
    const lastPageIndex = $sections.length - 1;

    let windowHeight = $window.height();
    let pageIndex = Math.round($window.scrollTop() / windowHeight);
    let isAnimating = false;

    // 처음 로딩 시 위치 정렬
    $html.scrollTop(pageIndex * windowHeight);

    // 현재 위치 기반으로 pageIndex 다시 계산
    function updatePageIndex() {
        const scrollTop = $window.scrollTop();
        $sections.each(function (i) {
            const offsetTop = $(this).offset().top;
            if (Math.abs(scrollTop - offsetTop) < windowHeight / 2) {
                pageIndex = i;
                return false; // break
            }
        });
    }

    // 휠로 한 화면 단위 스크롤
    window.addEventListener('wheel', function (event) {
        event.preventDefault();
        if (isAnimating) return;

        updatePageIndex(); // ← 스크롤 전에 현재 위치 동기화

        if (event.deltaY > 0 && pageIndex < lastPageIndex) {
            pageIndex++;
        } else if (event.deltaY < 0 && pageIndex > 0) {
            pageIndex--;
        } else {
            return;
        }

        const targetTop = $sections.eq(pageIndex).offset().top;

        isAnimating = true;
        $html.stop().animate({ scrollTop: targetTop }, 600, function () {
            isAnimating = false;
        });
    }, { passive: false });

    // 메뉴 클릭 시 이동 + pageIndex 갱신
    $('.menu_scroll').on('click', function (e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const targetIndex = $('.page').index($(targetId));

        if (targetIndex !== -1) {
            const targetTop = $sections.eq(targetIndex).offset().top;
            isAnimating = true;
            $html.stop().animate({ scrollTop: targetTop }, 600, function () {
                pageIndex = targetIndex; // ← 여기서 정확히 동기화
                isAnimating = false;
            });
        }
    });

    // 브라우저 리사이즈 대응
    $window.on('resize', function () {
        windowHeight = $window.height();
    });
});
