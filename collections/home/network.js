const express = require('express');
const router = express.Router()
const { success, error } = require('../../router/response');

router.get('/', (req, res) => {
    const name = req.query.name
    success(req, res, name, 200, "home")
})

module.exports = router