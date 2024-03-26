const Customer = require('../src/models/Customer');
const Brand = require('../src/models/Brand');
const SpecialPrice = require('../src/models/SpecialPrice');
const specialPricesData = require('../data/defaultSpecialPrices.json');

async function initializeSpecialPrices() {
    try {
        const count = await SpecialPrice.countDocuments(); 

        if (count < 1) {
            for (const specialPriceData of specialPricesData) {
                const customer = await Customer.findOne({ identification: specialPriceData.customer });
                const brand = await Brand.findOne({ name: specialPriceData.brand });

                if (!customer || !brand) {
                    console.error(`No se pudo encontrar el cliente o la marca para los datos de descuento especial: ${JSON.stringify(specialPriceData)}`);
                    continue;
                }

                const newSpecialPrice = new SpecialPrice({
                    customer: customer._id,
                    brand: brand._id,
                    discount: specialPriceData.discount
                });

                await newSpecialPrice.save();
            }

            console.log('Datos de descuento especial inicializados correctamente.');
        }
    } catch (error) {
        console.error('Error al inicializar los datos de descuento especial:', error);
    }
}

module.exports = initializeSpecialPrices;