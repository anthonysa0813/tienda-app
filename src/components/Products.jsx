import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { CardContainer, ProductContainer } from "../styles/main";
import ProductCard from "./ProductCard";

const Products = ({ urlData, sectionTitle }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = urlData;
    getProducts(url);
    console.log(products);
  }, []);

  const getProducts = async (url) => {
    const response = await fetch(url);
    const { data } = await response.json();
    setProducts(data);
  };

  return (
    <ProductContainer className="">
      <h2>{sectionTitle}</h2>

      <CardContainer className="mb-3">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </CardContainer>
    </ProductContainer>
  );
};

export default Products;
