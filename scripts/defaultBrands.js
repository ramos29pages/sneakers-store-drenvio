const Brand = require('../src/models/Brand');
const brandsData = require('../data/defaultBrands.json');
const connectToDatabase = require('../config/database');

async function initializeBrands() {
    try {
        const count = await Brand.countDocuments();

        if (count < 1) { 
            await Brand.insertMany(brandsData);
            console.log('Datos de Brands inicializados correctamente.');
        }
    } catch (error) {
        console.error('Error al inicializar datos de marcas:', error);
    }
}

module.exports = initializeBrands;