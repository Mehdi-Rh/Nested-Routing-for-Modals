import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import User from "./User";

const Users = ({ users }) => {
  // handle the closing and the openeing of the Modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    window.location.pathname = "/";
  };
  const handleOpen = () => setOpen(true);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {console.log("Users user", user)}
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
      <Route path="/student/:id">
        <User users={users} open={open} handleClose={handleClose} handleOpen={handleOpen} />
      </Route>
    </div>
  );
};

export default Users;
