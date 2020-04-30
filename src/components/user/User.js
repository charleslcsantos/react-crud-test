import React, { Component } from "react";
import UserCard from "./user-cad/UserCard";
import UserService from "./UserService";
import "./User.scss";
import UserForm from "./user-form/UserForm";
import { Alert } from "../shared/alert/Alert";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: {
        name: "",
        email: "",
        phone: "",
        username: "",
        gender: "men",
      },
      alerts: [],
    };
  }

  componentDidMount() {
    UserService.getAll().then((users) => {
      console.log("users", users);
      this.setState({
        users: users,
      });
    });
  }

  async onSave(user) {
    if (user) {
      let updatedUsers = [...this.state.users];
      updatedUsers.push(user);

      await this.setState({
        ...this.state,
        users: updatedUsers,
      });
    }
    this.alert(
      `O usuário ${user ? `${user.name} foi criado` : " foi atualizado"}`
    );
  }

  async onRemove(index) {
    let updatedUsers = [...this.state.users];
    updatedUsers.splice(index, 1);

    await this.setState({
      ...this.state,
      users: updatedUsers,
    });
    this.alert(`O usuário foi deletado`);
  }

  alert(message, type = "info") {
    let alerts = this.state.alerts;
    const newAlert = {
      message: message,
      type: type,
    };

    alerts.push(newAlert);

    if (alerts && alerts.length === 4) {
      alerts.splice(0, 1);
    }
    setTimeout(() => {
      alerts.splice(0, 1);
      this.setState({
        ...this.state,
        alerts: alerts,
      });
    }, 7000);

    this.setState({
      ...this.state,
      alerts: alerts,
    });
  }

  render() {
    return (
      <>
        <div class="alerts">
          {this.state.alerts.map((alert, index) => (
            <Alert key={index} alert={alert}></Alert>
          ))}
        </div>
        <div className="container">
          <img
            className="logo"
            src="https://agenciamaori.com.br/i.systems/logo-Isystem_positivo.svg"
          ></img>
          <div className="new-user">
            <h2>Criar novos usuários</h2>
            <UserForm
              user={this.state.user}
              onSave={(result) => this.onSave(result)}
            />
          </div>

          <div className="list user-list">
            {this.state.users.map((user, index) => (
              <UserCard
                key={user.id}
                user={user}
                onSave={() => this.onSave()}
                onRemove={() => this.onRemove(index)}
              ></UserCard>
            ))}
          </div>
        </div>
      </>
    );
  }
}
