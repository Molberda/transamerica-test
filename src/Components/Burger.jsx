import React from "react";
import { Link } from "react-router-dom";
import "../Css/Burger.css";
import { Button } from "@mui/material";

const Burger = () => {

  function close(){
    document.body.classList.remove('menuOpen')
  }
  return (
    <section id="burger">
      <div className="container burger__container">
        <div className="row burger__row">
          <ul className="burger__list">
            <li className="burger__list--item">
              <Button onClick={close}>
                <Link to="/">
                  <h2>Home</h2>
                </Link>
              </Button>
            </li>
            <li className="burger__list--item">
              <Button onClick={close}>
                <Link to="/productlist">
                  <h2>Products</h2>
                </Link>
              </Button>
            </li>
            <li className="burger__list--item">
              <Button onClick={close}>
                <Link to="/">
                  <h2>Home</h2>
                </Link>
              </Button>
            </li>
            <li className="burger__list--item">
              <Button onClick={close}>
                <Link to="/">
                  <h2>Home</h2>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Burger;
