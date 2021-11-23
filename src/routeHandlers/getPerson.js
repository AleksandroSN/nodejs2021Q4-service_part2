const { persons } = require("../db");

const getAllPersons = () => {
  return persons;
};

const getPerson = (id) => {
  const uniquePerson = persons.filter((x) => x.id === id);
  return uniquePerson;
};

module.exports = {
  getPerson,
  getAllPersons,
};
