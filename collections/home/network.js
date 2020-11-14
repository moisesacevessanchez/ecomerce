const express = require('express');
const router = express.Router()
const { success, error } = require('../../router/response');

router.post('/', (req, res) => {
    const mail = req.query.mail
    success(req, res, mail, 200)
})

module.exports = router