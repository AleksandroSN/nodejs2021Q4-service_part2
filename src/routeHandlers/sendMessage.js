const sendMessage = (res, statusCode, headers, text) => {
  res.writeHead(statusCode, headers);
  res.end(text);
};

module.exports = {
  sendMessage,
};
