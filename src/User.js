import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { usersData } from "./usersData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = ({ open, handleClose, handleOpen }) => {
  // Get the id from the inserted path incase the user enters directly the final path
  const path = window.location.pathname;
  const parts = path.split("/");
  const idPath = parts[parts.length - 1];
  const idParams = useParams().id;

  const id = idParams ? idParams : idPath;

  // I tried to make the studentList as a normal variable instead of a state but it didn't work
  const [studentList, setStdList] = useState([]);
  const [std, setStd] = useState();

  // get the list of students (questions in the help center)
  useEffect(() => {
    usersData.map((user) => user.studentList.map((std) => studentList.push(std)));
  }, []);

  useEffect(() => {
    handleOpen();
    setStd(studentList.find((std) => std.id == id));
  }, [id]);

  return (
    <Modal
      open={id && open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <h1>This is {std?.stdName}</h1>
      </Box>
    </Modal>
  );
};

export default User;
