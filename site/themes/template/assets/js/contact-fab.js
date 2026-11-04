(function () {
  var fab = document.getElementById('contact-fab');
  var popover = document.getElementById('contact-fab-popover');
  if (!fab || !popover) return;

  fab.addEventListener('click', function () {
    var isOpen = popover.classList.contains('open');
    if (isOpen) {
      popover.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
    } else {
      popover.classList.add('open');
      fab.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target) && !popover.contains(e.target)) {
      popover.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
    }
  });

  // Esc 키로 연락처 창 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popover.classList.contains('open')) {
      popover.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
      fab.focus();
    }
  });

})();
