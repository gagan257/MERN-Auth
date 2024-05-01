import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [LoginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // prevent reload on submit btn click && submit logic
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(LoginData);
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        LoginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("Login Successfully");
      } else {
        console.log(message);
      }
    } catch (err) {
      console.log(err);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={LoginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={LoginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Not Registered Yet? <Link to="/registration">Register here</Link>
        </p>
      </form>
    </div>
  );
}
