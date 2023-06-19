import { LinkedIn, Mail, PictureAsPdf, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import profile from '../Assets/profile.jpg'

const InfoContainer = () => {
  return (
    <div className="info__container">
      <h1 className="info__title section__title">Hello! <br /> My name is <span className="highlight">Marcel</span></h1>
      <figure className="info__img--wrapper">
        <img src={profile} alt="" className="info__img" />
      </figure>
      <ul className="info__list">
        <li className="info__list--item">
            <IconButton>
                <WhatsApp/>
            </IconButton>
        </li>
        <li className="info__list--item">
            <IconButton>
                <Mail/>
            </IconButton>
        </li>
        <li className="info__list--item">
            <IconButton>
                <LinkedIn/>
            </IconButton>
        </li>
        <li className="info__list--item">
            <IconButton>
                <PictureAsPdf/>
            </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default InfoContainer;
