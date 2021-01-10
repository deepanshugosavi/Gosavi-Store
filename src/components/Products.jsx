import React, { useContext, useState } from "react";
import { GiPriceTag, GiClothes } from "react-icons/gi";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { StoreContext } from "../App";

function Products(props) {
  const [item_count, setCount] = useState(0);
  const store = useContext(StoreContext);
  const handleItemAdd = () => {
    setCount(item_count + 1);
    store.addItemInCart();
  };
  const handleItemRemove = () => {
    if (item_count > 0) {
      setCount(item_count - 1);
      store.removeItemInCart();
    }
  };
  return (
    <div className="product__card">
      <div className="product__title">{props.title}</div>
      <img className="product__img" src={props.image} alt="Product Image" />
      <div className="product__category">
        <GiClothes />
        {props.category}
      </div>
      <div className="product__price">
        <GiPriceTag />
        Rs. {props.price}
      </div>
      <div className="product__btn">
        <IoAddSharp
          size="30px"
          color="white"
          className="add__btn"
          id="add"
          onClick={handleItemAdd}
        />
        {item_count === 0 ? "Zero" : item_count}
        <IoRemoveSharp
          size="30px"
          color="white"
          className="remove__btn"
          id="remove"
          onClick={handleItemRemove}
        />
      </div>
    </div>
  );
}

export default Products;
