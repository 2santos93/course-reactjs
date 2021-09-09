import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Home</h1>
      <hr />

      {
        JSON.stringify(user, null, 3)
      }

      <button className="btn btn-primary"
        onClick={() => setUser({id:'1234', name:'nelson'})}
      >Set User</button>
    </>
  );
};
