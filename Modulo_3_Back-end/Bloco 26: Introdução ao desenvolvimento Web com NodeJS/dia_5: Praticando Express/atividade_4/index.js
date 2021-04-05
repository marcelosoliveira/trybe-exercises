const express = require('express');
const data = require('./data/user')

const app = express();
const PORT = 3000;

app.get('/user', (req, res) => {
    res.status(200).json({data});
})

app.use('/user/:name', (req, res) => {
    const { name } = req.params;

    const user = data.some((d) => d.user === name);
    if(!user) return res.status(404).send({ message: "user not found" });
    
    const findUser = data.find((d) => d.user === name);    
    return res.status(200).send({ comentários: findUser.comments });
});

app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found" });
})

app.use((err, req, res, next) => {
    res.status(500).send({
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`)
});