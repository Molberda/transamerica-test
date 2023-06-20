import React from "react";
import { Link } from "react-router-dom";

const ProductMap = ({ item }) => {
  return (
    <div className="product">
      <Link to={`/product/${item.id}`} >
        <figure className="product__wrapper">
          <img src={item.img} alt="" className="product__img" />
          <div className="product__info--container">
            <h2 className="product__title">{item.name}</h2>
          </div>
        </figure>
      </Link>
    </div>
  );
};

export default ProductMap;
