const express = require("express");
const bcrypt = require("bcrypt");
const Userinfo = require("../model/regiModel");

const postController = async (req, res) => {
  const { name, email, pass } = req.body;
  bcrypt.hash(pass, 5, function (err, hash) {
    let mongo = new Userinfo({
      name,
      email,
      pass: hash,
    });
    mongo.save()
    console.log(name, email, hash);
    res.send(mongo)
  });

 
};
module.exports = postController;
