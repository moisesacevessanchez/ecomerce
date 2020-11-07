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
    const result = await model.findOne({ _id: id });
    result.remove()
    return result

}

module.exports = {
    saveProduct,
    readProduct,
    borrarProduct
}