const requestData = {
  postData: JSON.stringify({
    name: "Vasya",
    age: "33",
    hobbies: ["vasya", "lubit", "kamni"],
  }),

  postData2: JSON.stringify({
    name: "Vladimir",
    age: "18",
    hobbies: ["programmirovat", "kopat"],
  }),

  postData3: JSON.stringify({
    name: "TEST",
    age: "22",
    hobbies: ["ogurci", "pirojki"],
  }),

  putData: JSON.stringify({
    name: "Petya",
    age: "42",
    hobbies: ["TEST", "lubit", "kamni"],
  }),

  wrongData: JSON.stringify({
    wrong: "Petya",
    age: "42",
    hobbies: ["TEST", "lubit", "kamni"],
  }),
};

module.exports = {
  requestData,
};
