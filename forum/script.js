// Forum: Search Functionality
document.getElementById('forum-search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.category').forEach(category => {
      const title = category.querySelector('h3').textContent.toLowerCase();
      const description = category.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        category.style.display = 'block';
      } else {
        category.style.display = 'none';
      }
    });
  });