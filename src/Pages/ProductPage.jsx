import React, { useEffect } from 'react';
import '../Css/Productpage.css'
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    const { id } = useParams()
    const product = products.find((product) => product.id === +id)

    return (
        <section id="productpage">
            <div className="container productpage__container top__section">
                <div className="row productpage__row">
                    <h2 className="productpage__title">{product.name}</h2>
                </div>
            </div>
        </section>
    );
}

export default ProductPage;
