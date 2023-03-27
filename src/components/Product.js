import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../style/Product.css";
export const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showData = searchParams.get("filter") === "latestProduct";
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
        <div>
          <button onClick={() => setSearchParams({ filter: "latestProduct" })}>
            Latest Product
          </button>
        </div>
      </nav>
      {/* TODO Apply Select button for filter */}
      {showData && <p>This is latest product</p>}
      <Outlet />
    </>
  );
};
