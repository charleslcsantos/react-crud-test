import fetch from "isomorphic-unfetch";

const apiUrl = "http://localhost:9004/users";

const UserService = {
  getAll: () => {
    return fetch(apiUrl).then(async (result) => result.json());
  },

  save: (user) => {
    console.log("user", user);

    return new Promise(async (resolve, reject) => {
      if (user.id) {
        console.log("editar");
        const result = await fetch(`${apiUrl}/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(user),
        });
        // this.alertService.alert(`O usuário ${user.name} foi alterado`, "success");
        resolve(result.json());
      } else {
        console.log("criar");

        if (!user.gender) {
          reject("Selecione o gênero");
        } else {
          user.avatar = await generateAvatar(user.gender);
          const result = await fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(user),
          });
          //   this.alertService.alert(`O usuário ${user.name} foi criado`, "success");
          resolve(result.json());
        }
      }
    });
  },

  remove: async (user) => {
    let request;
    request = await fetch(`${apiUrl}/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });

    // this.alertService.alert(`O usuário ${user.name} foi deletado`, "success");

    // this.users.splice(index, 1);
    // this.users$.next(this.users);

    return request;
  },
};

const generateAvatar = (gender) => {
  return new Promise((resolve) => {
    const avatarUrl = "https://randomuser.me/api/portraits";

    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const randomNumber = Math.floor(Math.random() * Math.floor(100));

    resolve(`${avatarUrl}/${gender}/${randomNumber}.jpg`);
  });
};

export default UserService;
