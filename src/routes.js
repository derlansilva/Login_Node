const express = require("express");
const routes = express.Router();

const User = require("./controllers/UserControllers");

//rotas usuarios

routes.get("/user" , User.listar)
routes.post("/user" , User.create);
routes.post("/user/login" , User.login);

module.exports = routes