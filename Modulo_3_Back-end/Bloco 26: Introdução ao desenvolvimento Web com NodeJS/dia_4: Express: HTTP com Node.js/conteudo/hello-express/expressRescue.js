// Sem usar o express-rescue

const fs = require('fs').promises; // este é um módulo do pacote fs que nos permite usa funções que retornam promises, assim podemos usar ele com async/await como visto abaixo.

app.get('/:fileName', async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
});

// Usando express-rescue

const rescue = require('express-rescue');
// const fs = require('fs').promises;

app.get('/:fileName', rescue(async (req, res) => {
//   const file = await fs.readFile(`./${req.params.fileName}`);
     res.send(file.toString('utf-8'))
}));

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
})