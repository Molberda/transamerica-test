import React, { useEffect } from 'react';
import Landing from '../Sections/Landing';
import '../Css/Home.css'
import Products from '../Sections/Products';
import Reviews from '../Sections/Reviews';

const Home = ({ products, reviews }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    return (
        <main id="home">
            <Landing/>
            <Products products={products}/>
            <Reviews reviews={reviews}/>
        </main>
    );
}

export default Home;
