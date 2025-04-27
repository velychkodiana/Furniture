document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('furnitureCart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        updateOrderSummary(cart);
    }

    // Form submission
    document.querySelector('form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        processCheckout();
    });

    // Place order button
    document.getElementById('placeOrderBtn')?.addEventListener('click', function() {
        processCheckout();
    });
});

function updateOrderSummary(cart) {
    const itemsContainer = document.getElementById('checkoutItems');

    if (cart.items.length === 0) {
        // Redirect to home if cart is empty
        window.location.href = 'index.jsp';
        return;
    }

    // Clear existing items
    itemsContainer.innerHTML = '';

    // Add items
    cart.items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        li.innerHTML = `
            <span>${productName(item.product)}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        itemsContainer.appendChild(li);
    });

    // Calculate totals
    const subtotal = cart.items.reduce((sum, item) => sum + item.price, 0);
    const shipping = 49; // Fixed shipping cost
    const total = subtotal + shipping;

    // Update totals display
    document.querySelector('#checkoutItems + div').innerHTML = `
        <div class="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>$${shipping.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-content-between mb-3 fw-bold">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

function productName(product) {
    const names = {
        'sofa': 'Custom Sofa',
        'coffee-table': 'Custom Coffee Table',
        'chair': 'Custom Chair'
    };
    return names[product] || product;
}

function processCheckout() {
    // Validate form
    const form = document.querySelector('form');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    // Get form data
    const formData = {
        shipping: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value
        },
        payment: {
            nameOnCard: document.getElementById('cc-name').value,
            cardNumber: document.getElementById('cc-number').value,
            expiration: document.getElementById('cc-expiration').value,
            cvv: document.getElementById('cc-cvv').value
        }
    };

    // Get cart data
    const savedCart = localStorage.getItem('furnitureCart');
    const cart = savedCart ? JSON.parse(savedCart) : { items: [], total: 0 };

    // In a real app, you would send this data to your server
    console.log('Processing checkout:', { formData, cart });

    // Show confirmation
    alert('Order placed successfully! Thank you for your purchase.');

    // Clear cart
    localStorage.removeItem('furnitureCart');

    // Redirect to confirmation page (which you would need to create)
    window.location.href = 'index.jsp';
}