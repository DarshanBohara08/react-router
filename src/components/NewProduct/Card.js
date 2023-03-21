import React from "react";
import { Link, useParams } from "react-router-dom";

export const newdata = [
  {
    id: 1,
    src: "https://www.oberlo.com/media/1603969900-productphotog-2.jpg?w=1824&fit=max",
    name: "product one",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    src: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
    name: "product Two",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
export const Card = () => {
  return (
    <>
      {newdata?.map((i) => {
        return (
          <div>
            <img height={200} alt="headphone" src={i.src} />
            <p>{i.name}</p>
            <Link to={`${i.id}`}>Read more</Link>
          </div>
        );
      })}
    </>
  );
};
