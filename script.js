var toggle = document.querySelector('.dropdown-toggle');
var content = document.querySelector('.dropdown-content');

toggle.addEventListener('click', function() {
    content.classList.toggle('show');
});



// Get the "add to cart" buttons
var addToCartButtons = document.querySelectorAll('.product button');

// Get the cart total element
var cartTotal = document.getElementById('cart-total');

// Initialize the cart total to zero
var total = 0;

// Add event listeners to the "add to cart" buttons
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        // Get the price of the product associated with the button that was clicked
        var price = parseInt(this.getAttribute('data-price'));

        // Add the price to the cart total
        total += price;

        // Update the cart total element with the new total
        cartTotal.textContent = total + ' DKK';
    });
}