import React from 'react';
import Landing from '../Sections/Landing';
import '../Css/Home.css'
import Product from '../Sections/Product';

const Home = () => {
    return (
        <main id="home">
            <Landing/>
            <Product/>
        </main>
    );
}

export default Home;
