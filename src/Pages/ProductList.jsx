import React from 'react';
import '../Css/Productlist.css'
import ListMap from '../Components/ListMap';

const ProductList = ({ products }) => {
    return (
        <section id="productlist">
            <div className="container productlist__container">
                <div className="row productlist__row">
                    <h1 className="productlist__title">All Our Products</h1>
                    <div className="productlist__organizer">
                        {products.map((item) => <ListMap item={item}/> )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;
