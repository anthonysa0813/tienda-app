import React from "react";
import { Card } from "../styles/main";

const ProductCard = ({ product }) => {
  const { id, attributes } = product;
  const { name, price, discount, image } = attributes;
  const { data } = image;
  console.log(data.attributes.url);
  return (
    <Card className="">
      <div className="discount">{discount}%dsct.</div>
      <img src={`http://localhost:1337${data.attributes.url}`} alt="" />
      <p>${price}/kg</p>
      <p>{name}</p>
      <button>Agregar</button>
    </Card>
  );
};

export default ProductCard;
