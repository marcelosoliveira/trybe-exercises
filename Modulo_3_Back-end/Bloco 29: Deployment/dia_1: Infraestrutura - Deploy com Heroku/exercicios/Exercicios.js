Exercício 1 : Crie uma API simples que responda com "Está vivo!!!" utilizando express e faça o deploy no Heroku utilizando o CLI.
Resolução
Crie uma nova pasta para o projeto.
Inicialize o projeto com npm init . Adicione o script "start": "node index.js" ao seu pacakge.json . Ele deverá ficar parecido com esse:

{
  "name": "test-heroku",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
Inicialize um novo repositório git:

git init
git add .
git commit -m 'First commit'
Instale o express com o npm:

npm install express
Adicione um arquivo index.js na raiz do projeto. Ele deverá ser parecido com o abaixo:

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Escutando na porta ${port}`);
Inicialize o Heroku com o comando heroku create .
Crie um arquivo .gitignore na raiz do projeto com o conteúdo node_modules/ .
Commite as alterações:

git add .
git commit -m 'Install express and add index.js'
Publicar no Heroku

git push heroku master
Aguarde o deploy terminar e acesse o link exibido no terminal. Ao abri-lo no browser, deverá aparecer a mensagem Está vivo!!! .

Exercício 2 : Agora, modifique a API para responder uma nova mensagem:
Crie uma nova variável de ambiente com um texto qualquer;
Modifique o código da sua API para que ela responda com o texto contido na variável criada no passo anterior.
Resolução
Adicine a variável com o seguinte comando no terminal:

heroku config:set MESSAGE='Variáveis funcionam!!!' --app nome-do-seu-app-12345
Modifice o arquivo index.js como abaixo:

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port);
console.log(`Escutando na porta ${port}`);
Adicione e commite as alterações:

git add .
git commit -m "Adiciona mensagem de response por variável de ambiente"
Faça deploy das alterações:

git push heroku master
Após o deploy terminar, recarregue a página e deverá aparecer no navegador a mensagem Variáveis funcionam!!! .

Exercício 3 : Agora vamos criar um Procfile.
Crie uma cópia do arquivo index.js com o nome indexProcfile.js ;
No novo arquivo, altere a mensagem de resposta da API para "Procfile funciona mesmo!" ;
Crie um Procfile para startar sua aplicação a partir do novo arquivo de indexProcfile.js .
Resolução
Copie o arquivo index.js para um novo arquivo indexProcfile.js . No terminal, pode ser usado o comando cp index.js indexProcfile.js .
Altere o arquivo indexProcfile.js para algo como:

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (_req, res) => {
  res.send(message + ' E o Procfile também!!! =D');
});

app.listen(port);
console.log(`Escutando na porta ${port}`);
Crie um arquivo Procfile com o seguinte conteúdo: web: node indexProcfile.js
Adicione e commite as alterações:

git add .
git commit -m "Adiciona Procfile"
Faça deploy da nova versão com git push heroku master .
Abra no navegador após o build concluir. Deverá aparecer a mensagem: Variáveis funcionam!!! E o Procfile também!!! =D .

Exerício 4 . Simule o deploy em multi ambientes (produção e homolação). Para isso:
Renomeie o remote do deploy dos exercícios anteriores para homolog ;
Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod ;
Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
Resolução
Renomeie o remote padrão:

git remote rename heroku homolog
Criar um novo remote chamado prod

heroku create --remote prod
Altere a variável de ambiente de homolog para uma mensagem específica para o ambiente:

heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-HOMOLOG
Crie a variável de ambietne de prod com uma mensagem específica para o ambiente:

heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-PROD
Faça deploy do app de prod :

git push prod master
Abre no navegador os dois apps. Cada um vai exibir uma mensagem diferente, descrevendo qual ambiente está: homolog ou PROD .

Exercício 5 : Faça deploy de uma aplicação React.
Crie uma aplicação React utilizando create-react-app ;
Crie um novo app utilizando o buildpack mars/create-react-app;
Então, faça o deploy do app no Heroku.
Resolução
Com o create-react-app devidamente instalado, inicie um novo app:

npx create-react-app my-app
Entre na pasta do projeto. Se necessário, inicie o um novo repositório git e commite os arquivos. Enfim, crie um novo Heroku app :

cd my-app

# Só necessário se CRA não criar automaticamente um novo repositório
git init
git add .
git commit -m 'react-create-app on Heroku'

heroku create -b https://github.com/mars/create-react-app-buildpack.git
Publique o app

git push heroku master
