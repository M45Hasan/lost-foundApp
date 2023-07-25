const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  postId: { type: String },
  finderEmail: { type: String },
  finderName: { type: String },
  claimerEmail: { type: String },
  claimerName: { type: String },
  messClaimer: { type: String },
  messFinder: { type: String },
  id: {
    type: Schema.Types.ObjectId,
    ref: " Lostitempost",
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);
