import React, { Component } from "react";
import UserCard from "./user-cad/UserCard";

export default class User extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="new-user">
            <h2>Criar novos usuários</h2>
            <div>form</div>
          </div>

          <div className="list user-list">
            <UserCard></UserCard>
          </div>

          <div>loading</div>
        </div>
      </>
    );
  }
}
