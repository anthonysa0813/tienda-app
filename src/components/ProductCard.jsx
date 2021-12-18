import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Card } from "../styles/main";

const ProductCard = ({ product }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { id, attributes } = product;
  const { name, price, discount, image } = attributes;
  const { data } = image;

  const addProduct = (product) => {
    console.log(product);
    setCarrito({
      ...carrito,
      products: [
        ...carrito.products,
        {
          id: product.id,
          name: product.attributes.name,
          price: product.attributes.price,
          discount: product.attributes.discount,
          image: `http://localhost:1337${product.attributes.image.data.attributes.url}`,
        },
      ],
      priceTotal: carrito.priceTotal + parseInt(product.attributes.price),
    });
  };

  return (
    <Card className="">
      <div className="discount">{discount}%dsct.</div>
      <img src={`http://localhost:1337${data.attributes.url}`} alt="" />
      <p>${price}/kg</p>
      <p>{name}</p>
      <button onClick={() => addProduct(product)}>Agregar</button>
    </Card>
  );
};

export default ProductCard;
