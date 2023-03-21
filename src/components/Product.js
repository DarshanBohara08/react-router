import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/Product.css";
export const Product = () => {
  return (
    <>
      <p>This is Product</p>
      <nav className="product">
        <Link className="product--link" to="new">
          New Product
        </Link>
        <Link className="product--link" to="feature">
          Feature Product
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
