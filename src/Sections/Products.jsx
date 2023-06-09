import React from "react";
import ProductMap from "../Components/ProductMap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Products = ({ products }) => {
  return (
    <section id="product">
      <div className="container product__container">
        <div className="row product__row">
          <h1 className="section__title products__title">Our Best Sellers!</h1>
          <div className="product__organizer">
            {products.slice(0,4).map((item) => (
              <ProductMap products={products} item={item} key={item.id} />
            ))}
          </div>
            <Link to='/productlist'>
              <Button>
                <h3>View More</h3>
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
