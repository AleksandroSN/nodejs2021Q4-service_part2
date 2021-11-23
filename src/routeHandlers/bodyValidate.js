const { REQKEYS } = require("../utils");

const bodyValidate = (body) => {
  const keys = Object.keys(body);
  if (keys.length > 3) {
    return false;
  }
  if (keys.every((key) => REQKEYS[key])) return true;
  return null;
};

module.exports = {
  bodyValidate,
};
