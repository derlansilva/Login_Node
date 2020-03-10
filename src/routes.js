const express = require("express");
const routes = express.Router();

const User = require("./controllers/UserControllers");
const middleware = require("./middleware/auth")

//rotas usuarios

routes.get("/user" , User.listar)
routes.post("/user" , User.create);
routes.post("/user/login" , User.login);

routes.use(middleware);
routes.get("/" , User.toke);


module.exports = routes