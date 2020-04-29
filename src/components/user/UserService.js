import fetch from "isomorphic-unfetch";

const apiUrl = "http://localhost:9004/users";

const UserService = {
  getAll: () => {
    return fetch(apiUrl).then(async (result) => result.json());
  },
  save: (user) => {
    let request;

    if (user.id) {
      fetch(`${apiUrl}/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      // request = await this.httpService
      //   .fetch(`${this.endpoint}/${user.id}`, user)
      //   .toPromise();
      // this.alertService.alert(`O usuário ${user.name} foi alterado`, "success");
    } /*else {
      if (user.gender) {
        user.avatar = await this.generateAvatar(user.gender);

        request = await this.httpService.post(this.endpoint, user).toPromise();
        this.alertService.alert(`O usuário ${user.name} foi criado`, "success");
      } else {
        this.alertService.alert(`Você precisa selecionar um gênero`);
        throw new Error("Genero nao selecionado");
      }
    }*/

    return request;
  },
};

export default UserService;
