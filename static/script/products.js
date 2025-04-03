fetch('/frontend/static/JSON/products.json') // کل محصولات را لود کن
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-list');
    data.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
      `;
      productContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
