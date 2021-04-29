const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).send({ message: 'Pong' });
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});