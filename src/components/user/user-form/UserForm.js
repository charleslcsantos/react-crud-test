import "./UserForm.scss";
import React, { Component } from "react";
import UserService from "../UserService";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({
      user: { ...this.props.user },
    });
  }

  handleChange = (key, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [key]: value,
      },
    });
  };

  cancel() {
    if (this.props.onClickCancel) {
      this.props.onClickCancel();
    }
  }

  save(e) {
    e.preventDefault();
    const user = this.state.user;
    UserService.save(user).then((user) => {
      if (this.props.onSave) {
        this.props.onSave(user);
      }
    });
  }

  render() {
    return (
      <form className="user-form" onSubmit={(e) => this.save(e)}>
        <input
          type="text"
          className="form-control form-control-sm"
          value={this.state.user.name}
          onChange={(e) => this.handleChange("name", e.target.value)}
          name="Nome"
          placeholder="Nome"
          required
        />
        <input
          type="text"
          className="form-control form-control-sm"
          value={this.state.user.email}
          onChange={(e) => this.handleChange("email", e.target.value)}
          name="Email"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control form-control-sm"
          value={this.state.user.username}
          onChange={(e) => this.handleChange("username", e.target.value)}
          name="Username"
          placeholder="Username"
        />
        <input
          type="text"
          className="form-control form-control-sm"
          value={this.state.user.phone}
          onChange={(e) => this.handleChange("phone", e.target.value)}
          name="Telefone"
          placeholder="Telefone"
        />
        {!this.props.user.id && (
          <select
            className="form-control form-control-sm"
            name="gender"
            value={this.state.user.gender}
            onChange={(e) => this.handleChange("gender", e.target.value)}
          >
            <option value="men">Masculino</option>
            <option value="women">Feminino</option>
          </select>
        )}
        <button
          className="btn btn-sm btn-outline-success"
          type="submit"
          disabled={!this.state.user.name || this.state.user.name.length <= 0}
        >
          Salvar
        </button>
        {this.props.user.id && (
          <input
            onClick={() => this.cancel()}
            value="Cancelar"
            className="btn btn-sm btn-outline-secondary"
            type="button"
            // [disabled]="!formUser.valid"
          />
        )}
      </form>
    );
  }
}

UserForm.defaultProps = {
  user: {
    id: null,
    name: "",
    email: "",
    username: "",
    phone: "",
  },
};
