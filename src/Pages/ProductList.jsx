import React from "react";
import "../Css/Productlist.css";
import ListMap from "../Components/ListMap";
import { useState } from "react";

const ProductList = ({ products: initialproducts }) => {

    const [ products, setProducts ] = useState(initialproducts);
    const insurance = initialproducts.filter((item) => item.type === 'insurance')
    function filterItems(filter){
        if (filter === 'INSURANCE'){
            setProducts(insurance)
        }
    }

  return (
    <section id="productlist">
      <div className="container productlist__container top__section">
        <div className="row productlist__row">
          <h1 className="productlist__title">All Our Products</h1>
          <select id="filter" onChange={(e) => filterItems(e.target.value)}>
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
