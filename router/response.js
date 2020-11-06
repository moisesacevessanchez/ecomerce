const success = (req, res, data, status) => {
    res.status(status || 200).send({
        error: "",
        body: data
    })
}
const error = (req, res, data, status) => {
    res.status(status || 400).send({
        error: data,
        body: ""
    })
}

module.exports = {
    success,
    error
}