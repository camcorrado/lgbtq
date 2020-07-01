import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class ProfileIcon extends Component {
  render() {
    const url = `/userProfile/${this.props.id}`;
    return (
      <Link to={url} className="profileIconLink">
        <section className="profileIcon">
          <img
            src={this.props.profile_pic}
            alt={this.props.username + `'s profile pic`}
            className="profilePicGrid"
          />
          <h4 className="username">{this.props.username}</h4>
          <h4 className="interests">{this.props.interests.join(", ")}</h4>
        </section>
      </Link>
    );
  }
}
