const { Controller } = require("./controller");
const { sendMessage } = require("./sendMessage");
const { readAll } = require("./readAll");
const { readId } = require("./readId");
const { postData } = require("./postData");
const { reqData } = require("./reqData");
const { putData } = require("./putData");
const { deleteData } = require("./deleteData");

module.exports = {
  Controller,
  sendMessage,
  readAll,
  readId,
  reqData,
  postData,
  putData,
  deleteData,
};
