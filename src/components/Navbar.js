import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
export const Navbar = () => {
  const navigateUser = useNavigate();
  return (
    <header className="header">
      <img
        height={50}
        src="
        https://png.pngtree.com/png-vector/20200921/ourmid/pngtree-red-and-black-logo-png-image_2348180.jpg
        "
        alt="logo"
      />
      <nav className="nav">
        <NavLink className="nav--link" to="/">
          Home
        </NavLink>
        <NavLink className="nav--link" to="/about">
          About
        </NavLink>
        <NavLink className="nav--link" to="/product">
          Product
        </NavLink>
      </nav>
      <button
        onClick={() => navigateUser("/register")}
        className="header--button"
      >
        Register / Login
      </button>
    </header>
  );
};
