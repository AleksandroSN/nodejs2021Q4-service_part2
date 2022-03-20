const { ENDPOINTS } = require("./constants");

const validateUrl = (url) => {
  const values = Object.values(ENDPOINTS);
  const isValid = values.some((value) => value === url);
  return isValid;
};

module.exports = {
  validateUrl,
};
