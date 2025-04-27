<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Furniture Store - Customize Your Home</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/loaders/GLTFLoader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
</head>
<body>
<!-- Header -->
<header class="fixed-top bg-white shadow-sm">
    <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center comfortaa-font" >
            <h1 class="h3 mb-0 d-flex align-items-center">
                <img src="assets/icon/chair.png" alt="logo" class="sofa-logo">
                Furniture Store
            </h1>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#sofa">Sofa</a></li>
                    <li class="nav-item"><a class="nav-link" href="#coffee-table">Coffee Table</a></li>
                    <li class="nav-item"><a class="nav-link" href="#chair">Chair</a></li>
                    <li class="nav-item">
                        <button class="btn btn-outline-primary position-relative" id="cartButton">
                            Cart <span class="badge bg-primary rounded-pill" id="cartCount">0</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<!-- Main Content -->
<main>
    <!-- Hero Section -->
    <section class="vh-100 d-flex align-items-center bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold mb-4">Custom Furniture for Your Home</h1>
                    <p class="lead mb-4">Design and customize your perfect furniture pieces with our easy-to-use 3D configurator.</p>
                    <a href="#sofa" class="btn btn-primary btn-lg">Start Designing</a>
                </div>
                <div class="col-lg-6">
                    <div id="heroModel" class="model-container"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sofa Section -->
    <section id="sofa" class="vh-100 d-flex align-items-center bg-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2 class="fw-bold mb-4">Custom Sofa</h2>
                    <div class="mb-4">
                        <label class="form-label">Color</label>
                        <select class="form-select sofa-color">
                            <option value="#795548">White</option>
                            <option value="#263238">Black</option>
                            <option value="#cfd8dc">Beige</option>
                            <option value="#cfd8dc">Chocolate</option>
                            <option value="#e0e0e0">Light Gray</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Fabric</label>
                        <select class="form-select sofa-fabric">
                            <option value="fabric1">Leather</option>
                            <option value="fabric2">Linen</option>
                            <option value="fabric3">Boucle</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Length</label>
                        <input type="range" class="form-range sofa-length" min="120" max="200" value="160">
                        <div class="text-muted"><span id="sofaLengthValue">160</span> cm</div>
                    </div>
                    <button class="btn btn-primary add-to-cart" data-product="sofa">Add to Cart</button>
                </div>
                <div class="col-lg-6">
                    <div id="sofaModel" class="model-container"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Coffee Table Section -->
    <section id="coffee-table" class="vh-100 d-flex align-items-center bg-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-2">
                    <h2 class="fw-bold mb-4">Custom Coffee Table</h2>
                    <div class="mb-4">
                        <label class="form-label">Material</label>
                        <select class="form-select table-material">
                            <option value="wood">Wood</option>
                            <option value="glass">Glass</option>
                            <option value="metal">Metal</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Color</label>
                        <select class="form-select table-color">
                            <option value="#795548">White</option>
                            <option value="#263238">Black</option>
                            <option value="#cfd8dc">Beige</option>
                            <option value="#cfd8dc">Chocolate</option>
                            <option value="#e0e0e0">Light Gray</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Height</label>
                        <input type="range" class="form-range table-height" min="30" max="60" value="45">
                        <div class="text-muted"><span id="tableHeightValue">45</span> cm</div>
                    </div>
                    <button class="btn btn-primary add-to-cart" data-product="coffee-table">Add to Cart</button>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div id="tableModel" class="model-container"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Chair Section -->
    <section id="chair" class="vh-100 d-flex align-items-center bg-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2 class="fw-bold mb-4">Custom Chair</h2>
                    <div class="mb-4">
                        <!--  <label class="form-label">Style</label>
                         <select class="form-select chair-style">
                             <option value="modern">Modern</option>
                             <option value="classic">Classic</option>
                             <option value="industrial">Industrial</option>
                         </select>-->
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Color</label>
                        <select class="form-select chair-color">
                            <option value="#795548">White</option>
                            <option value="#263238">Black</option>
                            <option value="#cfd8dc">Beige</option>
                            <option value="#cfd8dc">Chocolate</option>
                            <option value="#e0e0e0">Light Gray</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Height</label>
                        <input type="range" class="form-range chair-height" min="70" max="100" value="85">
                        <div class="text-muted"><span id="chairHeightValue">85</span> cm</div>
                    </div>
                    <button class="btn btn-primary add-to-cart" data-product="chair">Add to Cart</button>
                </div>
                <div class="col-lg-6">
                    <div id="chairModel" class="model-container"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cart Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Your Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="cartItems" class="mb-4">
                        <!-- Cart items will be dynamically inserted here -->
                        <p class="text-muted">Your cart is empty</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5>Total:</h5>
                        <h5 id="cartTotal">$0.00</h5>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                    <a href="checkout.jsp" class="btn btn-primary">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<footer class="bg-dark-subtle text-white py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0">
                <h5 class="mb-4">Furniture Store</h5>
                <p>Custom furniture designed by you, crafted by us.</p>
                <p>Perfect for your home.</p>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <h5 class="mb-4">Quick Links</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="#sofa" class="text-white">Sofas</a></li>
                    <li class="mb-2"><a href="#coffee-table" class="text-white">Coffee Tables</a></li>
                    <li class="mb-2"><a href="#chair" class="text-white">Chairs</a></li>
                </ul>
            </div>
            <div class="col-lg-4">

                <h5 class="mb-4">Contact Us</h5>
                <ul class="list-unstyled">
                    <li class="mb-2">Email: info@dixicreated.com</li>
                    <li class="mb-2">Phone: (095) 404-1977</li>
                    <li>Address: KNU, Kyiv, Ukraine</li>
                </ul>
            </div>
        </div>
        <hr class="my-4 bg-light">
        <div class="text-center">
            <p class="mb-0">&copy; 2025 Furniture Store. Created by Diana Velychko.</p>
        </div>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/three-app.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>