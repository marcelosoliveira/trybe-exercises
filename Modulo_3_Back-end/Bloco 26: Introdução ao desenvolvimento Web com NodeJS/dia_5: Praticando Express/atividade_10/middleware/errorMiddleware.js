const errorMiddleware = (err, req, res, next) => {
    res.status(500).send({ error: `Something is wrong! Error: ${err.message}`});
}

module.exports = errorMiddleware;
