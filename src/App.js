import React, { useRef } from "react";
import "./App.css";
import Users from "./Users";
import { ContextProvider } from "./AppContext";
import { usersData } from "./usersData";
import ReactToPrint from "react-to-print";
import { Box } from "@mui/material";

const App = () => {
  const componentRef = useRef();

  return (
    <div className="App">
      <ContextProvider users={usersData}>
        <Users />
        <div>
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => componentRef.current}
          />
          <Box
            style={{ height: "10rem", display: "flex", justifyContent: "center" }}
            ref={componentRef}>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                </tr>
                <tr>
                  <td>Value 4</td>
                  <td>Value 5</td>
                  <td>Value 6</td>
                </tr>
                <tr>
                  <td>Value 7</td>
                  <td>Value 8</td>
                  <td>Value 9</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </div>
      </ContextProvider>
    </div>
  );
};

export default App;
