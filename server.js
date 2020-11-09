const express = require('express')
const router = require('./router/router');
const db = require('mongoose');
const bodyParser = require('body-Parser');
const app = express()
const { config } = require('./config/index');

//mongoose
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}${config.dbHost}${config.dbName}?retryWrites=true&w=majority`

//midelwares
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//router
router(app)

//view engine pug
app.set("view engine", "pug")
app.set("views", "views")

server = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${server.address().port}`)
    db.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    console.log("Conectado a DB");
})