<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Furniture Store</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
<!-- Header -->
<header class="fixed-top bg-white shadow-sm">
    <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="h4 mb-0">Furniture Store</h1>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="index.jsp">Back to Store</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<!-- Checkout Content -->
<main class="py-5 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <h2 class="mb-4">Checkout</h2>

                <!-- Shipping Information -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Shipping Information</h5>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstName" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" required>
                                </div>
                                <div class="col-12">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city" required>
                                </div>
                                <div class="col-md-4">
                                    <label for="state" class="form-label">State</label>
                                    <select id="state" class="form-select" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                        <option>New York</option>
                                        <option>Texas</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="zip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="zip" required>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Payment Information -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Payment Information</h5>
                        <form>
                            <div class="row g-3">
                                <div class="col-12">
                                    <label for="cc-name" class="form-label">Name on card</label>
                                    <input type="text" class="form-control" id="cc-name" required>
                                    <small class="text-muted">Full name as displayed on card</small>
                                </div>
                                <div class="col-12">
                                    <label for="cc-number" class="form-label">Credit card number</label>
                                    <input type="text" class="form-control" id="cc-number" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="cc-expiration" class="form-label">Expiration</label>
                                    <input type="text" class="form-control" id="cc-expiration" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="cc-cvv" class="form-label">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" required>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Order Summary -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Your Order</h5>
                        <ul class="list-group mb-3" id="checkoutItems">
                            <!-- Items will be dynamically inserted here -->
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Custom Sofa</span>
                                <span>$599.00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Custom Coffee Table</span>
                                <span>$299.00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Custom Chair</span>
                                <span>$199.00</span>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <span>$1097.00</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Shipping</span>
                            <span>$49.00</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3 fw-bold">
                            <span>Total</span>
                            <span>$1146.00</span>
                        </div>
                        <button class="btn btn-primary w-100" id="placeOrderBtn">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<footer class="bg-dark text-white py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0">
                <h5 class="mb-4">Furniture Store</h5>
                <p>Custom furniture designed by you, crafted by us. Perfect for your home.</p>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <h5 class="mb-4">Quick Links</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="index.jsp#sofa" class="text-white">Sofas</a></li>
                    <li class="mb-2"><a href="index.jsp#coffee-table" class="text-white">Coffee Tables</a></li>
                    <li class="mb-2"><a href="index.jsp#chair" class="text-white">Chairs</a></li>
                </ul>
            </div>
            <div class="col-lg-4">
                <h5 class="mb-4">Contact Us</h5>
                <ul class="list-unstyled">
                    <li class="mb-2">Email: info@furniturestore.com</li>
                    <li class="mb-2">Phone: (123) 456-7890</li>
                    <li>Address: 123 Design St, Creative City</li>
                </ul>
            </div>
        </div>
        <hr class="my-4 bg-light">
        <div class="text-center">
            <p class="mb-0">&copy; 2023 Furniture Store. All rights reserved.</p>
        </div>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/checkout.js"></script>
</body>
</html>