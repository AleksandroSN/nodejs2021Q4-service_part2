const parseUrl = (url, flag, separator) => {
  const arrStr = url.split(separator);
  const idxFlag = arrStr.findIndex((x) => x === flag);
  const id = arrStr[idxFlag + 1];
  const itemAfterId = arrStr[idxFlag + 2];
  if (itemAfterId) {
    return {
      id: "",
      parseId: "",
    };
  }
  const parseId = id ? `/${arrStr[idxFlag]}/:id` : "";
  return {
    id,
    parseId,
  };
};

module.exports = {
  parseUrl,
};
