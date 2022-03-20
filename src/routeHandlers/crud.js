const { readId } = require("./readId");
const { readAll } = require("./readAll");
const { postData } = require("./postData");
const { putData } = require("./putData");
const { deleteData } = require("./deleteData");

const crud = {
  GET: {
    "/person": readAll,
    "/person/:id": readId,
  },
  POST: {
    "/person": postData,
  },
  PUT: {
    "/person/:id": putData,
  },
  DELETE: {
    "/person/:id": deleteData,
  },
};

module.exports = {
  crud,
};
