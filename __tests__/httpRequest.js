const http = require("http");

const httpRequest = (options, data) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      const { statusCode } = res;
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk.toString();
      });
      res.on("end", () => {
        resolve({
          statusCode,
          body,
        });
      });
    });
    if (data) {
      req.write(data);
    }
    req.on("error", (error) => {
      reject(error);
    });
    req.end();
  });
};

module.exports = {
  httpRequest,
};
