import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CarritoProvider from "./context/CarritoContext";
import LocationProvider from "./context/Location";
import { GridContainer } from "./styles/main";

const App = () => {
  return (
    <CarritoProvider>
      <LocationProvider>
        <GridContainer>
          <Header />
          <div className="wrapper">
            <Hero />

            <Products
              sectionTitle={"Ofertas"}
              urlData={`http://localhost:1337/api/products?populate=image,products`}
            />
            <Products
              sectionTitle={"Los más populares"}
              urlData={`http://localhost:1337/api/populars?populate=image,lacteos`}
            />
          </div>
        </GridContainer>
      </LocationProvider>
    </CarritoProvider>
  );
};

export default App;
