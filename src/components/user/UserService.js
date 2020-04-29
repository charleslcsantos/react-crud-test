import fetch from "isomorphic-unfetch";

const UserService = {
  getAll: () => {
    const apiUrl = "http://localhost:9004";

    return fetch(`${apiUrl}/users`).then(async (result) => result.json());
  },
};

export default UserService;
