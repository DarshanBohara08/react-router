import React from "react";
import { useParams } from "react-router-dom";
import { newdata } from "./Card";

export const CardDetail = () => {
  const { id } = useParams();
  const dataId = typeof id === "number" ? id : parseInt(id);
  console.log("dataid", dataId);
  const FilterData = newdata?.filter((i) => i.id === dataId);
  return (
    <div>
      {FilterData.map((i) => {
        return (
          <div key={i.id}>
            <img height={100} src={i.src} alt="product" />
            <p>{i.name}</p>
            <p>{i.description}</p>
          </div>
        );
      })}
    </div>
  );
};
