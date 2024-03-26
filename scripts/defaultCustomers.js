const Customer = require('../src/models/Customer');
const customersData = require('../data/defaultCustomers.json');
const connectToDatabase = require('../config/database');

async function initializeCustomers() {
    try {
        const count = await Customer.countDocuments();

        if (count < 1) {
            await Customer.insertMany(customersData); // Inserta los datos de los clientes
            console.log('Datos de clientes inicializados correctamente.');
        }
    } catch (error) {
        console.error('Error al inicializar datos en la tabla Customer:', error);
    }
}

module.exports = initializeCustomers;
