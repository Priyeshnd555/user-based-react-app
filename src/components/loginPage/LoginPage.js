// import logo from "./logo.svg";
import "./LoginPage.css";

import { useState } from "react";
import { useEffect } from "react";

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

      <input
        type="text"
        placeholder="name.."
        onChange={(e) => {
          setuserData({ ...userData, name: e.target.value });
        }}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        placeholder="pwd.."
        onChange={(e) =>
          setuserData({
            ...userData,
            password: e.target.value,
          })
        }
      />
      <br></br>
      <br></br>
      <button type="submit" onClick={validateUser}>
        sumbit
      </button>
    </div>
  );
}

export default LoginPage;
