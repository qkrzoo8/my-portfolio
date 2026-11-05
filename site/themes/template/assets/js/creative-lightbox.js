
(function () {
    var lightbox = document.getElementById('creative-lightbox');
    var lightboxImage = document.getElementById('creative-lightbox-image');
    var closeButton = document.getElementById('creative-lightbox-close');

    var prevButton = document.getElementById('creative-lightbox-prev');
    var nextButton = document.getElementById('creative-lightbox-next');
    var counter = document.getElementById('creative-lightbox-counter');
    var caption = document.getElementById('creative-lightbox-caption');
    var imageButtons = Array.from(
        document.querySelectorAll('.creative-image-trigger')
    );


    if (!lightbox || !lightboxImage || !closeButton ||
        !prevButton || !nextButton || !counter || !caption ||
        imageButtons.length === 0) {
        return;
    }


    var currentIndex = 0;

    // 현재 이미지와 번호 표시
    function showImage(index) {
        currentIndex = (
            index + imageButtons.length
        ) % imageButtons.length;

        var button = imageButtons[currentIndex];

        lightboxImage.src = button.getAttribute('data-image');
        lightboxImage.alt = button.getAttribute('data-alt');
        caption.textContent = button.getAttribute('data-alt');

        counter.textContent =
            (currentIndex + 1) + ' / ' + imageButtons.length;
    }

    // 이미지 클릭 시 확대 창 열기
    imageButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            showImage(index);
            lightbox.showModal();
        });
    });

    // 이전 이미지
    prevButton.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });

    // 다음 이미지
    nextButton.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });

    // X 버튼으로 닫기
    closeButton.addEventListener('click', function () {
        lightbox.close();
    });

    // 키보드 방향키로 이미지 이동
    document.addEventListener('keydown', function (event) {
        if (!lightbox.open) return;

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showImage(currentIndex - 1);
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            showImage(currentIndex + 1);
        }
    });

    // 모바일 터치 스와이프로 이미지 이동
    var touchStartX = 0;
    var touchStartY = 0;

    lightboxImage.addEventListener('touchstart', function (event) {
        if (event.touches.length !== 1) return;

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }, { passive: true });

    lightboxImage.addEventListener('touchend', function (event) {
        if (!lightbox.open || event.changedTouches.length !== 1) return;

        var touchEndX = event.changedTouches[0].clientX;
        var touchEndY = event.changedTouches[0].clientY;

        var diffX = touchEndX - touchStartX;
        var diffY = touchEndY - touchStartY;

        // 일정 거리 이상 좌우로 움직였을 때만 사진 변경
        if (Math.abs(diffX) < 50 ||
            Math.abs(diffX) <= Math.abs(diffY) * 1.2) {
            return;
        }

        if (diffX < 0) {
            showImage(currentIndex + 1);
        } else {
            showImage(currentIndex - 1);
        }
    }, { passive: true });

    // 확대 창 바깥쪽 클릭 시 닫기
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    // 확대 창 닫힌 후 이미지 초기화
    lightbox.addEventListener('close', function () {
        lightboxImage.removeAttribute('src');
    });
})();
