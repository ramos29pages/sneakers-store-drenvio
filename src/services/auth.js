const jwt = require('jsonwebtoken');
const config = require('../../config/config');

async function authorization(req, res, next) {
  const tenantId = req.headers['x-tenant-id'];
  if (tenantId === config.jwt_key) {
    const token = jwt.sign({ user: config.jwt_key }, config.jwt_key , { expiresIn: '1h' });
    req.token = token; 
    next(); 
  } else {
    res.sendStatus(401);
  }
}

module.exports = authorization;
