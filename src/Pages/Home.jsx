import React from 'react';
import Landing from '../Sections/Landing';
import '../Css/Home.css'
import Products from '../Sections/Products';
import Reviews from '../Sections/Reviews';

const Home = ({ products }) => {
    return (
        <main id="home">
            <Landing/>
            <Products products={products}/>
            <Reviews/>
        </main>
    );
}

export default Home;
