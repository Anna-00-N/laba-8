import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router";

const log = "laba-8-login",
  pas = "laba-8-password";
class ProfilePage extends React.Component {
  F() {
    localStorage.removeItem(log);
    localStorage.removeItem(pas);
    this.F2();
  }
  F2() {
    if (
      localStorage.getItem(log) === null &&
      localStorage.getItem(pas) === null
    )
      this.props.history.push("/");
  }
  render() {
    this.F2();
    return (
      <div class="card text-success border-success mb-3">
        <p class="card-text">
          <div class="card-body col-12">
            Ваши данные:
            <div class="card-body col-12">
              <div class="card border-success col-12">
                <div class="card-body">
                  <div class="btn col-6 text-success text-right">Логин:</div>
                  <div class="btn col-6 text-success text-left">
                    {localStorage.getItem(log)}
                  </div>
                  <hr />
                  <div class="btn col-6 text-success text-right">Пароль:</div>
                  <div class="btn col-6 text-success text-left">
                    {localStorage.getItem(pas)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => this.F()} class="btn btn-outline-success">
            Выйти
          </button>
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
