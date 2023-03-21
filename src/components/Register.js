import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Form.css";
export const Register = () => {
  const navigateUser = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  /**
   * This function sets value of state onchange
   * @param {*} event - in every onchange we will take event
   */
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setContactInfo({
      ...contactInfo,
      [event.target.name]: value,
    });
  };
  /**
   *  This function sets the value of form in state on submit
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: contactInfo.name,
      email: contactInfo.email,
      password: contactInfo.password,
    };
    console.log("userData", userData);
  };
  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)} className="form" method="post">
        <input
          className="form--input"
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(event) => handleChange(event)}
          value={contactInfo.name}
        />
        <input
          className="form--input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={contactInfo?.email}
          onChange={(event) => handleChange(event)}
        />
        <input
          className="form--input"
          type="password"
          name="password"
          value={contactInfo?.password}
          placeholder="Enter your password"
          onChange={(event) => handleChange(event)}
        />
        <input className="header--button" type="submit" />
      </form>
      <button
        onClick={() => navigateUser("/login")}
        style={{ backgroundColor: "black" }}
        className="header--button"
      >
        Login
      </button>
    </div>
  );
};
