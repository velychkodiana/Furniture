// Initialize Three.js scenes for each product
let sofaScene, tableScene, chairScene, heroScene;
let sofaCamera, tableCamera, chairCamera, heroCamera;
let sofaRenderer, tableRenderer, chairRenderer, heroRenderer;
let sofaControls, tableControls, chairControls, heroControls;
let sofaModel, tableModel, chairModel, heroModel; // Змінні для збереження моделей

// Initialize all scenes
function initScenes() {
    // Hero Scene
    initHeroScene();

    // Sofa Scene
    initSofaScene();

    // Table Scene
    initTableScene();

    // Chair Scene
    initChairScene();

    // Start animation loop
    animate();
}

// Initialize Hero Scene
function initHeroScene() {
    const container = document.getElementById('heroModel');

    // Scene
    heroScene = new THREE.Scene();
    heroScene.background = new THREE.Color(0xf8f9fa);

    // Camera
    heroCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    heroCamera.position.z = 5;

    // Renderer
    heroRenderer = new THREE.WebGLRenderer({ antialias: true });
    heroRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(heroRenderer.domElement);

    // Controls
    heroControls = new THREE.OrbitControls(heroCamera, heroRenderer.domElement);
    heroControls.enableZoom = false;
    heroControls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    heroScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    heroScene.add(directionalLight);

    // Load hero model
    loadModel('assets/models/hero.glb', heroScene).then(model => {
        heroModel = model;
        // Масштабування та позиціонування моделі
        model.scale.set(0.5, 0.5, 0.5);
        model.position.y = -1;
    });
}

// Initialize Sofa Scene
function initSofaScene() {
    const container = document.getElementById('sofaModel');

    // Scene
    sofaScene = new THREE.Scene();
    sofaScene.background = new THREE.Color(0xf8f9fa);

    // Camera
    sofaCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    sofaCamera.position.z = 5;

    // Renderer
    sofaRenderer = new THREE.WebGLRenderer({ antialias: true });
    sofaRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(sofaRenderer.domElement);

    // Controls
    sofaControls = new THREE.OrbitControls(sofaCamera, sofaRenderer.domElement);
    sofaControls.enableZoom = true;
    sofaControls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sofaScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    sofaScene.add(directionalLight);

    // Load sofa model
    loadModel('assets/models/sofa.glb', sofaScene).then(model => {
        sofaModel = model;
        // Масштабування та позиціонування моделі
        model.scale.set(0.8, 0.8, 0.8);
        model.position.y = -0.5;
    });
}

// Initialize Table Scene
function initTableScene() {
    const container = document.getElementById('tableModel');

    // Scene
    tableScene = new THREE.Scene();
    tableScene.background = new THREE.Color(0xf8f9fa);

    // Camera
    tableCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    tableCamera.position.z = 5;

    // Renderer
    tableRenderer = new THREE.WebGLRenderer({ antialias: true });
    tableRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(tableRenderer.domElement);

    // Controls
    tableControls = new THREE.OrbitControls(tableCamera, tableRenderer.domElement);
    tableControls.enableZoom = true;
    tableControls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    tableScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    tableScene.add(directionalLight);

    // Load table model
    loadModel('assets/models/table.glb', tableScene).then(model => {
        tableModel = model;
        // Масштабування та позиціонування моделі
        model.scale.set(0.7, 0.7, 0.7);
        model.position.y = -0.3;
    });
}

// Initialize Chair Scene
function initChairScene() {
    const container = document.getElementById('chairModel');

    // Scene
    chairScene = new THREE.Scene();
    chairScene.background = new THREE.Color(0xf8f9fa);

    // Camera
    chairCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    chairCamera.position.z = 5;

    // Renderer
    chairRenderer = new THREE.WebGLRenderer({ antialias: true });
    chairRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(chairRenderer.domElement);

    // Controls
    chairControls = new THREE.OrbitControls(chairCamera, chairRenderer.domElement);
    chairControls.enableZoom = true;
    chairControls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    chairScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    chairScene.add(directionalLight);

    // Load chair model
    loadModel('assets/models/chair.glb', chairScene).then(model => {
        chairModel = model;
        // Масштабування та позиціонування моделі
        model.scale.set(0.6, 0.6, 0.6);
        model.position.y = -0.4;
    });
}

// Функція для завантаження моделей
function loadModel(path, scene) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                resolve(model);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
                reject(error);
                // Якщо модель не завантажилась, додаємо placeholder
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);
                resolve(cube);
            }
        );
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update controls
    if (heroControls) heroControls.update();
    if (sofaControls) sofaControls.update();
    if (tableControls) tableControls.update();
    if (chairControls) chairControls.update();

    // Render scenes
    if (heroRenderer && heroScene && heroCamera) heroRenderer.render(heroScene, heroCamera);
    if (sofaRenderer && sofaScene && sofaCamera) sofaRenderer.render(sofaScene, sofaCamera);
    if (tableRenderer && tableScene && tableCamera) tableRenderer.render(tableScene, tableCamera);
    if (chairRenderer && chairScene && chairCamera) chairRenderer.render(chairScene, chairCamera);
}

// Handle window resize
function onWindowResize() {
    // Hero scene
    const heroContainer = document.getElementById('heroModel');
    heroCamera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);

    // Sofa scene
    const sofaContainer = document.getElementById('sofaModel');
    sofaCamera.aspect = sofaContainer.clientWidth / sofaContainer.clientHeight;
    sofaCamera.updateProjectionMatrix();
    sofaRenderer.setSize(sofaContainer.clientWidth, sofaContainer.clientHeight);

    // Table scene
    const tableContainer = document.getElementById('tableModel');
    tableCamera.aspect = tableContainer.clientWidth / tableContainer.clientHeight;
    tableCamera.updateProjectionMatrix();
    tableRenderer.setSize(tableContainer.clientWidth, tableContainer.clientHeight);

    // Chair scene
    const chairContainer = document.getElementById('chairModel');
    chairCamera.aspect = chairContainer.clientWidth / chairContainer.clientHeight;
    chairCamera.updateProjectionMatrix();
    chairRenderer.setSize(chairContainer.clientWidth, chairContainer.clientHeight);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScenes();
    window.addEventListener('resize', onWindowResize);
});