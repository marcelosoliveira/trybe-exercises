// userModel.js

const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}

// cli.js

const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();


// getUserMiddleware.js

const userModel = require('./userModel');

function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await useModel.getUser(username);

    if (!user) {
        res.status(404).json({ message: 'user não encontrado' });
    }

    return res.status(200).jon(user);
}