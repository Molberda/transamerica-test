import React from 'react';
import InfoContainer from '../Components/InfoContainer';
import AboutContainer from '../Components/AboutContainer';

const Landing = () => {
    return (
        <section id="landing">
            <div className="container landing__container top__section">
                <div className="row landing__row">
                    <InfoContainer/>
                    <AboutContainer/>
                </div>
            </div>
        </section>
    );
}

export default Landing;
