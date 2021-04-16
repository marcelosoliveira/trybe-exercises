const attributeMiddleware = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password || password.length < 6)
    return res.status(400).send({
        error: true,
        message: `Os campos não podem ser ${ undefined } e 'password' deve ter pelo menos 6 caracteres`,
    });

    next();
}

module.exports = attributeMiddleware;
