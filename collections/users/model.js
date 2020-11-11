const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mySchema = new Schema({
    name: { type: String, required: true },
    app: { type: String, required: true },
    apm: { type: String, required: true },
    mail: { type: String, required: true },
    pass: { type: String, required: true },
    birthDay: { type: String, required: true },
})

const Model = mongoose.model('Users', mySchema);

module.exports = Model