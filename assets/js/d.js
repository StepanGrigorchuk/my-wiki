document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.dropdown-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.parentElement;
      const menu = this.nextElementSibling;
      const isActive = dropdown.classList.contains('active');
      // Close all dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
      });
      // Toggle current dropdown
      if (!isActive) {
        dropdown.classList.add('active');
      }
    });
  });

  // Close dropdowns when clicking
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('#results-container')) {
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
      });
    }
  });
});