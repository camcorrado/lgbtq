import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faDragon,
  faPaintBrush,
  faUtensilSpoon,
  faHammer,
  faFemale,
  faTshirt,
  faDumbbell,
  faPizzaSlice,
  faGamepad,
  faSeedling,
  faCampground,
  faFilm,
  faMusic,
  faMoon,
  faCat,
  faBookOpen,
  faPrayingHands,
  faFutbol,
  faMicrochip,
  faTheaterMasks,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

export default class ProfileIcon extends Component {
  render() {
    let interestDict = {
      Activism: faFistRaised,
      Anime: faDragon,
      Art: faPaintBrush,
      Cooking: faUtensilSpoon,
      Crafting: faHammer,
      Drag: faFemale,
      Fashion: faTshirt,
      Fitness: faDumbbell,
      Food: faPizzaSlice,
      Gaming: faGamepad,
      Gardening: faSeedling,
      "The Outdoors": faCampground,
      Movies: faFilm,
      Music: faMusic,
      Nightlife: faMoon,
      "Pets/Animals": faCat,
      Reading: faBookOpen,
      Spirituality: faPrayingHands,
      Sports: faFutbol,
      Tech: faMicrochip,
      Theater: faTheaterMasks,
      Travel: faPlane,
    };

    const { id, username, profile_pic, interests } = this.props;
    const url = `/userProfile/${id}`;
    return (
      <Link to={url} className="profileIconLink">
        <section className="profileIcon">
          <img
            src={profile_pic}
            alt={username + `'s profile pic`}
            className="profilePicGrid"
          />
          <section className="interestsGrid">
            <ul>
              {interests.map((interest) => (
                <li key={interest} className="interestWrapper">
                  <FontAwesomeIcon
                    icon={interestDict[interest]}
                    className="faIconGrid"
                  />
                  <p className="interestTextGrid">{interest}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </Link>
    );
  }
}
