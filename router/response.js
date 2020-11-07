const success = (req, res, data, status, render) => {
    if (render) {
        res.status(status || 200).render(render, {
            error: "",
            body: data
        })
    }
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