$(document).ready(function() {
    // Add click event handler for "View" buttons
    $('.view-product').on('click', function() {
        // Get the product name from the closest product element
        var productName = $(this).closest('.product').find('h3').text();
        
        // Redirect to the product detail page with the product name as a parameter
        window.location.href = 'single-product.html?product=' + encodeURIComponent(productName);
    });

    // Example data for products (replace this with actual data from your backend)
    var products = [
        { name: "Product 1", price: 19.99, image: "product1.jpg" },
        { name: "Product 2", price: 29.99, image: "product2.jpg" },
        { name: "Product 3", price: 24.99, image: "product3.jpg" },
        { name: "Product 4", price: 39.99, image: "product4.jpg" },
        // Add more products...
    ];

    var productContainer = $('.product-list');

    // Display products
    products.forEach(function(product) {
        var productElement = $('<div>').addClass('product');
        productElement.append($('<img>').attr('src', 'images/' + product.image).attr('alt', product.name));
        productElement.append($('<h3>').text(product.name));
        productElement.append($('<p>').text('$' + product.price.toFixed(2)));
        productElement.append($('<button>').addClass('add-to-cart').text('Add to Cart'));
        productElement.append($('<button>').addClass('view-product').text('View'));
        productContainer.append(productElement);
    });

    // Check if there's a product name parameter in the URL
    var urlParams = new URLSearchParams(window.location.search);
    var productName = urlParams.get('product');

    if (productName) {
        // Display product details on the product detail page
        $('.product-details').append('<h2>' + productName + '</h2>');
        // Add more details if needed...
    }
});
