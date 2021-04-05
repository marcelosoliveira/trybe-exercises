const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization && authorization.length === 12) {
        return next();
    }
    return res.status(401).send({ message: "invalid token" });
}

module.exports = tokenValidation;
