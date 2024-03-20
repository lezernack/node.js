const myController = require("../controllers");
const routes = require("express").Router();
const route = require("express").Router();

routes.get("/", myController.awesomeFunction);
route.get("/ttech", myController.ttech);

module.exports = routes;
