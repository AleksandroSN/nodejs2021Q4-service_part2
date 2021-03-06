const { Controller } = require("./controller");
const { HEADERS } = require("../utils");
const { reqData } = require("./reqData");
const { sendMessage } = require("./sendMessage");

const postData = async (req, res, _) => {
  try {
    const body = await reqData(req);
    const data = JSON.parse(body);
    const result = await Controller.postPerson(data);
    const json = JSON.stringify(result);
    sendMessage(res, 201, HEADERS.json, json);
  } catch (error) {
    sendMessage(res, 400, HEADERS.textHtml, error.message);
  }
};

module.exports = {
  postData,
};
