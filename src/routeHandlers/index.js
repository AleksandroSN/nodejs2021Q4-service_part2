const { getPerson, getAllPersons } = require("./getPerson");
const { postPerson } = require("./postPerson");
const { putPerson } = require("./putPerson");
const { deletePerson } = require("./deletePerson");

module.exports = {
  getPerson,
  getAllPersons,
  postPerson,
  putPerson,
  deletePerson,
};
