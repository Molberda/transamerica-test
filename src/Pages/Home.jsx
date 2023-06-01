import React from 'react';
import InfoContainer from '../Components/InfoContainer';
import '../Css/Home.css'

const Home = () => {
    return (
        <section id="landing">
            <div className="container landing__container">
                <div className="row landing__row">
                    <InfoContainer/>
                </div>
            </div>
        </section>
    );
}

export default Home;
