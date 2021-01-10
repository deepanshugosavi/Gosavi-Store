import { useObserver } from "mobx-react";
import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { StoreContext } from "../App";

function Header(props) {
  const store = useContext(StoreContext);
  return useObserver(() => {
    return (
      <div className="header__container">
        Gosavi's Store
        <div className="cart__items">
          <div className="item__count">
            {store.totalItemsInCart === 0 ? "Zero" : store.totalItemsInCart}
          </div>
          <FaOpencart color="white" size="30px" />
        </div>
      </div>
    );
  });
}

export default Header;
