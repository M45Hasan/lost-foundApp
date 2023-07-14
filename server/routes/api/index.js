const express = require("express");
const _ = express.Router();
const { postController, loginController } = require("../../controller/regiCon");

_.post("/regi", postController);
_.post("/login", loginController);

module.exports = _;
