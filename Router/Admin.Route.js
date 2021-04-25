const AdminController = require("../controller/Admin.Controller");

const Router = require("express").Router();

Router.post("/addClub", AdminController.addClub);
Router.post("/addLeague", AdminController.addLeague);
Router.post("/addNews", AdminController.addNews);
Router.post("/addScore", AdminController.addScore);
Router.post("/editNews", AdminController.editNews);

module.exports = Router;
