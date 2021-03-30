const express = require('express');

const generateToken = require('./generateToken');

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password, firstName, phone } = req.body;
    if ( !email || !password || !firstName || !phone ) return res.status(400)
    .json({ message: "Data not found!"});

    const newToken = generateToken();
    return res.status(200).json({ token: newToken });
});


router.use((err, req, res, next) => {
    res.status(500).json(`Something is wrong! Error: ${ err.message }`);
});

module.exports = router;
