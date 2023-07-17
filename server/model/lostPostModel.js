const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const lostItemSchema = new Schema({
  email: {
    type: String,
  },
  category: {
    type: String,
  },
  subcat: {
    type: String,
  },
  detail: {
    type: String,
  },
  location: {
    type: String,
  },
  postlist_id: {
    type: Schema.Types.ObjectId,
    ref: " userinfo",
  },
  itImage: [{
    type: String,
    require:true
  }],
});

module.exports = mongoose.model("Lostitempost", lostItemSchema);
