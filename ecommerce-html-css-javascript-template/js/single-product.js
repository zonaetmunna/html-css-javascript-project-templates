// single-product.js
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    if (productId) {
      fetchProductDetails(productId);
    }
  });
  
  function getProductIdFromUrl() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('id');
  }
  
  function fetchProductDetails(productId) {
    // Here you would typically make an API request or use some data source to fetch the product details
    // For the sake of this example, let's assume you have a product data object
    const productData = {
      id: '1',
      name: 'Product 2',
      description: 'Description of Product 2.',
      price: 29.99,
      imageUrl: 'images/product2.jpg'
    };
  
    displayProductDetails(productData);
  }
  
  function displayProductDetails(product) {
    const singleProductSection = document.querySelector('.single-product');
    singleProductSection.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.imageUrl}" alt="${product.name}" />
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
    `;
  }
  