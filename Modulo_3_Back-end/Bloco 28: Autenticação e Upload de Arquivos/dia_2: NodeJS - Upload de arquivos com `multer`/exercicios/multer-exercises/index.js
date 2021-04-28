require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() +"-"+ file.originalname);
  }
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;

    return callback(null, false);
  }

  const files = fs.readdirSync(`${__dirname}/uploads`);
  const fileExist = files.some((f) => f.includes(file.originalname));

  if (fileExist) {
    req.fileExistValidation = true;

    callback(null, false);
  }

  return callback(null, true);
}

const upload = multer({ fileFilter, storage });

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), (req, res) => {

  if (req.fileValidationError) return res.status(403).send(
    { error: { message: "Extension must be `png`" } });
  
  if (req.fileExistValidation) return res.status(403).send(
    { error: { message: "File already exists" } });

  res.status(200).send({ file: req.file });
});

const multiStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const multiUpload = multer({ storage: multiStorage })

app.post('/multiple', multiUpload.array('file'), (req, res) => {
  const { files } = req;
  res.status(200).json(files.map((file) => ({
    file: file.originalname, url: `http://localhost:3000/${file.filename}`
  })));
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
