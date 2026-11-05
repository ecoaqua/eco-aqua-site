// Meniul pentru telefon: se deschide/închide din butonul ☰ și se închide la alegerea unei opțiuni
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.top');
  var toggle = document.querySelector('.menu-toggle');
  if (!header || !toggle) return;
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// Numerele de telefon pe calculator: în loc să deschidă o pagină goală (nu există aplicație de apel),
// arătăm numărul într-o căsuță și îl copiem. Pe telefon (ecran tactil) link-ul sună normal.
(function () {
  function pretty(href) {
    var d = href.replace(/[^0-9]/g, '');
    if (d.indexOf('40') === 0) d = '0' + d.slice(2);
    return d.length === 10 ? d.slice(0, 4) + ' ' + d.slice(4, 7) + ' ' + d.slice(7) : d;
  }
  function isPhone() {
    return window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  }
  var box, timer;
  function show(num, copied) {
    if (!box) {
      box = document.createElement('div');
      box.className = 'call-toast';
      box.setAttribute('role', 'status');
      box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    box.innerHTML = '<span>Sunați-ne la</span><strong>' + num + '</strong><small>' +
      (copied ? 'Numărul a fost copiat.' : 'Formați numărul de pe telefon.') + '</small>';
    box.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(function () { box.classList.remove('show'); }, 6000);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a || isPhone()) return;
    e.preventDefault();
    var num = pretty(a.getAttribute('href'));
    var done = function (ok) { show(num, ok); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(num.replace(/ /g, '')).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    } catch (err) { done(false); }
  });
})();
