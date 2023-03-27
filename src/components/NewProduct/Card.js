import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/NewProduct/Card.css";
export const newdata = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    name: "product one",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "product Two",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
export const Card = () => {
  return (
    <div className="card">
      {newdata?.map((i) => {
        return (
          <div className="card__detail">
            <img width={150} height={120} alt="headphone" src={i.src} />
            <p
              style={{
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {i.name}
            </p>
            <Link className="card__detail--button" to={`${i.id}`}>
              Read more
            </Link>
          </div>
        );
      })}
    </div>
  );
};
