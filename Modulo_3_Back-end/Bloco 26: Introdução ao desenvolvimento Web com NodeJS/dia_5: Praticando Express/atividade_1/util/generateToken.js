const crypto = require('crypto');

const generateToken = () => {
    return crypto.randomBytes(6).toString('hex');    
}

module.exports = generateToken;
