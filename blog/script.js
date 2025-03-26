// Blog: Toggle "Read More" Content
document.querySelectorAll('.blog-post').forEach(post => {
    const readMoreLink = post.querySelector('a');
    const fullContent = post.querySelector('.full-content');
  
    if (readMoreLink && fullContent) {
      readMoreLink.addEventListener('click', function (e) {
        e.preventDefault();
        fullContent.style.display = fullContent.style.display === 'block' ? 'none' : 'block';
        readMoreLink.textContent = fullContent.style.display === 'block' ? 'Read Less' : 'Read More';
      });
    }
  });