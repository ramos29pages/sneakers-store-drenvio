const express = require('express');
const app = express();
const morgan = require('morgan');
const connectToDatabase = require('./config/database');
const { port } = require('./config/config');
const { authorization } = require('./src/services/auth');
const initializeAllData = require('./scripts/dataInitializer');
const productRoutes = require('./src/routes/productRoutes');
const pricesRoutes = require('./src/routes/pricesRoutes');

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(productRoutes);
app.use(pricesRoutes);
app.get('*', (req, res)=>{
  res.status(204).json();
});

app.listen(port, () => {
  console.log(`Servidor iniciado correctamente en el puerto [${port}]`);
  initializeAllData();
});

