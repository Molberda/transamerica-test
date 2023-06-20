import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/wfg-logo.webp";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="row footer__row">
          <Link to='/'>
            <figure className="footer__logo--wrapper">
              <img src={logo} alt="" className="footer__logo" />
            </figure>
          </Link>
          <ul className="footer__list">
            <li className="footer__list--item">
              <Link to='/products'>Products</Link>
              <div className="hover__effect"></div>
            </li>
            <li className="footer__list--item">
              <Link to='mailto:macias.marcel@gmail.com' target="_blank" rel="noreferrer">Contact</Link>
              <div className="hover__effect"></div>
            </li>
            <li className="footer__list--item">
              <Link to="https://www.worldfinancialgroup.com" target="_blank" rel='noreferrer'>More about us</Link>
              <div className="hover__effect"></div>
            </li>
            {/* <li className="footer__list--item">
              <Link>Products</Link>
              <div className="hover__effect"></div>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
