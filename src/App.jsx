import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GridContainer } from "./styles/main";

const App = () => {
  return (
    <GridContainer>
      <Header />
      <div className="wrapper">
        <Hero />

        <Products />
      </div>
    </GridContainer>
  );
};

export default App;
