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
