function loadPage(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('content').innerHTML = "<p>Page under construction n</p>";
      });
  }
  
  // Example: when you click a link
  document.addEventListener('click', function (e) {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault?.();
      const page = link.getAttribute('data-link');
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
    const initialPage = 'home.html';
    loadPage(initialPage);
  });
  
