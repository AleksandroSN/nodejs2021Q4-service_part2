const { httpRequest } = require("./httpRequest");

const deleteOptions = {
  hostname: "localhost",
  port: 6464,
  path: "/delete",
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const clearDb = async () => {
  await httpRequest(deleteOptions);
};

module.exports = {
  clearDb,
};
