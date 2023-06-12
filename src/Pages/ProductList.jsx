import React from 'react';
import '../Css/ProductList.css'

const ProductList = () => {
    return (
        <section id="productlist">
            <div className="container productlist__container">
                <div className="row productlist__row">
                    <h1 className="productlist__title">All Our Products</h1>
                    <div className="productlist__organizer"></div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;
