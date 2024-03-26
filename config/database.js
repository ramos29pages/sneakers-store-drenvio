const mongoose = require('mongoose');
const Product = require('../src/models/Product');
const SpecialPrice = require('../src/models/SpecialPrice');
const Customer = require('../src/models/Customer');
const Brand = require('../src/models/Brand');
const config = require('./config');

async function connectToDatabase() {
    const { user, password, url, dbname } = config.db;

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user,
            pass: password
        });

        console.log(`Conectado a la base de datos MongoDB ${dbname}.`);

        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionsNames = collections.map(collection => collection.name);

        if (!collectionsNames.includes('ramosdev-customers')) {
            await Customer.createCollection();
            console.log('La colección ramosdev-Customer ha sido creada.');
        }

        if (!collectionsNames.includes('ramosdev-brands')) {
            await Brand.createCollection();
            console.log('La colección ramosdev-brands ha sido creada.');
        }

        if (!collectionsNames.includes('ramosdev-specialprices')) {
            await SpecialPrice.createCollection();
            console.log('La colección ramosdev-specialprices ha sido creada.');
        }

        if (!collectionsNames.includes('ramosdev-products')) {
            await Product.createCollection();
            console.log('La colección ramosdev-products ha sido creada.');
        }

    } catch (error) {
        console.error('Error al conectar a la base de datos => ', error);
        throw error;
    }
}

module.exports = connectToDatabase;

