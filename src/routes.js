const express = require("express");
const routes = express.Router();

const User = require("./app/controllers/UserControllers");
const Perguntas  = require("./app/controllers/PerguntasControllers");
const Respostas = require("./app/controllers/RespostasControllers")

const middleware = require("./app/middleware/auth")

//rotas usuarios

routes.get("/user" , User.listar)
routes.post("/user" , User.create);
routes.post("/user/login" , User.login);


//Autenticação do Token
routes.use(middleware);
routes.get("/" , User.toke);

//Rotas Perguntas 
routes.get("/perguntas" , Perguntas.index)
routes.post("/create" , Perguntas.create);

//Respostas

routes.get("/respostas" , Respostas.index);
routes.post("/respostas" , Respostas.create);



module.exports = routes