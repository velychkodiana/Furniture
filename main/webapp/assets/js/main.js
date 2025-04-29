// Cart state
let cart = {
    items: [],
    total: 0
};

// Prices
const prices = {
    'sofa': 599,
    'coffee-table': 299,
    'chair': 199
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initEventListeners();

    // Initialize range values
    updateRangeValues();

    // Load cart from localStorage
    loadCart();
});

// Initialize event listeners
function initEventListeners() {
    // Range inputs
    document.querySelectorAll('.sofa-length').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('sofaLengthValue').textContent = this.value;
        });
    });

    document.querySelectorAll('.table-height').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('tableHeightValue').textContent = this.value;
        });
    });

    document.querySelectorAll('.chair-height').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('chairHeightValue').textContent = this.value;
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            addToCart(product);
        });
    });

    // Cart button
    document.getElementById('cartButton').addEventListener('click', showCartModal);
}

// Update range value displays
function updateRangeValues() {
    document.getElementById('sofaLengthValue').textContent =
        document.querySelector('.sofa-length').value;

    document.getElementById('tableHeightValue').textContent =
        document.querySelector('.table-height').value;

    document.getElementById('chairHeightValue').textContent =
        document.querySelector('.chair-height').value;
}

// Cart functions
function addToCart(product) {
    // Get current customization options
    let customization = {
        color: document.querySelector(`#${product}Color`).value,
        colorName: colorNames[document.querySelector(`#${product}Color`).value]
    };

    // Add material if available
    const materialSelect = document.querySelector(`#${product}Material`);
    if (materialSelect) {
        customization.material = materialSelect.value;
    }

    // Add size if available
    const sizeInput = document.querySelector(`#${product}Length`) ||
        document.querySelector(`#${product}Height`);
    if (sizeInput) {
        customization.size = sizeInput.value;
    }

    // Add to cart
    cart.items.push({
        product,
        customization,
        price: prices[product]
    });

    // Update total
    updateCartTotal();

    // Save to localStorage
    saveCart();

    // Update UI
    updateCartCount();

    // Show feedback
    showToast(`${productName(product)} added to cart!`);
}

// Rest of your existing main.js code...// Cart state
let cart = {
    items: [],
    total: 0
};

// Prices
const prices = {
    'sofa': 599,
    'coffee-table': 299,
    'chair': 199
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initEventListeners();

    // Update range value displays
    updateRangeValues();

    // Initialize cart from localStorage if available
    loadCart();
});

// Initialize event listeners
function initEventListeners() {
    // Color selectors
    document.querySelectorAll('.sofa-color').forEach(el => {
        el.addEventListener('change', function() {
            updateSofaColor(this.value);
        });
    });

    document.querySelectorAll('.table-color').forEach(el => {
        el.addEventListener('change', function() {
            updateTableColor(this.value);
        });
    });

    document.querySelectorAll('.chair-color').forEach(el => {
        el.addEventListener('change', function() {
            updateChairColor(this.value);
        });
    });

    // Range inputs
    document.querySelectorAll('.sofa-length').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('sofaLengthValue').textContent = this.value;
            updateSofaSize(this.value);
        });
    });

    document.querySelectorAll('.table-height').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('tableHeightValue').textContent = this.value;
            updateTableHeight(this.value);
        });
    });

    document.querySelectorAll('.chair-height').forEach(el => {
        el.addEventListener('input', function() {
            document.getElementById('chairHeightValue').textContent = this.value;
            updateChairHeight(this.value);
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            addToCart(product);
        });
    });

    // Cart button
    document.getElementById('cartButton').addEventListener('click', function() {
        showCartModal();
    });

    // Place order button (in modal)
    document.getElementById('placeOrderBtn')?.addEventListener('click', function() {
        placeOrder();
    });
}

// Update range value displays
function updateRangeValues() {
    document.getElementById('sofaLengthValue').textContent =
        document.querySelector('.sofa-length').value;

    document.getElementById('tableHeightValue').textContent =
        document.querySelector('.table-height').value;

    document.getElementById('chairHeightValue').textContent =
        document.querySelector('.chair-height').value;
}

// Product customization functions
function updateSofaColor(color) {
    // In a real app, this would update the 3D model's material
    console.log(`Updating sofa color to ${color}`);
    // Example: sofaMaterial.color.set(new THREE.Color(color));
}

function updateTableColor(color) {
    console.log(`Updating table color to ${color}`);
}

function updateChairColor(color) {
    console.log(`Updating chair color to ${color}`);
}

function updateSofaSize(length) {
    console.log(`Updating sofa length to ${length} cm`);
}

function updateTableHeight(height) {
    console.log(`Updating table height to ${height} cm`);
}

function updateChairHeight(height) {
    console.log(`Updating chair height to ${height} cm`);
}

// Cart functions
function addToCart(product) {
    // Get current customization options
    let customization = {};

    if (product === 'sofa') {
        customization = {
            color: document.querySelector('.sofa-color').value,
            fabric: document.querySelector('.sofa-fabric').value,
            length: document.querySelector('.sofa-length').value
        };
    } else if (product === 'coffee-table') {
        customization = {
            material: document.querySelector('.table-material').value,
            color: document.querySelector('.table-color').value,
            height: document.querySelector('.table-height').value
        };
    } else if (product === 'chair') {
        customization = {
            style: document.querySelector('.chair-style').value,
            color: document.querySelector('.chair-color').value,
            height: document.querySelector('.chair-height').value
        };
    }

    // Add to cart
    cart.items.push({
        product,
        customization,
        price: prices[product]
    });

    // Update total
    cart.total = cart.items.reduce((sum, item) => sum + item.price, 0);

    // Save to localStorage
    saveCart();

    // Update UI
    updateCartCount();

    // Show feedback
    alert(`${productName(product)} added to cart!`);
}

function productName(product) {
    const names = {
        'sofa': 'Custom Sofa',
        'coffee-table': 'Custom Coffee Table',
        'chair': 'Custom Chair'
    };
    return names[product] || product;
}

function showCartModal() {
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    const cartItemsEl = document.getElementById('cartItems');

    if (cart.items.length === 0) {
        cartItemsEl.innerHTML = '<p class="text-muted">Your cart is empty</p>';
    } else {
        cartItemsEl.innerHTML = cart.items.map(item => `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>${productName(item.product)}</h6>
                    <small class="text-muted">${formatCustomization(item.customization)}</small>
                </div>
                <div>
                    <span class="fw-bold">$${item.price.toFixed(2)}</span>
                    <button class="btn btn-sm btn-outline-danger ms-2 remove-item" data-index="${cart.items.indexOf(item)}">
                        &times;
                    </button>
                </div>
            </div>
        `).join('');

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
                showCartModal(); // Refresh modal
            });
        });
    }

    // Update total
    document.getElementById('cartTotal').textContent = `$${cart.total.toFixed(2)}`;

    // Show modal
    modal.show();
}

function formatCustomization(customization) {
    return Object.entries(customization)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
}

function removeFromCart(index) {
    cart.items.splice(index, 1);
    cart.total = cart.items.reduce((sum, item) => sum + item.price, 0);
    saveCart();
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.items.length;
}

function saveCart() {
    localStorage.setItem('furnitureCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('furnitureCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function placeOrder() {
    // In a real app, this would send the order to a server
    console.log('Placing order:', cart);
    alert('Order placed successfully! Thank you for your purchase.');

    // Clear cart
    cart = { items: [], total: 0 };
    saveCart();
    updateCartCount();

    // Redirect to home or show confirmation
    window.location.href = 'index.jsp';
}

function updateSofaColor(color) {
    if (!sofaModel) return;

    sofaModel.traverse(function(child) {
        if (child.isMesh) {
            child.material.color.set(new THREE.Color(color));
        }
    });
}

function updateSofaFabric(textureType) {
    // Тут можна додати логіку для зміни текстури
    console.log('Changing fabric to:', textureType);

    // Приклад завантаження текстури
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(`assets/textures/fabric_${textureType}.jpg`, function(texture) {
        sofaModel.traverse(function(child) {
            if (child.isMesh) {
                child.material.map = texture;
                child.material.needsUpdate = true;
            }
        });
    });
}

function updateSofaSize(length) {
    if (!sofaModel) return;

    // Конвертуємо см у метри (Three.js використовує метри)
    const lengthMeters = length / 100;
    const scale = lengthMeters / 2; // 2 - початкова довжина в метрах

    gsap.to(sofaModel.scale, {
        x: scale,
        duration: 0.5,
        ease: "power2.out"
    });
}