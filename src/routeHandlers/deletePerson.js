const { persons } = require("../db");

const deletePerson = (id) => {
  const updatedPersonIdx = persons.findIndex((pers) => pers.id === id);
  const deletedPerson = persons[updatedPersonIdx];
  persons.splice(updatedPersonIdx, 1);
  return deletedPerson;
};

module.exports = {
  deletePerson,
};
