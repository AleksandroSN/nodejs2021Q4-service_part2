/* eslint-disable class-methods-use-this */
const uuid = require("uuid");
const { db } = require("../db");
const { bodyValidate } = require("./bodyValidate");

class Controller {
  async getAllPerson() {
    throw new Error("ERROR");
    return new Promise((res) => {
      res(db);
    });
  }

  async getPerson(id) {
    return new Promise((res, rej) => {
      try {
        const uniquePerson = db.find((x) => x.id === id);
        if (uniquePerson === undefined) {
          throw new Error("User is not found");
        }
        res(uniquePerson);
      } catch (err) {
        rej(err);
      }
    });
  }

  async postPerson(body) {
    return new Promise((res, rej) => {
      try {
        const validBody = bodyValidate(body);
        if (validBody) {
          const validPerson = { ...{ id: uuid.v4() }, ...body };
          db.push(validPerson);
          res(validPerson);
        } else {
          throw new Error(
            "Body is invalid, use only 'name, age, hobbies' args"
          );
        }
      } catch (err) {
        rej(err);
      }
    });
  }

  async putPerson(id, body) {
    return new Promise((res, rej) => {
      try {
        const validBody = bodyValidate(body);
        if (validBody) {
          const updatedPersonIdx = db.findIndex((pers) => pers.id === id);
          const updatedPerson = { ...db[updatedPersonIdx], ...body };
          db.splice(updatedPersonIdx, 1, updatedPerson);
          res(updatedPerson);
        }
      } catch (err) {
        rej(err);
      }
    });
  }

  async deletePerson(id) {
    return new Promise((res) => {
      const updatedPersonIdx = db.findIndex((pers) => pers.id === id);
      const deletedPerson = db[updatedPersonIdx];
      db.splice(updatedPersonIdx, 1);
      res(deletedPerson);
    });
  }
}

module.exports = {
  Controller,
};
