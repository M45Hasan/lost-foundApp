const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const newSchema = new Schema({
  claimerName: { type: String },
  claimerEmail: { type: String },
  claimerURL: { type: String },
  claimItemId: { type: String },
  category: { type: String },
  subcat: { type: String },
  finderName: { type: String },
  fiderId: { type: String },
  fiderURL: { type: String },
 mess:{type:String},
 rate:{Type:Number}
});

module.exports = mongoose.model("Delirevi", newSchema);