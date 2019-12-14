import React from "react";

class SigninPage extends React.Component {
  F() {
    var log = document.getElementById("log").value,
      pas = document.getElementById("pas").value,
      log_a = "laba-8-login",
      pas_a = "laba-8-password",
      txt = document.getElementById("txt");

    txt.className = "text-danger";
    if (log.length > 0 && pas.length > 0) {
      if (
        localStorage.getItem(log_a) === null &&
        localStorage.getItem(pas_a) === null
      ) {
        localStorage.setItem(log_a, log);
        localStorage.setItem(pas_a, pas);
        txt.className = "text-success";
        txt.innerText = "Вы зарегистрировались!";
      } else
        txt.innerText =
          "Вы уже авторизированы. Для повторного входа надо выйти!";
    } else txt.innerText = "Оба поля должны быть заполнены!";
  }

  render() {
    return (
      <div class="card text-secondary border-secondary mb-3">
        <p class="card-text">
          <br />
          <br />
          Зарегистрируйтесь:
          <br />
          <br />
          <div class="input-group col-12 text-center">
            <div class="input-group-prepend">
              <span class="input-group-text text-secondary border-secondary">
                Логин<span class="text-danger">*</span>
              </span>
            </div>
            <input
              type="text"
              id="log"
              aria-label="First name"
              class="form-control  text-secondary border-secondary"
            />
          </div>
          <br />
          <div class="input-group col-12 text-center">
            <div class="input-group-prepend">
              <span class="input-group-text text-secondary border-secondary">
                Пароль<span class="text-danger">*</span>
              </span>
            </div>
            <input
              type="password"
              id="pas"
              aria-label="First name"
              class="form-control text-secondary border-secondary"
            />
          </div>
          <br />
          <button onClick={() => this.F()} class="btn btn-outline-secondary">
            Войти
          </button>
          <br />
          <br />
          <p id="txt" />
          <br />
        </p>
      </div>
    );
  }
}

export default SigninPage;
