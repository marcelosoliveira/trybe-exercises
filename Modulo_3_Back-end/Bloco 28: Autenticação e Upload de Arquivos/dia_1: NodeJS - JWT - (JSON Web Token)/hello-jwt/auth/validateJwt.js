require('dotenv/config');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { SECRET_PASS } = process.env;

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ error: "Token não encontrado!" });

    try {
        const decoded = jwt.verify(authorization, SECRET_PASS);

        const user = await User.findUser(decoded.username);

        if (!user) return res.status(401).json({ 
            message: "Erro ao procurar o usuário do token"
        });

        if(req.path === '/top-secret' && decoded.admin === false)
            res.status(403).json({
                "error": {
                  "message": "Restricted access"
                }
            });

        if (req.path === '/top-secret' && decoded.admin)
            res.status(200).json(await User.findAll());

    req.user = user;

    next();
    } catch (error) {
        res.status(500).json({ Error: error.message });        
    }
}
