import React from "react";
import { Link } from "react-router-dom";
import '../Css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="row footer__row">
          <figure className="footer__logo--wrapper">
            <img src="" alt="" className="footer__logo" />
          </figure>
          <ul className="footer__list">
            <li className="footer__list--item">
              <Link>Products</Link>
              <div className="hover__effect"></div>
            </li>
            <li className="footer__list--item">
              <Link>Contact</Link>
              <div className="hover__effect"></div>
            </li>
            <li className="footer__list--item">
              <Link>More about us</Link>
              <div className="hover__effect"></div>
            </li>
            <li className="footer__list--item">
              <Link>Products</Link>
              <div className="hover__effect"></div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
