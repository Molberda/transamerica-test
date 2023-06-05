import React from 'react';
import Landing from '../Sections/Landing';
import '../Css/Home.css'
import Products from '../Sections/Products';

const Home = ({ products }) => {
    return (
        <main id="home">
            <Landing/>
            <Products products={products}/>
        </main>
    );
}

export default Home;
