const model = require('./model');

const saveUser = async(user) => {
    const result = new model(user)
    await result.save()
    return result
}
const readUser = async(filter) => {
    let filtered = {}
    if (filter !== null) {
        filtered = { app: filter }
    }
    const result = await model.find(filtered)
    return result
}

const borrarUser = async(id) => {
    const result = await model.findByIdAndRemove(id)
    return result
}

const actualizarUser = async(id, update) => {
    const result = await model.findByIdAndUpdate(id, update)
    return result
}

module.exports = {
    saveUser,
    readUser,
    borrarUser,
    actualizarUser
}