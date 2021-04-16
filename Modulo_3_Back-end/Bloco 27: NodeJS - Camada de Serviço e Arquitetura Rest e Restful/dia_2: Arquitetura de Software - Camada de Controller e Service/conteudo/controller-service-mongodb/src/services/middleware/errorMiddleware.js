const errorMiddleware = (err, req, res, next) => {
    if (err) {
        res.status(500).send({ error: `Something is wrong! Error: ${ err.message }`});
    }

    next();
}

module.exports = errorMiddleware;
