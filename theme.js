(function () {
  var stored = localStorage.getItem('rc-theme');
  var initial = stored || 'dark';
  document.documentElement.setAttribute('data-theme', initial);
})();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rc-theme', next);
    });
  }
});
