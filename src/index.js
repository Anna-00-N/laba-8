import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

/*npm install --save reactstrap react react-dom */
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    //const { error, isLoaded, users } = this.state;
    return (
      <BrowserRouter>
        <div class="container text-center">
          <br />
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
