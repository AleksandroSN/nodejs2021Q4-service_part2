const mockUser = {
  id: "5",
  name: "Petya",
  age: "33",
  hobbies: ["Blogging", "Marketing", "Travel"],
};
const mockUser2 = {
  id: "66666",
  name: "Vasya",
  age: "42",
  hobbies: ["TEST", "Marketing", "Travel"],
};

const db = [mockUser, mockUser2];

module.exports = {
  db,
};
