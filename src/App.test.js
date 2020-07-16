import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CreateProfilePage from "./components/CreateProfile/CreateProfilePage";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LoginPage from "./components/Login/LoginPage";
import MessageList from "./components/Messenger/MessageList";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import UserProfile from "./components/UserProfile/UserProfile";

describe("LGBTQ App Components", () => {
  it("renders the App without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Create Profile Page without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <CreateProfilePage />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Grid without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Grid />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Hero without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Login Page without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Message List without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <MessageList />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Not Found Profile Page without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Sign Up Page without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Header without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the User Profile without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<UserProfile />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
