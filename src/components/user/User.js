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

  render() {
    return (
      <>
        <div className="container">
          <div className="new-user">
            <h2>Criar novos usuários</h2>
            <UserForm user={this.state.user} />
          </div>

          <div className="list user-list">
            {this.state.users.map((user) => (
              <UserCard key={user.id} user={user}></UserCard>
            ))}
          </div>

          <div>loading</div>
        </div>
      </>
    );
  }
}
