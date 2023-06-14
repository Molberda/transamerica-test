import React from "react";
import "../Css/Productlist.css";
import ListMap from "../Components/ListMap";
import { useState } from "react";

const ProductList = ({ products: initialproducts }) => {
  const [products, setProducts] = useState(initialproducts);
  const insurance = initialproducts.filter((item) => item.type === "insurance");
  const investment = initialproducts.filter(
    (item) => item.type === "investment"
  );
  const annuity = initialproducts.filter((item) => item.type === "annuity");

  function filterItems(filter) {
    if (filter === "INSURANCE") {
      setProducts(insurance);
    }
    if (filter === "INVESTMENT") {
      setProducts(investment);
    }
    if (filter === "ANNUITY") {
      setProducts(annuity);
    }
    if (filter === "ALL") {
      setProducts(initialproducts);
    }
  }

  return (
    <section id="productlist">
      <div className="container productlist__container top__section">
        <div className="row productlist__row">
          <h1 className="productlist__title">All Our Products</h1>
          <select
            id="filter"
            defaultValue="ALL"
            onChange={(e) => filterItems(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="INSURANCE">Insurance</option>
            <option value="INVESTMENT">Investment</option>
            <option value="ANNUITY">Annuity</option>
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
