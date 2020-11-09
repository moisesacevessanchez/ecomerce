const success = (req, res, data, status, render) => {
    if (!render) {
        res.status(status || 200).send({
            error: "",
            body: data
        })
    } else {
        res.status(status || 200).render(`${render}.pug`, {
            error: "",
            body: data
        })
    }
}
const error = (req, res, data, status, render) => {
    if (!render) {
        res.status(status || 400).send({
            error: data,
            body: ""
        })
    } else {
        res.status(status || 400).render(`${render}.pug`, {
            error: data,
            body: ""
        })
    }
}

module.exports = {
    success,
    error
}