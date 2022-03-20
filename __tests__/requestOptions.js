const requestOptions = {
  root: {
    hostname: "localhost",
    port: 6464,
    path: "/",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },

  getAll: {
    hostname: "localhost",
    port: 6464,
    path: "/person",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },

  getId(id) {
    return {
      hostname: "localhost",
      port: 6464,
      path: `/person/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  },

  post: {
    hostname: "localhost",
    port: 6464,
    path: "/person",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  },

  put(id) {
    return {
      hostname: "localhost",
      port: 6464,
      path: `/person/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
  },

  delete(id) {
    return {
      hostname: "localhost",
      port: 6464,
      path: `/person/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
};

module.exports = {
  requestOptions,
};
