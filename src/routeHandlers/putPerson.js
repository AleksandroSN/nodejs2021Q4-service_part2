const { persons } = require("../db");
const { bodyValidate } = require("./bodyValidate");

const putPerson = (person) => {
  const validBody = bodyValidate(person);
  if (validBody) {
    const updatedPersonIdx = persons.findIndex(
      (pers) => pers.name === person.name
    );
    const updatedPerson = { ...persons[updatedPersonIdx], ...person };
    persons.splice(updatedPersonIdx, 1, updatedPerson);
    return updatedPerson;
  }
  return "Invalid arguments, use only 'name,age,hobbies' args";
};

module.exports = {
  putPerson,
};
