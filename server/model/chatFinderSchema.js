const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const finderSchema = new Schema({
  postId: { type: String },
  finderEmail: { type: String },
  finderName: { type: String },
  claimerEmail: { type: String },
  claimerName: { type: String },
  messFinder: { type: String },

  id: {
    type: Schema.Types.ObjectId,
    ref: " lostitempost",
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chatfinder", finderSchema);
