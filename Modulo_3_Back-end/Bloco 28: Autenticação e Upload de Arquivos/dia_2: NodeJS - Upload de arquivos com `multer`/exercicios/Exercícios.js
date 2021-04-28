Exercício 1
Crie o endpoint POST /upload
1 - O endpoint deve receber apenas um arquivo no campo file ;
2 - O arquivo deve ser armazenado na pasta uploads ;
3 - O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo. Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png , já que o timestamp será diferente a cada vez.
4 - Retorne status 200 OK se der tudo certo.
Resolução
Vamos criar nosso controller controllers/upload.js .

const upload = (req, res) => {
}
module.exports = upload;
Agora vamos adicionar o novo controller no index.js da pasta controllers.

// const ping = require('./ping');
const upload = require('./upload')

// module.exports = {
//   ping,
  upload
// };
Adicione o endpoint POST /upload no seu index.js, passando o controller de upload.

  //app.get('/ping', controllers.ping);
  app.post('/upload', controllers.upload);
Importe o multer em seu arquivo index.js e logo após faça a configuração do multer e o storage de acordo com o que foi pedido.

const multer = require('multer');
//...

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads') },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`) }
})

const upload = multer({ storage });
//app.get('/ping', controllers.ping);
//app.post('/upload', controllers.upload);
O destination é a pasta onde vamos guardar os arquivos e o filename e a forma que usamos para alterar o nome do arquivo na hora de salvar. Não esqueça de criar a pasta uploads no seu projeto
Agora que configuramos o multer vamos adicionar o middleware dele em nosso endpoint de upload.

  //app.get('/ping', controllers.ping);
  app.post('/upload', upload.single('file'),controllers.upload);
Como é apenas um arquivo, vamos usar o single.
Configurar o retorno de nosso controller controllers/upload.js para retornar status code 200 OK

  //const upload = (req, res) => {
    return res.send()
//}
//module.exports = upload;
Exercício 2
Altere o endpoint POST /upload para que atenda o seguinte critério:
1 - Apenas aceite arquivos cuja extensão seja .png ; Caso o arquivo tenha outro tipo de extensão, retorne o status 403 Forbidden com o JSON a seguir:

  {
      "error": { "message": "Extension must be `png`" }
  }
2 - Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads . Caso o arquivo já exista, retorne o status 409 Conflict com o seguinte JSON:

  {
      "error": { "mesage": "File already exists" }
  }
Resolução
Para resolver o problema, usaremos o fileFilter do multer, então dentro do nosso index.js vamos criar uma função chamada fileFilter . Se quiser saber um pouco mais sobre, da uma olhada na documentação do multer . Primeiro vamos resolver o problema da extensão do arquivo:

const fileFilter = (req, file, cb) => {

  if (file.mimetype !== 'image/png') {
    //Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;

    //Regeitar o arquivo
    return cb(null, false);
  }

  //Aceitar o arquivo
  cb(null, true);
}
Aqui vamos fazer a verificação se o arquivo tem a extensão png , se for a requisição segue normalmente, e o upload é feito, se o arquivo não for png, cancelamos o upload, e dentro do noss request colocamos uma flag fileValidationError= true , e esse valor usaremos lá no controller.
Agora precisamos alterar o controller para retornar erro quando a extensão do arquivo for inválida.

// const upload = (req, res) => {
    if (req.fileValidationError)
        return res.status(403).send({ error: { message: "Extension must be `png`" } });
//     return res.send();
// }

// module.exports = upload;
Para resolver o problema do arquivo duplicado primeiro vamos criar uma função responsável por fazer essa validação, nela teremos de entrada o nome do arquivo, e de saída um boolean informando se o arquivo já existe ou não. Chamarei essa função de fileExists , e para facilitar a explicação deixarei ela no index.js , mas ela poderia ser um service.

//Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório.
const fs = require('fs')

const fileExists = (fileName) => {
  //fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/uploads`);
  //Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some(file => file.includes(fileName));
}
Agora que criamos a verificação se o arquivo já existe, vamos para o fileFilter validar o nome do arquivo. Se ele já existir, cancelamos o upload, e colocamos uma outra flag no nosso req , chamaremos de fileDuplicated .

// const fileFilter = (req, file, cb) => {

  // if (file.mimetype !== 'image/png') {
  //   //Colocar uma flag de erro na requisição
  //   req.fileValidationError = true;

  //   //Regeitar o arquivo
  //   return cb(null, false);
  // }

  if (fileExists(file.originalname)) {
    //Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    //Regeitar o arquivo
    return cb(null, false);
  }

  // //Aceitar o arquivo
  // cb(null, true);
// }
Agora para fechar a solução, vamos para o nosso controller, validar a nova pissível flag fileDuplicated , e caso o arquivo seja duplicado vamos retornar 409 Conflict .

// const upload = (req, res) => {
    if (req.fileDuplicated)
        return res.status(409).send({ error: { mesage: "File already exists" } })

    // if (req.fileValidationError)
    //     return res.status(403).send({ error: { message: "Extension must be `png`" } });
    // return res.send();
// }

// module.exports = upload;
Exercício 3
Torne a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.
Resolução
No seu index.js , use a configuração do express.statatic na pasta uploads

//...
app.use(express.static(`${__dirname}/uploads`));
// app.use(middlewares.error);

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });
Bônus
Exercício 1
Crie o endpoint POST /multiple
1 - Permita o upload de vários arquivos através do campo files ;
2 - Salve cada arquivo na pasta /uploads com um nome aleatório, que será gerado pelo multer ;
3 - Retorne uma lista dos arquivos enviados juntamente com a URL pela qual cada um está acessível. Exemplo:

[
    { "file": "meuArquivo.txt", "url": "http://localhost:3000/c3f20f8a1a72729883b88a96f405bbd0" },
    { "file": "arquivo1.png", "url": "http://localhost:3000/7c76b101fd872f7fc12705eeba2ddd1c" },
    { "file": "profile.jpg", "url": "http://localhost:3000/0ec57a65a9522aa14f9405060089c6f5" },
    { "file": "tcc.docx", "url": "http://localhost:3000/a7de65196a12ce1c53e8e76927099f12" },
    { "file": "CNH.jpg", "url": "http://localhost:3000/78c948b7b737d9a80b13f52bc6968d75" }
]
Resolução
Vamos criar a base do nosso controller, chamaremos de controllers/multiple.js

const multiple = (req, res) => {
}
module.exports = multiple;
Agora vamos adicionar o novo controller no index.js da pasta controllers.

// const ping = require('./ping');
// const upload = require('./upload')
const multiple = require('./multiple');
// module.exports = {
//  ping,
//  upload,
    multiple
// };
Adicione o endpoint POST /upload no seu index.js, passando o controller de upload.

  //app.get('/ping', controllers.ping);
  //app.post('/upload', controllers.upload);
  app.post('/multiple', controllers.multiple);
Agora que temos o controller pronto, vamos configurar um novo multer, agora ele não vai mudar o nome dos arquivos, e também não vai validar existência e extensão. Essa criação sera feita no index.js .

//...
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => { callback(null, 'uploads') },
//   filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`) },
// })

// const upload = multer({ storage, fileFilter });

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads') }})

const multiUpload = multer({ storage: defaultStorage })
Na nossa rota vamos adicionar o middleware do multer. E agora a forma de usar o multer muda um pouco, vamos usar o multiUpload.array

// app.get('/ping', controllers.ping);
// app.post('/upload', upload.single('file'), controllers.upload);
app.post('/multiple', multiUpload.array('files'), controllers.multiple);
Voltando para o nosso controller, agora temos as informações sobre todos os arquivos no req.files , com essas informações nas mãos, vamos formatar de acordo com a saída pedida. Se quiser saber todas as propriedades que tem em cada arquivo, coloca um console.log(req.files); no controller para ter mais detalhes.

// const multiple = (req, res) => {
    const uploadedFiles = req.files.map((file) => ({
        file: file.originalname,
        url: `http://localhost:3000/${file.path}`,
    }));

    return res.send(uploadedFiles);
// };

// module.exports = multiple;
Exercício 2
Crie o endpoint POST /profile
1 - Receba strings nos campos name , email , password e bio ;
2 - Receba um arquivo no campo profilePic ;
3 - Armazene o arquivo recebido na pasta /profilePics com o nome aleatório do multer ;
4 - Utilize o nome gerado pelo multer como ID para o perfil criado;
5 - Armazene as informações do perfil no arquivo profiles.json
Resolução
Crie e configura seu controller POST controllers/profile.js igual os exercícios passados.
Configure o middleware do multer em seu endpoint, importante, ele deve ler arquivo no campo profilePic e salvar no diretório profilePics . Aqui vamos montar de uma forma diferente, apenas para exemplo.

//
app.post('/profile', multer({ dest: 'profilePics' }).single('profilePic'), controllers.profile);
Crie a pasta profilePics na raiz do seu projeto.
Crie o arquivo profiles.json no diretório do seu projeto, e dentro coloque apenas um array vazio.

[]
Com a base criada, vamos para o controller implementar a lógica de criar o profile. Primeiro passo é criar o objeto que iremos salvar no json. Para obter os outros dados que vem pelo form data, basta acessar pelo req.body e as informações do arquivo pelo req.file .

const profile = (req, res) => {
    const { name, email, passowrd, bio } = req.body;

    const profileDate = {
        id: req.file.filename,
        name,
        email,
        passowrd,
        bio,
    };
};

module.exports = profile;
Vamos ler as informações do arquivo profile.json , vamos adicionar o novo profile dentro, e logo após vamos salvar. Para facilitar a vida vou criar duas funções, getProfileData e saveProfileData . Não esqueça de importar o modulo fs para trabalhar com arquivos.

const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
    const fileText = fs.readFileSync(FILE_PATH);
    return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(profiles));
};
Agora vamos montar o perfil e salvar no arquivo

//const profile = (req, res) => {
    const { name, email, passowrd, bio } = req.body;

    const profileDate = {
        id: req.file.filename,
        name,
        email,
        passowrd,
        bio,
    };

    const profiles = getProfileData();
    profiles.push(profileDate);
    saveProfileData(profiles);
    return res.send({ profileDate });
//};
Exercício 3
Crie o endpoint GET /profiles/:id
1 - Caso exista um perfil com o id informado, retorne as informações desse perfil, conforme salvo no arquivo profiles.json
2 - Caso não exista um perfil com o id informado, retorne o status 404 Not Found com o seguinte corpo:

{
    "error": {
        "message": "Perfil não encontrado"
    }
}
Resolução
Primeiro passo é criar mais um endpoint GET /profiles/:id no nosso arquivo controllers/profile.js . Importante mudar a forma que exportamos o nosso controller, pois agora ele tem dois endpoints;

//const profile = (req, res) => {...};
const getProfile = (req, res) => {

};

module.exports = { profile, getProfile };
Agora vamos no nosso index.js do controller para ajustar o import do profile e adicionar o export do getProfile.

// const ping = require('./ping');
// const upload = require('./upload');
// const multiple = require('./multiple');
const { profile, getProfile } = require('./profile');

// module.exports = {
//   ping,
//   upload,
//   multiple,
//   profile,
  getProfile,
// };
E agora vamos no nosso index.js configurar a rota

//app.get('/ping', controllers.ping);
// app.post('/upload', upload.single('file'), controllers.upload);
// app.post('/multiple', multiUpload.array('files'), controllers.multiple);
// app.post('/profile', multer({ dest: 'profilePics' }).single('profilePic'), controllers.profile);
app.get('/profiles/:id', controllers.getProfile);
Voltamos para o nosso controller para obter o id do usuário e buscar na lista.

//const getProfile = (req, res) => {
    const profileId = req.params.id;
    const profiles = getProfileData();

    const profileResult = profiles.find((profile) => profile.id === profileId);
//};
Por fim teremos que configurar os retornos, se o perfil existir, retornamos 200 OK com o perfil, caso contrario, retornamos 404 Not Found

//const getProfile = (req, res) => {
//    const profileId = req.params.id;
//    const profiles = getProfileData();
//
    const profileResult = profiles.find((profile) => profile.id === profileId);

    if (profileResult) return res.send(profileResult);

    return res.status(404).send({ error: { message: 'Perfil não encontrado' } });
//};