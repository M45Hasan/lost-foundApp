const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Userinfo = require("../model/regiModel");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Lostitempost = require("../model/lostPostModel");
const Itemhelper = require("../model/itmHelperModel");
const Claim = require("../model/claimModel");
const Chat = require("../model/chatModal");

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
//##### get ##############################get##########
const getUserImg = async (req, res) => {
  const { email } = req.body;
  await Userinfo.find({ email }).then((data) => {
    res.send(data);
  });
};
const getItemImg = async (req, res) => {
  const { email } = req.body;
  try {
    const how = await Itemhelper.find({ email });
    if (!how.length > 0) {
      res.jason({ error: "Kindly Upload Item image" });
    }
    res.send(how);
  } catch (err) {
    res.send(err);
  }
};

const getLostItemPost = async (req, res) => {
  const { email } = req.body;
  try {
    const how = await Lostitempost.find({ email });
    if (how.length > 0) {
      res.send(how);
    } else {
      res.json({ error: "Ki j hoyce" });
    }
  } catch (err) {
    res.json({ error: "Not success" });
  }
};
const getAllItemPost = async (req, res) => {
  try {
    const how = await Lostitempost.find();
    if (how.length > 0) {
      res.send(how);
    } else {
      res.json({ error: "Ki j hoyce" });
    }
  } catch (err) {
    res.json({ error: "Not success" });
  }
};
///#################  claimer Database start###########
const claimFn = async (req, res) => {
  const {
    claimerName,
    claimerEmail,
    claimerURL,
    claimItemId,
    category,
    subcat,
    finderName,
    fiderId,
    fiderURL,
  } = req.body;
  const how = await Claim.find({ claimItemId });

  if (!how.length > 0) {
    const cret = new Claim({
      claimerName,
      claimerEmail,
      claimerURL,
      claimItemId,
      category,
      subcat,
      finderName,
      fiderId,
      fiderURL,
    });

    cret
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    if (how[0].claimerEmail === claimerEmail) {
      res.json({ error: "Already calimed " });
    } else {
      const cret = new Claim({
        claimerName,
        claimerEmail,
        claimerURL,
        claimItemId,
        category,
        subcat,
        finderName,
        fiderId,
        fiderURL,
      });

      cret
        .save()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  }
};

const claimerDb = async (req, res) => {
  try {
    const how = await Claim.find({});
    res.send(how);
  } catch (err) {
    res.send(err);
  }
};
///#################  claimer Database end###########
//##### get ##############################get end##########

const uploadItem = async (req, res) => {
  const {
    name,
    email,
    userImg,
    category,
    subcat,
    detail,
    location,
    itImage,
    postlist_id,
  } = req.body;
  const how = await Userinfo.find({ email });
  const low = await Itemhelper.find({ email });
  if (how.length > 0 && low.length > 0) {
    const create = new Lostitempost({
      email,
      category,
      subcat,
      detail,
      location,
      itImage: low[0].itImage,
      postlist_id: how[0]._id,
      userImg,
      name: how[0].name,
    });
    create.save();
    await Itemhelper.findByIdAndDelete({ _id: low[0]._id });

    await Userinfo.findOneAndUpdate(
      { email },
      { $push: { lostpost_id: create._id } }
    );

    res.json({ message: "Done" });
  } else {
    res.json({ error: "Kindly add item images" });
  }
};

const uploadItemImg =
  (upload.array("images", 4),
  async (req, res) => {
    const { email, itImage } = req.body;

    const imgUrl = [];

    for (const pic of itImage) {
      const result = await cloudinary.uploader.upload(pic);
      imgUrl.push(result.secure_url);
    }
    const create = new Itemhelper({
      email: email,
      itImage: imgUrl,
    });
    create.save().then((result) => {
      res.send(result);
    });
  });

const upDate = async (req, res) => {
  const { email } = req.body;
  let how = await Userinfo.find({ email });
  if (how.length != 0) {
    res.send(how[0].userImg);
  } else {
    res.json({ error: "errro" });
  }
};
//############## chatting  start #####
const finderTclaimer = async (req, res) => {
  const {
    postId,
    finderEmail,
    finderName,
    claimerEmail,
    claimerName,
    messClaimer,
    messFinder,
  } = req.body;

  const cert = new Chat({
    postId,
    finderEmail,
    finderName,
    claimerEmail,
    claimerName,
    messClaimer,
    messFinder,
  });

  cert.save();
  const how = await Lostitempost.findOneAndUpdate(
    { _id: postId },
    { $push: { message: cert._id } },
    { new: true }
  );
  res.send(cert.data);
};

const pechalData = async (req, res) => {
  try {
    const how = await Chat.find();
    res.send(how);
  } catch (err) {
    res.send(err);
  }
};
//############## chatting  end #####
module.exports = {
  postController,
  loginController,
  profielPic,
  getUserImg,
  getItemImg,
  uploadItem,
  uploadItemImg,
  getLostItemPost,
  upDate,
  getAllItemPost,
  claimFn,
  claimerDb,
  finderTclaimer,
  pechalData
};
