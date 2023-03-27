import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./Card";

export const CardDetail = () => {
  const { id } = useParams();
  const dataId = typeof id === "string" ? parseInt(id) : id;
  const FData = data?.filter((i) => i.id === dataId);
  return (
    <>
      {FData?.map((i) => {
        return (
          <div>
            <img height={200} alt="headphone" src={i.src} />
            <p>{i.name}</p>
            <p>{i.description}</p>
          </div>
        );
      })}
    </>
  );
};
