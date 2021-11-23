const parseUrl = (str, flag, separator) => {
  const validLength = 5;
  const arrStr = str.split(separator);
  const idxFlag = arrStr.findIndex((x) => x === flag);
  const searchRes = arrStr[idxFlag + 1];
  const result = arrStr.length > validLength ? false : searchRes;
  return result;
};

module.exports = {
  parseUrl,
};
