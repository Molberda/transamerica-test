import React from 'react';
import InfoContainer from '../Components/InfoContainer';
import '../Css/Home.css'
import AboutContainer from '../Components/AboutContainer';

const Home = () => {
    return (
        <section id="landing">
            <div className="container landing__container">
                <div className="row landing__row">
                    <InfoContainer/>
                    <AboutContainer/>
                </div>
            </div>
        </section>
    );
}

export default Home;
