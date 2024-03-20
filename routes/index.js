const myController = require("../controllers");
const routes = require("express").Router();
const route = require("express").Router();

routes.get("/", myController.awesomeFunction);
route.get("/", myController.ttechFunction);

module.exports = routes;
module.exports = route;
