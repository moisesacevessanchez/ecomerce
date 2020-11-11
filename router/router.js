const products = require('../collections/products/network');
const home = require('../collections/home/network');
const login = require('../collections/login/network');
const redirect = require('../collections/redirect/network');
const users = require('../collections/users/network');


const routes = (server) => {
    server.use("/", redirect)
    server.use("/login", login)
    server.use("/products", products)
    server.use("/users", users)
    server.use("/home", home)
}

module.exports = routes