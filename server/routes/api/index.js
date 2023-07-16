const express = require("express");
const _ = express.Router();
const Userinfo = require("../../model/regiModel");

const path = require("path");
const app = express();

const { postController, loginController,profielPic } = require("../../controller/regiCon");





_.post("/regi", postController);
_.post("/login", loginController);
_.post("/profile", profielPic);


module.exports = _;
