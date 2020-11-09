const moment = require('moment');
const { saveProduct, readProduct, borrarProduct, actualizarProduct } = require('./store');
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
        const result = readProduct(filter)
        if (result.length === 0) {
            resolve("Esta DB no contiene Productos")
        }
        resolve(result)
    });
}

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Falta id para borrar")
        }
        resolve(borrarProduct(id))
    });
}

const putProduct = (id, tag, value) => {
    return new Promise((resolve, reject) => {
        let update = {}
        if (!id || !tag || !value) {
            reject("Faltan datos")
        }
        switch (tag) {
            case "name":
                update = { name: value }
                break;
            case "brand":
                update = { brand: value }
                break;
            case "description":
                update = { description: value }
                break;
            case "size":
                update = { size: value }
                break;
            case "price":
                update = { price: value }
                break;
            case "stock":
                update = { stock: value }
                break;
            case "image":
                update = { image: value }
                break;
            default:
                reject("No se reconece el tag")
                break;
        }
        resolve(actualizarProduct(id, update))
    });
}

module.exports = {
    postProduct,
    getProduct,
    deleteProduct,
    putProduct
}