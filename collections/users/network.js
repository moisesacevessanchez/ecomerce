const express = require('express');
const router = express.Router()
const { postUser, getUser, deleteUser, putUser } = require("./controller")
const { success, error } = require("../../router/response")

router.post('/', (req, res) => {
    const name = req.body.name
    const app = req.body.app
    const apm = req.body.apm
    const mail = req.body.mail
    const pass = req.body.pass
    const birthDay = req.body.birthDay
    postUser(name, app, apm, mail, pass, birthDay)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.get("/", (req, res) => {
    let name = req.query.name || null
    getUser(name)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.delete("/:id", (req, res) => {
    let { id } = req.params
    deleteUser(id)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.put("/", (req, res) => {
    let { id, tag, value } = req.query
    putUser(id, tag, value)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

module.exports = router