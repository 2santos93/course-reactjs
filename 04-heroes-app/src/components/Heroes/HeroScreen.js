import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "./../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { id: paramID } = useParams();

  const hero = getHeroById(paramID);

  if (!hero) return <Redirect to='/' />;

  const { 
    id, 
    superhero, 
    alter_ego, 
    first_appearance, 
    characters, 
    publisher 
  } = hero;

  const returnHandler = () => {
    if (history.length <= 2) return history.push("/");
    history.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes-images/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>FirstAppearance:</b> {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={returnHandler}>
          Return
        </button>
      </div>
    </div>
  );
};
