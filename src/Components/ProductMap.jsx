import React from "react";

const ProductMap = () => {
  return (
    <div className="product">
      {products.map((item) => (
        <figure className="product__wrapper">
          <img src={item.img} alt="" className="product__img" />
        </figure>
      ))}
    </div>
  );
};

export default ProductMap;
