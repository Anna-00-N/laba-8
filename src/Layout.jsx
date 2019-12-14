import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SigninPage from "./SigninPage";
import ProfilePage from "./ProfilePage";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/sign-in">
          <SigninPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </>
    );
  }
}

export default Layout;
