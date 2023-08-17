// wishlist.js

// Get the buttons for adding products to the wishlist
const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist,.remove-from-wishlist');

// Initialize the wishlist array in localStorage
if (!localStorage.getItem('wishlist')) {
  localStorage.setItem('wishlist', JSON.stringify([]));
}

// Update the wishlist in localStorage
function updateWishlist(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Add a product to the wishlist
function addToWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  wishlist.push(product);
  updateWishlist(wishlist);
  alert('Product added to wishlist!');
}

// Attach event listeners to each "Add to Wishlist" button
addToWishlistButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.parentElement.querySelector('h3').textContent,
      price: parseFloat(button.parentElement.querySelector('.price').textContent.replace('$', '')),
    };
    addToWishlist(product);
  });
});

// Function to display wishlist items in the wishlist page
// Function to remove a product from the wishlist
function removeFromWishlist(productName) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const updatedWishlist = wishlist.filter(product => product.name !== productName);
    updateWishlist(updatedWishlist);
    displayWishlistItems();
  }
  
  // Attach event listeners to each "Add to Wishlist" button
  addToWishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        name: button.parentElement.querySelector('h3').textContent,
        price: parseFloat(button.parentElement.querySelector('.price').textContent.replace('$', '')),
      };
      addToWishlist(product);
    });
  });
  
  // Attach event listeners to each "Remove from Wishlist" button
  const removeFromWishlistButtons = document.querySelectorAll('.remove-from-wishlist');
  removeFromWishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h3').textContent;
      removeFromWishlist(productName);
    });
  });
  
  // ...
  
  // Function to display wishlist items in the wishlist page
  function displayWishlistItems() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = '';
  
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  
    if (wishlist && wishlist.length > 0) {
      wishlist.forEach(product => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');
        wishlistItem.innerHTML = `
          <img src="images/product-placeholder.jpg" alt="Product Image" />
          <div class="wishlist-item-details">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="remove-from-wishlist">Remove from Wishlist</button>
          </div>
        `;
        wishlistItemsContainer.appendChild(wishlistItem);
      });
  
      // Attach event listeners to each "Remove from Wishlist" button
      const removeFromWishlistButtons = document.querySelectorAll('.remove-from-wishlist');
      removeFromWishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productName = button.parentElement.querySelector('h3').textContent;
          removeFromWishlist(productName);
        });
      });
    } else {
      wishlistItemsContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    }
  }
// Initialize wishlist items when the page loads
displayWishlistItems();
