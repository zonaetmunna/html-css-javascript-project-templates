// index.js (formerly cart.js)

// Get the buttons for adding products to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize the cart array in localStorage
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Update the cart in localStorage
function updateCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add a product to the cart
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(product);
  updateCart(cart);
  alert('Product added to cart!');
}

// Attach event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.parentElement.querySelector('h3').textContent,
      price: parseFloat(button.parentElement.querySelector('.price').textContent.replace('$', '')),
    };
    addToCart(product);
  });
});


// Function to calculate and update the cart total
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartTotalElement = document.getElementById('cart-total');
  
    if (cart && cart.length > 0) {
      const total = cart.reduce((acc, product) => acc + product.price, 0);
      cartTotalElement.textContent = `$${total.toFixed(2)}`;
    } else {
      cartTotalElement.textContent = '$0.00';
    }
  }
  
  // Function to display cart items in the cart page
  function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
  
    const cart = JSON.parse(localStorage.getItem('cart'));
  
    if (cart && cart.length > 0) {
      cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="images/product-placeholder.jpg" alt="Product Image" />
          <div class="cart-item-details">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="remove-from-cart" data-product-name="${product.name}">Remove</button>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
    } else {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
  }

  function removeFromCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(product => product.name !== productName);
    updateCart(updatedCart);
    displayCartItems(); // Refresh the cart items on the page
    updateCartTotal();
  }
  
  // Attach event listeners to remove buttons in cart items
  document.addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
      const productName = event.target.getAttribute('data-product-name');
      removeFromCart(productName);
    }
  });
  
  // Initialize cart items and total when the page loads
  displayCartItems();
  updateCartTotal();