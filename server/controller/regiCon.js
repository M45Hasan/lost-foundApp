const express = require("express");
const bcrypt = require("bcrypt");
const Userinfo = require("../model/regiModel");
const multer = require("multer");
const upload = multer();

const postController = async (req, res) => {
  const { name, email, pass,photoURL } = req.body;
  bcrypt.hash(pass, 5, function (err, hash) {
    let mongo = new Userinfo({
      name,
      email,
      pass: hash,
      userImg:photoURL
    });
    mongo.save();
    console.log(name, email, hash);
    res.send(mongo);
  });
};

const loginController = async (req, res) => {
  const { email, pass } = req.body;

  const how = await Userinfo.find({ email });
  if (how.length != 0) {
    console.log(how[0].pass, how[0].name);
    bcrypt.compare(pass, how[0].pass, function (err, result) {
      if (result == true) {
        res.json({
          success: "Login Success",
          displayName: how[0].name,
          email: how[0].email,
          photoURL: how[0].photo ? how[0].photo : null,
        });
      } else {
        res.json({ error: "Invalid Entry" });
      }
    });
  } else {
    res.json({ error: "Invalid Entry" });
  }
};

// const profielPic = async (req, res) => {
//   const { email, userImg } = req.body;

//   upload.single("image");
//   const file = req.file;
//   console.log(file);
//   res.json({ success: "Done"});
// };
module.exports = { postController, loginController };
