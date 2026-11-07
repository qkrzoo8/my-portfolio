(function () {
  var navbar = document.getElementById('navbar');
  var desktopNav = document.getElementById('desktop-nav');
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileBackdrop = document.getElementById('mobile-backdrop');
  var timelineLine = document.getElementById('timeline-line');
  var NAV_HEIGHT = 80;

  // Show correct nav elements based on viewport
  function updateNavVisibility() {
    var isDesktop = window.innerWidth >= 768;
    if (desktopNav) desktopNav.style.display = isDesktop ? 'flex' : 'none';
    if (hamburgerBtn) hamburgerBtn.style.display = isDesktop ? 'none' : 'block';
    if (timelineLine) timelineLine.style.display = isDesktop ? 'block' : 'none';
    if (!isDesktop) return;
    closeMobileMenu();
  }


  // 스크롤 위치에 따라 현재 섹션과 메뉴 강조
  function handleScroll(updateUrl) {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    var sectionIds = [
      'about',
      'experience',
      'creativeworks',
      'skills',
      'education',
      'contact'
    ];

    var activeSection = '';

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);

      if (section && section.getBoundingClientRect().top <= NAV_HEIGHT + 120) {
        activeSection = id;
      }
    });

    document.querySelectorAll('.nav-link[data-scroll], .mobile-nav-link[data-scroll]')
      .forEach(function (link) {
        var isActive = link.getAttribute('data-scroll') === activeSection;

        link.classList.toggle('active', isActive);


        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });

    // 페이지 스크롤 진행률 계산
    var progressBar = document.getElementById('scroll-progress');

    if (progressBar) {
      var scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      var progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 100;

      // 진행률을 0~100% 범위로 제한
      progress = Math.min(100, Math.max(0, progress));


      progressBar.style.width = progress + '%';
    }

    // 직접 스크롤할 때 현재 섹션을 URL에 반영
    if (updateUrl) {
      var newHash = window.scrollY <= 20
        ? ''
        : (activeSection ? '#' + activeSection : '');

      if (window.location.hash !== newHash) {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search + newHash
        );
      }
    }
  }



  // Mobile menu toggle
  function toggleMobileMenu() {
    var isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.setAttribute('aria-label', '메뉴 닫기');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'none';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'block';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Smooth scroll to section

  // 사용자 설정에 따른 스크롤 동작
  function scrollToSection(id) {
    var reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    var scrollBehavior = reduceMotion ? 'auto' : 'smooth';


    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: scrollBehavior
      });

      // 맨 위로 이동하면 URL의 섹션 주소 제거
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );

      return;
    }


    var el = document.getElementById(id);
    if (!el) return;

    var top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({
      top: top,
      behavior: scrollBehavior

    });

    // 현재 보고 있는 섹션을 URL에 반영
    window.history.replaceState(null, '', '#' + id);

  }


  // Event listeners

  window.addEventListener('scroll', function () {
    handleScroll(true);
  }, { passive: true });

  window.addEventListener('resize', updateNavVisibility);

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  // All scroll buttons/links
  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      var target = el.getAttribute('data-scroll');

      // 현재 페이지에 대상 섹션이 없다면 홈으로 이동
      if (!document.getElementById(target)) {
        var homeUrl = navbar.getAttribute('data-home-url');
        window.location.href = homeUrl + '#' + target;
        return;
      }

      closeMobileMenu();

      setTimeout(function () {
        scrollToSection(target);
      }, 10);
    });
  });


  // Esc 키로 모바일 메뉴 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      hamburgerBtn.focus();
    }
  });

  // Initialize
  updateNavVisibility();
  handleScroll();
})();
