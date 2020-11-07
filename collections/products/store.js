const model = require('./model');

const saveProduct = async(product) => {
    const result = new model(product)
    await result.save()
    return result
}
const readProduct = async(filter) => {
    let filtered = {}
    if (filter !== null) {
        filtered = { name: filter }
    }
    const result = await model.find(filtered)
    return result
}

const borrarProduct = async(id) => {
    const result = await model.findByIdAndRemove(id)
    return result
}

const actualizarProduct = async(id, update) => {
    const result = await model.findByIdAndUpdate(id, update)
    return result
}

module.exports = {
    saveProduct,
    readProduct,
    borrarProduct,
    actualizarProduct
}