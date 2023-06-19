import { LinkedIn, Mail, PictureAsPdf, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import profile from "../Assets/profile.jpg";
import IUL from '../Assets/Brochure-IUL.pdf'

const InfoContainer = () => {
  return (
    <div className="info__container">
      <h1 className="info__title section__title">
        Hello! <br /> My name is <span className="highlight">Marcel</span>
      </h1>
      <figure className="info__img--wrapper">
        <img src={profile} alt="" className="info__img" />
      </figure>
      <ul className="info__list">
        <li className="info__list--item">
          <a href="https://wa.me/573163402080" target="_blank" rel="noreferrer" className="info__list--link">
            <IconButton>
              <WhatsApp />
            </IconButton>
          </a>
        </li>
        <li className="info__list--item">
          <a href="mailto:macias.marcel@gmail.com" target="_blank" rel="noreferrer" className="info__list--link">
            <IconButton>
              <Mail />
            </IconButton>
          </a>
        </li>
        <li className="info__list--item">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="info__list--link">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
        </li>
        <li className="info__list--item">
          <a href={IUL} target="_blank" rel="noreferrer" className="info__list--link">
            <IconButton>
              <PictureAsPdf />
            </IconButton>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoContainer;
