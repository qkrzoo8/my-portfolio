
(function () {
    var lightbox = document.getElementById('creative-lightbox');
    var lightboxImage = document.getElementById('creative-lightbox-image');
    var closeButton = document.getElementById('creative-lightbox-close');

    var prevButton = document.getElementById('creative-lightbox-prev');
    var nextButton = document.getElementById('creative-lightbox-next');
    var counter = document.getElementById('creative-lightbox-counter');

    var imageButtons = Array.from(
        document.querySelectorAll('.creative-image-trigger')
    );

    if (!lightbox || !lightboxImage || !closeButton ||
        !prevButton || !nextButton || !counter ||
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
