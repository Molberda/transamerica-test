import React from "react";

const ProductMap = ({ item }) => {
  return (
    <div className="product">
      <figure className="product__wrapper">
        <img src={item.img} alt="" className="product__img" />
        <div className="product__info--container">
          <h2 className="product__title">{item.name}</h2>
        </div>
      </figure>
    </div>
  );
};

export default ProductMap;
