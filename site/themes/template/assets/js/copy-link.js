(function () {
    var copyButton = document.getElementById('copy-portfolio-link');
    var status = document.getElementById('copy-link-status');

    if (!copyButton || !status) return;

    copyButton.addEventListener('click', function () {
        var url = copyButton.getAttribute('data-url');

        if (!url || !navigator.clipboard) {
            status.textContent = '이 브라우저에서는 자동 복사를 지원하지 않습니다.';
            return;
        }

        navigator.clipboard.writeText(url)
            .then(function () {
                status.textContent = '주소 복사 완료!';
            })
            .catch(function () {
                status.textContent = '복사에 실패했습니다. 주소창에서 복사해 주세요.';
            });
    });
})();
