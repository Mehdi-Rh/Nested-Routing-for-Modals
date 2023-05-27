import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import User from "./User";
import { AppContext } from "./AppContext";

const Users = () => {

  const { users, open, handleClose, handleOpen, } = useContext(AppContext)


  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.userName}
          <ul>
            {user.studentList.map((std) => (
              <li key={std.id}>
                <Link onClick={handleOpen} to={`/student/${std.id}`}>
                  {std.stdName}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      {/* Render the modal */}
      <Route path="/student/:id">
        <User users={users} open={open} handleClose={handleClose} handleOpen={handleOpen} />
      </Route>
    </div>
  );
};

export default Users;
