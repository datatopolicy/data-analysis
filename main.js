// Data Analysis & Report Writing TOT — shared site script
// Include on every page via: <script src="assets/js/main.js" defer></script>
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mark the current page's top-nav link as active, based on the filename.
  var here = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (here === '') here = 'index.html';
  var navAs = Array.prototype.slice.call(document.querySelectorAll('.navlinks a'));
  navAs.forEach(function (a) {
    var target = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (target === here || (here === 'index.html' && target === '')) {
      a.classList.add('active');
    }
  });

  // On day pages, highlight the current day chip in the day-nav strip.
  var dayChips = Array.prototype.slice.call(document.querySelectorAll('.day-nav a'));
  dayChips.forEach(function (a) {
    var target = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (target === here) a.classList.add('current');
  });

  // In-page scrollspy for the session table of contents on day pages.
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.session-toc a[href^="#"]'));
  if (tocLinks.length) {
    var targets = tocLinks.map(function (a) {
      var id = a.getAttribute('href').slice(1);
      return { a: a, el: document.getElementById(id) };
    }).filter(function (t) { return t.el; });

    function onScroll() {
      var y = window.scrollY + 110;
      var current = null;
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.offsetTop <= y) current = targets[i];
      }
      tocLinks.forEach(function (a) { a.classList.remove('active'); });
      if (current) current.a.classList.add('active');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
