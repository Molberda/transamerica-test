import React from 'react';
import { Link } from 'react-router-dom';

const Burger = () => {
    return (
        <section id="landing" className="burger">
            <div className="container burger__container">
                <div className="row burger__row">
                    <ul className="burger__list">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Burger;
