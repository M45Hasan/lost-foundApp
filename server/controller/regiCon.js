const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Userinfo = require("../model/regiModel");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const postController = async (req, res) => {
  const { name, email, pass, photoURL } = req.body;
  bcrypt.hash(pass, 5, function (err, hash) {
    let mongo = new Userinfo({
      name,
      email,
      pass: hash,
      userImg: photoURL,
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
          userImg: how[0].photo ? how[0].photo : null,
        });
      } else {
        res.json({ error: "Invalid Entry" });
      }
    });
  } else {
    res.json({ error: "Invalid Entry" });
  }
};

const profielPic =
  (upload.single("image"),
  async (req, res) => {
    const { email, userImg, cloudinary_id } = req.body;

    const result = await cloudinary.uploader.upload(
      userImg,
      { public_id: email },
      (error, result) => {
        res.send(result);
      }
    );
    await Userinfo.findOneAndUpdate(
      { email: email },
      { userImg: result.secure_url },
      { new: true }
    );
  });

  const getUserImg= async( req,res)=>{
    

  }
module.exports = { postController, loginController, profielPic };
