/* eslint-disable class-methods-use-this */
const uuid = require("uuid");
const { db } = require("../db");
const { bodyValidate } = require("./bodyValidate");

class Controller {
  static async getAllPerson() {
    return new Promise((res) => {
      res(db);
    });
  }

  static async getPerson(id) {
    return new Promise((res, rej) => {
      try {
        const uniquePerson = db.find((x) => x.id === id);
        if (uniquePerson === undefined) {
          throw new Error("Person is not found");
        }
        res(uniquePerson);
      } catch (err) {
        rej(err);
      }
    });
  }

  static async postPerson(body) {
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

  static async putPerson(id, body) {
    return new Promise((res, rej) => {
      try {
        const validBody = bodyValidate(body);
        if (!validBody) {
          throw new Error(
            "Body is invalid, use only 'name, age, hobbies' args"
          );
        }
        const updatedPersonIdx = db.findIndex((pers) => pers.id === id);
        if (updatedPersonIdx !== -1) {
          const updatedPerson = { ...db[updatedPersonIdx], ...body };
          db.splice(updatedPersonIdx, 1, updatedPerson);
          res(updatedPerson);
        } else {
          throw new Error("Person not found");
        }
      } catch (err) {
        rej(err);
      }
    });
  }

  static async deletePerson(id) {
    return new Promise((res, rej) => {
      try {
        const updatedPersonIdx = db.findIndex((pers) => pers.id === id);
        if (updatedPersonIdx !== -1) {
          const deletedPerson = db[updatedPersonIdx];
          db.splice(updatedPersonIdx, 1);
          res(deletedPerson);
        } else {
          throw new Error("Person not found");
        }
      } catch (error) {
        rej(error);
      }
    });
  }
}

module.exports = {
  Controller,
};
