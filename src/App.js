import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Users from "./Users";
import { usersData } from "./usersData";
const App = () => {
  const users = usersData;

  return (
    <div className="App">
      <Link to={`/student/5`}>Student 5</Link>
      <Users users={users} />
    </div>
  );
};

export default App;
