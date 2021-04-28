require('dotenv/config');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null,  Date() +"-"+ file.originalname);
    },
    /*filename: (req, file, callback) => {
        callback(null, file.originalname
            .substr(0, file.originalname.length - 4) +"-"+ Date());
    },*/
});

const upload = multer({ storage });

app.get('/ping', (req, res) => {
    res.status(200).send({ message: 'Pong'});
});

app.post('/uploads', upload.single('file'), (req, res) => {
    res.status(200).send({ body: req.body, file: req.file });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is Wrong! ERROR: ${ err.message } `});
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
