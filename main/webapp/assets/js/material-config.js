// Material configurations
const materialPresets = {
    linen: {
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.1
    },
    leather: {
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 0.3
    },
    velvet: {
        roughness: 0.9,
        metalness: 0,
        clearcoat: 0
    },
    wood: {
        roughness: 0.7,
        metalness: 0,
        clearcoat: 0.2
    },
    glass: {
        roughness: 0.1,
        metalness: 0,
        clearcoat: 0.5,
        transparent: true,
        opacity: 0.8
    },
    metal: {
        roughness: 0.4,
        metalness: 0.9,
        clearcoat: 0.5
    }
};

// Color names mapping
const colorNames = {
    '#EBE9DD': 'COCONUT MILK',
    '#E1DACA': 'CHALK BEIGE',
    '#A8A696': 'SAGE',
    '#766B5D': 'TAUPE BROWN',
    '#162A2C': 'MIDNIGHT'
};

// Apply material to model
function applyMaterial(modelViewer, color, materialType) {
    modelViewer.addEventListener('load', () => {
        const model = modelViewer.model;
        const materialConfig = materialPresets[materialType];

        model.materials.forEach(material => {
            // Apply to all materials or specific ones
            if (material.name.includes('Fabric') || material.name.includes('Main') ||
                material.name.includes('Wood') || material.name.includes('Metal')) {

                // Convert hex to RGB
                const r = parseInt(color.substring(1, 3), 16) / 255;
                const g = parseInt(color.substring(3, 5), 16) / 255;
                const b = parseInt(color.substring(5, 7), 16) / 255;

                // Set material properties
                material.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
                material.pbrMetallicRoughness.setMetallicFactor(materialConfig.metalness);
                material.pbrMetallicRoughness.setRoughnessFactor(materialConfig.roughness);

                if (materialConfig.clearcoat !== undefined) {
                    material.setClearcoatFactor(materialConfig.clearcoat);
                }

                if (materialConfig.transparent) {
                    material.setAlphaMode('BLEND');
                    material.setAlphaCutoff(0.5);
                }
            }
        });
    });
}

// Initialize all model configurations
document.addEventListener('DOMContentLoaded', () => {
    // Sofa Configuration
    const sofaModel = document.querySelector('#sofaModel');
    const sofaColor = document.querySelector('#sofaColor');
    const sofaMaterial = document.querySelector('#sofaMaterial');

    sofaColor.addEventListener('change', () => {
        applyMaterial(sofaModel, sofaColor.value, sofaMaterial.value);
    });

    sofaMaterial.addEventListener('change', () => {
        applyMaterial(sofaModel, sofaColor.value, sofaMaterial.value);
    });

    // Table Configuration
    const tableModel = document.querySelector('#tableModel');
    const tableColor = document.querySelector('#tableColor');
    const tableMaterial = document.querySelector('#tableMaterial');

    tableColor.addEventListener('change', () => {
        applyMaterial(tableModel, tableColor.value, tableMaterial.value);
    });

    tableMaterial.addEventListener('change', () => {
        applyMaterial(tableModel, tableColor.value, tableMaterial.value);
    });

    // Chair Configuration
    const chairModel = document.querySelector('#chairModel');
    const chairColor = document.querySelector('#chairColor');

    chairColor.addEventListener('change', () => {
        applyMaterial(chairModel, chairColor.value, 'fabric');
    });

    // Initialize default materials
    applyMaterial(sofaModel, sofaColor.value, sofaMaterial.value);
    applyMaterial(tableModel, tableColor.value, tableMaterial.value);
    applyMaterial(chairModel, chairColor.value, 'fabric');
});