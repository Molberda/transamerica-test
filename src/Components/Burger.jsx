import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Burger.css'

const Burger = () => {
    return (
        <section id="burger">
            <div className="container burger__container">
                <div className="row burger__row">
                    <ul className="burger__list">
                        <li className='burger__list--item'>
                            <Link to='/'><h2>Home</h2></Link>
                        </li>
                        <li className='burger__list--item'>
                            <Link to='/'><h2>Home</h2></Link>
                        </li>
                        <li className='burger__list--item'>
                            <Link to='/'><h2>Home</h2></Link>
                        </li>
                        <li className='burger__list--item'>
                            <Link to='/'><h2>Home</h2></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Burger;
