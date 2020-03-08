const express = require("express");
const routes = express.Router();

const Products = require("./controllers/ProductsControllers");
const User = require("./controllers/UserControllers");

routes.get("/" , Products.index)
routes.get("/:id" , Products.show);
routes.post("/create" , Products.store);
routes.put("/:id" , Products.update);

//rotas usuarios

routes.get("/user" , User.listar)
routes.post("/user" , User.create);
routes.post("/user/login" , User.login);

module.exports = routes