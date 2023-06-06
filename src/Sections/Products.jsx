import React from "react";
import ProductMap from "../Components/ProductMap";

const Products = ({ products }) => {
  return (
    <section id="product">
      <div className="container product__container">
        <div className="row product__row">
          <div className="product__organizer">
            <div className="product">
              {products.map((item) => (
                <ProductMap products={products} item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
