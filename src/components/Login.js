import React, { useState } from "react";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: login.email,
      password: login.password,
    };
    console.log("loginData", loginData);
  };
  return (
    <div className="formContainer">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form--input"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) => handleChange(event)}
        />
        <input
          className="form--input"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) => handleChange(event)}
        />
        <input className="header--button" type="submit" />
      </form>
    </div>
  );
};
