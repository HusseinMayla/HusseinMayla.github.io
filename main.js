function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('content').innerHTML = "<p>Page not found.</p>";
    });
}

// Example: when you click a link
document.addEventListener('click', function (e) {
  if (e.target.matches('a[data-link]')) {
    e.preventDefault();
    const page = e.target.getAttribute('href');
    loadPage(page);
    history.pushState(null, '', page);
  }
});

// Support browser back/forward
window.addEventListener('popstate', function () {
  loadPage(location.pathname.substring(1));
});

// On first load
document.addEventListener('DOMContentLoaded', function () {
  const initialPage = location.pathname.substring(1) || 'home.html';
  loadPage(initialPage);
});
