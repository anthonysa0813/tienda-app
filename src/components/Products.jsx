import React, { useEffect, useState } from "react";
import { CardContainer, ProductContainer } from "../styles/main";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:1337/api/products?populate=image,products`;
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
      <h2>Ofertas</h2>

      <CardContainer className="">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </CardContainer>
    </ProductContainer>
  );
};

export default Products;
