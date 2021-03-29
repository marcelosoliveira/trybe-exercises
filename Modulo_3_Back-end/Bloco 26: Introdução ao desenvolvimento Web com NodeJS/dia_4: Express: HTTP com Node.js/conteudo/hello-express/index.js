const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


//const express = require('express');
/* Chama a função express para instanciar a aplicação do framework
   e armazenar na variável app para ser utilizada no código */
//const app = express();

/* Ouve por requisições, utilizando o método GET, no caminho '/' */
//app.get('/', function (req, res) {
  /* Retorna a resposta */
  //res.send('Hello World!');
//});

/* Ouve a porta 3000 */
//app.listen(3000, function () {
  //console.log('Example app listening on port 3000!');
//});

/* const express = require('express');
const app = express(); */

/* Rota com caminho '/', utilizando o método GET */
/* app.get('/', function (req, res) {
  res.send('hello world');
}); */

/* Rota com caminho '/', utilizando o método POST */
/* app.post('/', function (req, res) {
  res.send('hello world');
}); */

/* Rota com caminho '/' para qualquer método HTTP */
/* app.all('/', function (req, res) {
  res.send('hello world');
}); */

/* Ou podemos encadear as requisições para evitar repetir o caminho */
/* app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */

app.get(
    '/ping',
    function (req, res, next) {
      console.log('fiz alguma coisa');
      /* Chama a próxima callback */
      next();
    },
    function (req, res) {
      /* A segunda (e última) callback envia a resposta para o cliente */
      res.send('pong!');
    }
  );
  

/*   const express = require('express');
const app = express(); */

/* :id vira um atributo dentro do objeto params,
   que por sua vez está dentro do objeto req */
app.get('/api/people/:id', function (req, res) {
  res.send(req.params.id);
});

/* app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */


/* const express = require('express');
const app = express(); */

/* Qualquer rota que tem o padrão de terminar com "be".
   Exemplo: trybe, wannabe, letitbe */
app.get(/.*be$/, function (req, res) {
  res.send('/.*be$/');
});

/* app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */


/* const express = require('express');
const app = express(); */

app.get('/hello', (req, res) => {
  const name = req.query.name;
  const number = req.query.number;

  res.status(200)
    .json({ message: `Hello, ${name} aluno ${number} da Trybe.` });
})
/* app.listen(3000, () => console.log('rodando na clássica 3000')); */

/* const express = require('express');
const app = express(); */
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/bodyparser', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
})
/* 
app.listen(3000, () => console.log('rodando na clássica 3000')); */


/* const express = require('express');
const app = express(); */

/* app.use é utilizado para registrar um middleware */
/* Nesse caso, toda vez que um request for recebido, vamos logar o método HTTP e o caminho */
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path}`)
  /* Termina a operação no middleware e chama o próximo middleware ou rota */
  next();
});

app.get('/middleware1', function (req, res) {
  res.send('Hello World!');
});


/* const express = require('express');
const app = express(); */

const requestTimeMiddleware = function (req, res, next) {
  /* Modificamos o objeto req, adicionando o campo requestTime */
  req.requestTime = Date.now();
  /* Chamamos a próxima função */
  next();
};

/* Registramos nosso middleware */
app.use(requestTimeMiddleware);

app.get('/middleware2', function (req, res) {
  const responseText = `Request feito às ${req.requestTime}`;
  res.send(responseText);
});

/* app.listen(3000); */


const simpsons = require('./simpsons');

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);


/* const app = require('express')();

const logRouteIdMiddleware = (req, res, next) => {
  console.log('ID:', req.params.id);
  next();
}

app.get('/simpsons/people/:id', logRouteIdMiddleware, (req, res) => {
  res.send('Hello, Homer!');
});
app.listen(3000); */


// index.js
/* const app = require('express')(); */
const router = require('./simpsons')
/* Aqui importamos o router e usamos o roteamento, definido no último arquivo, apenas nas requisições que começem com '.../simpsons' */

app.use('/simpsons1', router);

/* app.listen(3000, () => console.log('ouvindo na porta 3000')); */