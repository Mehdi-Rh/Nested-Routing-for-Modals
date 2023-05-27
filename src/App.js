import React from "react";
import "./App.css";
import Users from "./Users";
import { ContextProvider } from "./AppContext";
import { usersData } from "./usersData";

const App = () => {

  return (
    <div className="App">
      <ContextProvider users={usersData}>
        <Users />
      </ContextProvider>
    </div>
  );
};

export default App;
