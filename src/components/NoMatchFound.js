import React from "react";
import { useNavigate } from "react-router-dom";

export const NoMatchFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 50,
        }}
      >
        No Match Found for entered URL
      </div>
      {/* <button onClick={() => navigate("/login")}>GOTO LOGIN</button> */}
    </>
  );
};
