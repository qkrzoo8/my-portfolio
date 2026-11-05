
(function () {
    var lightbox = document.getElementById('creative-lightbox');
    var lightboxImage = document.getElementById('creative-lightbox-image');
    var closeButton = document.getElementById('creative-lightbox-close');
    var imageButtons = document.querySelectorAll('.creative-image-trigger');

    if (!lightbox || !lightboxImage || !closeButton) return;

    // 홍보물 클릭 시 확대 창 열기
    imageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            lightboxImage.src = button.getAttribute('data-image');
            lightboxImage.alt = button.getAttribute('data-alt');

            lightbox.showModal();
        });
    });

    // X 버튼 클릭 시 닫기
    closeButton.addEventListener('click', function () {
        lightbox.close();
    });

    // 이미지 바깥쪽 배경 클릭 시 닫기
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    // 닫힌 후 이미지 초기화
    lightbox.addEventListener('close', function () {
        lightboxImage.removeAttribute('src');
    });
})();
