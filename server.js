const express = require('express')
const router = require('./router/router');
const bodyParser = require('body-Parser');
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
router(app)

server = app.listen(port, () => console.log(`Listening on http://localhost:${server.address().port}`))