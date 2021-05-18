const express = require("express");
const app = express();
const controller = require("./resouces/plants/controller");

app.use(express.json());

app.use(controller);

app.listen(3001, function () {
  console.log("Ouvindo a porta 3001!");
});
