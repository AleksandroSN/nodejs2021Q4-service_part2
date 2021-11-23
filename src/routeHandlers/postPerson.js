const uuid = require("uuid");
const { persons } = require("../db");
const { bodyValidate } = require("./bodyValidate");

const postPerson = (person) => {
  const validBody = bodyValidate(person);
  if (validBody) {
    const validPerson = { ...{ id: uuid.v4() }, ...person };
    persons.push(validPerson);
    return validPerson;
  }
  return "Invalid arguments, use only 'name,age,hobbies' args";
};

module.exports = {
  postPerson,
};
