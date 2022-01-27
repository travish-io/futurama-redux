import React from "react";
import { ListUsers } from "./users/ListUsers";
import { UserProfiles } from "./users/UserProfiles";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <ListUsers />
        <UserProfiles />
      </div>
    </>
  );
}

export default App;
