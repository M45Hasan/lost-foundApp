const express = require("express");
const _ = express.Router();
const Userinfo = require("../../model/regiModel");
const multer = require("multer");

const { postController, loginController } = require("../../controller/regiCon");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination folder where the images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for each uploaded image
  },
});
const upload = multer({ storage: storage });

_.post("/regi", postController);
_.post("/login", loginController);
_.post("/profile", upload.single("image"), async (req, res) => {
  const email = req.body.email;
  const file = req.file;
  console.log(file)
  await Userinfo.findOneAndUpdate(
    { email: email },
    { userImg: file },
    { new: true }
  )
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
  res.send(file);
});

module.exports = _;
