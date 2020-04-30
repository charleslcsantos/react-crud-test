import "./UserCard.scss";
import React, { Component } from "react";
import UserForm from "../user-form/UserForm";
import { IconEdit } from "../../shared/icons/icon-edit/IconEdit";
import { IconRemove } from "../../shared/icons/icon-remove/IconRemove";
import { IconArrow } from "../../shared/icons/icon-arrow/IconArrow";
import UserService from "../UserService";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canShowDetail: false,
      canEditUser: false,
      user: {},
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  openDetail() {
    const canShow = !this.state.canShowDetail;

    this.setState({
      canShowDetail: canShow,
    });
  }

  async edit(user) {
    await this.setState({
      canEditUser: !this.state.canEditUser,
    });
    if (user) {
      await this.setState({
        ...this.state,
        user: user,
      });
      if (this.props.onSave) {
        this.props.onSave(null);
      }
    }
  }

  remove(user) {
    if (window.confirm("Tem certeza que deseja apagar o registro?")) {
      UserService.remove(user).then(() => {
        if (this.props.onRemove) {
          this.props.onRemove();
        }
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className={`user-card ${
            this.state.canShowDetail ? "user-card--opened" : ""
          }`}
          onClick={() => this.openDetail()}
        >
          <div className="user-card__pic">
            <img src={this.state.user.avatar} alt="user avatar" />
          </div>
          <div className="user-card__title"> {this.state.user.name} </div>
          <IconArrow></IconArrow>
        </div>
        {this.state.canShowDetail && (
          <div className="user-detail">
            {!this.state.canEditUser && (
              <div className="read-only">
                <div className="user-info" title="#">
                  {this.state.user.id}
                </div>
                <div className="user-info" title="Nome">
                  {this.state.user.name}
                </div>
                <div className="user-info" title="Email">
                  {this.state.user.email}
                </div>
                <div className="user-info" title="Username">
                  {this.state.user.username}
                </div>
                <div className="user-info" title="Telefone">
                  {this.state.user.phone}
                </div>
                <div className="list__actions">
                  <button className="btn" onClick={() => this.edit()}>
                    <IconEdit>Editar</IconEdit>
                  </button>
                  <button
                    className="btn"
                    onClick={() => this.remove(this.state.user)}
                  >
                    <IconRemove>Remover</IconRemove>
                  </button>
                </div>
              </div>
            )}
            {this.state.canEditUser && (
              <UserForm
                user={this.state.user}
                onSave={(user) => this.edit(user)}
                onClickCancel={() => this.edit()}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
