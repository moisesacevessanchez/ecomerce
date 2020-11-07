const express = require('express')
const router = require('./router/router');
const bodyParser = require('body-Parser');
const path = require('path');
const db = require('mongoose');
const app = express()
const port = 3000

app.set("view engine", "pug")
app.set("views", "views")

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
router(app)

server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${server.address().port}`)
    db.connect("mongodb+srv://moises:moises1981frasier@clases.uhn67.mongodb.net/ecomerce?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    console.log("Conectado a la tienda");
})