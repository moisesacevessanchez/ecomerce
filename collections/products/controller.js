const moment = require('moment');
const { saveProduct, readProduct, borrarProduct } = require('./store');
const postProduct = (name, description, size, brand, price, image, stock) => {
    return new Promise((resolve, reject) => {
        if (!name || !description || !size || !brand || !price || !image || !stock) {
            reject("Los datos estan incompletos")
        }
        const fullProducct = {
            name,
            brand,
            description,
            size,
            price,
            stock,
            image,
            date: moment().format("LLLL"),
        }
        resolve(saveProduct(fullProducct))
    });
}

const getProduct = (filter) => {
    return new Promise((resolve, reject) => {
        resolve(readProduct(filter))
    });
}

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        //resolve(id)
        resolve(borrarProduct(id))
    });
}

module.exports = {
    postProduct,
    getProduct,
    deleteProduct
}