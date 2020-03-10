const express = require("express");
const routes = express.Router();

const User = require("./app/controllers/UserControllers");
const middleware = require("./app/middleware/auth")

//rotas usuarios

routes.get("/user" , User.listar)
routes.post("/user" , User.create);
routes.post("/user/login" , User.login);


//Autenticação do Token
routes.use(middleware);
routes.get("/" , User.toke);


module.exports = routes