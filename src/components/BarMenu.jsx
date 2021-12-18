import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Menu, ModalBg } from "../styles/main";

const BarMenu = ({ sideMenu, setSideMenu }) => {
  const { carrito } = useContext(CarritoContext);
  const { products, priceTotal } = carrito;
  console.log(products);
  const handleClick = () => {
    console.log(sideMenu);
    setSideMenu(!sideMenu);
  };

  return (
    <ModalBg>
      <Menu>
        <div className="titleMenu">
          <p>
            Entregar en: <span>Mexico City Marriott Reforma Hotel...</span>
          </p>
          <div className="closeIcon contentIcon" onClick={handleClick}>
            <i className="icon-closeIcon"></i>
          </div>
        </div>
        {products.map((product) => (
          <div className="productMenu">
            <div className="col-1">
              <div className="avatarProduct ">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="infoProduct">
                <p>{product.name}</p>
                <strong>${product.price}</strong>
              </div>
            </div>
            <div className="col-2 ">
              <div className="count">
                <span>-</span>
                <span>1u</span>
                <span>+</span>
              </div>
            </div>
          </div>
        ))}
        <div className="totalInfo ">
          <span>Vaciar canasta</span>
          <div className="goTopay">
            <span className="countProduct">{products.length}</span>
            <span className="text">Ir a pagar</span>
            <p className="totalPrice">${priceTotal}</p>
          </div>
        </div>
      </Menu>
    </ModalBg>
  );
};

export default BarMenu;
