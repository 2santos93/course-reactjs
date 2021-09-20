import React, { useMemo, useRef } from "react";
import { useLocation } from "react-router";
import { parse } from "query-string";

import { HeroCard } from "../Heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const {q = ''} = parse(location.search);
  const inputRef = useRef(q);

  let heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const searchHandler = (e) => {
    e.preventDefault(); 
    const inputValue = inputRef.current.value;
    history.push(`?q=${inputValue}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-4">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={searchHandler}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Find your Hero"
              className="form-control"
            />
            <div className="d-grid gap-2 mt-1">
              <button type="submit" className="btn btn-outline-primary">
                Search...
              </button>
            </div>
          </form>
        </div>

        <div className="col-8">
          <h4>Results</h4>
          <hr />

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
