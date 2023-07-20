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
  getItemImg,
  uploadItem,
  uploadItemImg,
  getLostItemPost,
  upDate
} = require("../../controller/regiCon");

_.post("/regi", postController);
_.post("/login", loginController);
_.post("/profile", profielPic);
_.post("/userImg", getUserImg);
_.post("/itemupload", uploadItem);
_.post("/itemImg", uploadItemImg);
_.post("/getItImg", getItemImg);
_.post("/getpostlist", getLostItemPost);
_.post("/userupdate", upDate);

module.exports = _;
