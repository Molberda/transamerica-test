import React from "react";
import ProductMap from "../Components/ProductMap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Products = ({ products }) => {
  return (
    <section id="product">
      <div className="container product__container">
        <div className="row product__row">
          <div className="product__organizer">
            {products.map((item) => (
              <ProductMap products={products} item={item} key={item.id} />
            ))}
            <Link>
              <Button>
                <h3>View All Products</h3>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
