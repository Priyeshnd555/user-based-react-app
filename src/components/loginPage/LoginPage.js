// import logo from "./logo.svg";
import "./LoginPage.css";

import { useState } from "react";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";

function LoginPage() {

  // storing user Data in state

  const [userData, setuserData] = useState({
    name: "",
    password: "",
  });

  // print state when validated

  useEffect(() => {
    console.log("userData from useEffect", userData);
  }, [userData]);

  //  onSumbit callback function

  const validateUser = () => {
    console.log("onSubmit", userData);
  };

  return (
    <div className="App">
      <h5>welcome to our App</h5>
      <TextField
        required
        label="Required"
        type="text"
        // placeholder="name.."
        onChange={(e) => {
          setuserData({ ...userData, name: e.target.value });
        }}
      />

      <br></br>
      <br></br>


      <TextField
        required
        label="Required"
        type="password"
        // placeholder="pwd.."
        onChange={(e) =>
          setuserData({
            ...userData,
            password: e.target.value,
          })
        }
      />
      <br></br>
      <br></br>
      
      <Button type="submit" variant="contained" color="success" onClick={validateUser}>
        Submit
      </Button>
    </div>
  );
}

export default LoginPage;
