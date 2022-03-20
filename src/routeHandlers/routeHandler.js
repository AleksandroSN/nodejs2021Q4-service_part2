const { crud } = require("./crud");

const routeHandler = async (req, res, id, parseId) => {
  const crudMethod = crud[req.method];
  const handler = parseId ? crudMethod[parseId] : crudMethod[req.url];
  const response = await handler(req, res, id);
  return response;
};

module.exports = {
  routeHandler,
};
