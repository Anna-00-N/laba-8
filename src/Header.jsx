import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-4">
          <Link to="/">
            <button class="btn btn-outline-info">MainPage</button>
          </Link>
        </div>
        <div class="col-4">
          <Link to="/sign-in">
            <button class="btn btn-outline-secondary">SingInPage</button>
          </Link>
        </div>
        <div class="col-4">
          <Link to="/profile">
            <button class="btn btn-outline-success">ProfilePage</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
