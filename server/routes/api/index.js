const express = require("express");
const _ = express.Router();
const Userinfo = require("../../model/regiModel");
const path = require("path");
const app = express();
const {
  postController,
  loginController,
  profielPic,
  getUserImg,
  uploadItem,
  uploadItemImg,
} = require("../../controller/regiCon");

_.post("/regi", postController);
_.post("/login", loginController);
_.post("/profile", profielPic);
_.post("/userImg", getUserImg);
_.post("/itemupload", uploadItem);
_.post("/itemImg", uploadItemImg);

module.exports = _;
