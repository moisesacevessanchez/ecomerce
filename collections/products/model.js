const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: String, required: true },
    date: { type: String, required: true }
})

const Model = mongoose.model('Products', mySchema);

module.exports = Model