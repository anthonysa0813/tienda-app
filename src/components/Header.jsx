import React from "react";
import { HeaderContainer } from "../styles/main";

const Header = () => {
  return (
    <HeaderContainer>
      <h1 className="">Tiendita</h1>

      <div className="menuHeader ">
        <div className="location">
          <i className="icon-locationIcon"></i>
          <select>
            <option value="">México City Marriott Reforma Hotel...</option>
            <option value="PE">Perú</option>
            <option value="CO">Colombia</option>
            <option value="VE">Venezuela</option>
          </select>
        </div>
        <div className="separateColumn"></div>
        <button>
          <i className="icon-cart"></i>
          <span>5</span>
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
