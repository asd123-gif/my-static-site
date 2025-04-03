fetch('/frontend/static/JSON/blogList.json')
  .then(response => response.json())
  .then(articles => {
    const blogContainer = document.getElementById('blog-list');
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('blog-post');
      articleElement.innerHTML = `
        <a href="blog-post.html?id=${article.id}">
          <img src="${article.image}" alt="${article.title}">
          <h3>${article.title}</h3>
        </a>
      `;
      blogContainer.appendChild(articleElement);
    });
  })
  .catch(error => console.error('Error loading blog list:', error));
