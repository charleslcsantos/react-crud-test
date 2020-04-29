import "./UserCard.scss";
import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canShowDetail: true,
      canEditUser: false,
      user: {
        id: 2,
        name: `Charlinho`,
        email: `email@email.com`,
        username: `dovisk`,
        phone: `(32) 05940-5987`,
      },
    };
  }

  componentDidMount() {}

  render() {
    console.log("this.props.user", this.props.user);
    return (
      <div className="wrapper">
        <div className="user-card user-card--opened">
          <div className="user-card__pic">
            <img src={this.props.user.avatar} alt="user avatar" />
          </div>
          <div className="user-card__title"> nome </div>
        </div>
        {this.state.canShowDetail && (
          <div className="user-detail">
            {!this.state.canEditUser && (
              <div className="read-only">
                <div className="user-info" title="#">
                  {this.props.user.id}
                </div>
                <div className="user-info" title="Nome">
                  {this.props.user.name}
                </div>
                <div className="user-info" title="Email">
                  {this.props.user.email}
                </div>
                <div className="user-info" title="Username">
                  {this.props.user.username}
                </div>
                <div className="user-info" title="Telefone">
                  {this.props.user.phone}
                </div>
                <div className="list__actions">editar e remover</div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
