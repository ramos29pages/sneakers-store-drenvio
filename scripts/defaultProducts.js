const Brand = require('../src/models/Brand');
const Product = require('../src/models/Product');
const products = require('../data/defaultProducts.json');

async function initializeProducts() {

    const count = await Product.countDocuments(); 

    if(count < 1){
        try {
            for (const product of products) {
                const brand = await Brand.findOne({ name: product.brand });
                if (!brand) {
                    console.error(`No se pudo encontrar la marca para los datos del producto: ${JSON.stringify(product)}`);
                    continue;
                }
                const newProduct = new Product({
                    name: product.name,
                    inStock: product.inStock,
                    basePrice: product.basePrice,
                    brand: brand
                });
                await newProduct.save();
            }
    
            console.log('Datos de Productos inicializados correctamente.');
        } catch (error) {
            console.error('Error al inicializar los datos de Producto:', error);
        }
    }
}

module.exports = initializeProducts;