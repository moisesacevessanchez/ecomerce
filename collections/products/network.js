const express = require('express');
const router = express.Router()
const { postProduct, getProduct, deleteProduct, putProduct } = require("./controller")
const { success, error } = require("../../router/response")

router.post('/', (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const size = req.body.size
    const brand = req.body.brand
    const price = req.body.price
    const image = req.body.image
    const stock = req.body.stock
    postProduct(name, description, size, brand, price, image, stock)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.get("/", (req, res) => {
    let name = req.query.name || null
    getProduct(name)
        .then(data => {
            success(req, res, data, 200, "products")
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.delete("/:id", (req, res) => {
    let { id } = req.params
    deleteProduct(id)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

router.put("/", (req, res) => {
    let { id, tag, value } = req.query

    // let name = req.query.name || null
    // let brand = req.query.brand || null
    // let description = req.query.description || null
    // let size = req.query.size || null
    // let price = req.query.price || null
    // let stock = req.query.stock || null
    // let image = req.query.image || null
    putProduct(id, tag, value)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400)
        })
})

module.exports = router