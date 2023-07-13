const express = require("express");
const _ = express.Router();
const regiRoute = require("../../controller/regiCon");

_.post("/regi", regiRoute);

module.exports = _;
