const initializeCustomers = require('../scripts/defaultCustomers');
const initializeBrands = require('../scripts/defaultBrands');
const initializeSpecialPrices = require('../scripts/defaultSpecialPrices');
const initializeProducts = require('../scripts/defaultProducts');
const connectToDatabase = require('../config/database');

async function initializeAllData() {
    connectToDatabase()
    .then(async () => {
        try {
            await initializeCustomers();
            await initializeBrands();
            await initializeSpecialPrices();
            await initializeProducts();

            console.log('Todos los datos inicializados correctamente.');
        } catch (error) {
            console.error('Error al inicializar datos:', error);
        }

    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    });
}

module.exports = initializeAllData;
