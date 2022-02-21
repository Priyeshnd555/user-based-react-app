import React from "react";
import Admin from "./components/admin/Admin";
import User from "./components/userPage/User";
import LoginPage from "./components/loginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
