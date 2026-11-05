
(function () {
    // PDF 저장 버튼 가져오기
    var printButton = document.getElementById('print-portfolio');

    if (!printButton) return;

    // 버튼 클릭 시 브라우저 인쇄 창 열기
    printButton.addEventListener('click', function () {
        window.print();
    });
})();
