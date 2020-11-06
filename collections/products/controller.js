const moment = require('moment');
const store = require('./store');
const postProduct = (name, description, size, brand, price, image, stock) => {
    return new Promise((resolve, reject) => {
        if (!name || !description || !size || !brand || !price || !image || !stock) {
            reject("Los datos estan incompletos")
        }
        const fullProducct = {
            name,
            description,
            size,
            brand,
            price,
            image,
            stock,
            date: moment().format("LLLL"),
        }

        resolve(fullProducct)
    });
}

module.exports = {
    postProduct,
}