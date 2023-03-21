import React from "react";
import { Link, useParams } from "react-router-dom";

export const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "product one",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    src: "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    name: "product Two",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
export const Card = () => {
  return (
    <>
      {data?.map((i) => {
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
