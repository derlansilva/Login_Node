const express = require("express");
const routes = express.Router();

const Products = require("./controllers/ProductsControllers");

routes.get("/" , Products.index)
routes.get("/:id" , Products.show);
routes.post("/create" , Products.store);
routes.put("/:id" , Products.update);

module.exports = routes