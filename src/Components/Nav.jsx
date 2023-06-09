import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import logo from "../Assets/wfg-logo.webp";
import "../Css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.querySelector("body").classList.toggle("menuOpen");
  }

  return (
    <nav>
      <Link to='/'>
        <figure className="nav__logo--wrapper">
          <img src={logo} alt="" />
        </figure>
      </Link>
      <IconButton onClick={openMenu}>
        <Menu />
      </IconButton>
    </nav>
  );
};

export default Nav;
