const validationEmailAndPassword = require('../validation/validationEmailAndPassword')
const tokenMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    if(validationEmailAndPassword(email, password)) {
        return res.status(401).send({ message: "email or password is incorrect." });
    }
    return next();
}

module.exports = tokenMiddleware;
