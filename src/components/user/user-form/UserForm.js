import "./UserForm.scss";
import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    return (
      <form className="user-form">
        <input
          type="text"
          className="form-control form-control-sm"
          // value={this.props.user.name}
          name="Nome"
          placeholder="Nome"
          required
        />
        <input
          type="text"
          className="form-control form-control-sm"
          // value={this.props.user.email}
          name="Email"
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control form-control-sm"
          // value={this.props.user.phone}
          name="Telefone"
          placeholder="Telefone"
        />
        <input
          type="text"
          className="form-control form-control-sm"
          // value={this.props.user.username}
          name="Username"
          placeholder="Username"
        />
        <select
          // *ngIf="!user.id"
          className="form-control form-control-sm"
          name="gender"
          // value={this.props.user.gender}
        >
          <option value="men">Masculino</option>
          <option value="woman">Feminino</option>
        </select>
        <button
          className="btn btn-sm btn-outline-success"
          type="submit"
          // [disabled]="!formUser.valid"
        >
          Salvar
        </button>
        <input
          // *ngIf="user.id"
          // (click)="cancel()"
          value="Cancelar"
          className="btn btn-sm btn-outline-secondary"
          type="button"
          // [disabled]="!formUser.valid"
        />
      </form>
    );
  }
}
