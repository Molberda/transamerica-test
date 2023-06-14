import React from "react";
import "../Css/Productlist.css";
import ListMap from "../Components/ListMap";

const ProductList = ({ products }) => {
  return (
    <section id="productlist">
      <div className="container productlist__container top__section">
        <div className="row productlist__row">
          <h1 className="productlist__title">All Our Products</h1>
          <select id="filter">
            <option value="INSURANCE">Insurance</option>
            <option value="INVESTMENT">Investment</option>
          </select>
          <div className="productlist__organizer">
            {products.map((item) => (
              <ListMap key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
