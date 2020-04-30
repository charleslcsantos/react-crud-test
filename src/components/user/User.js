import React, { Component } from "react";
import UserCard from "./user-cad/UserCard";
import UserService from "./UserService";
import "./User.scss";
import UserForm from "./user-form/UserForm";

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

  onSave(result) {
    const user = result;
    let updatedUsers = [...this.state.users];
    updatedUsers.push(user);

    this.setState({
      ...this.state,
      users: updatedUsers,
    });
  }

  async onRemove(index) {
    let updatedUsers = [...this.state.users];
    updatedUsers.splice(index, 1);

    this.setState({
      ...this.state,
      users: updatedUsers,
    });
  }

  render() {
    return (
      <>
        <div className="container">
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
                onSave={(result) => this.onSave(result)}
                onRemove={() => this.onRemove(index)}
              ></UserCard>
            ))}
          </div>

          <div>loading</div>
        </div>
      </>
    );
  }
}
