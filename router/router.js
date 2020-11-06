const products = require('../collections/products/network');

const routes = (server) => {
    server.use("/products", products)
}

module.exports = routes