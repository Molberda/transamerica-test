import React, { useEffect } from "react";
import "../Css/Productpage.css";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Mail, PictureAsPdf } from "@mui/icons-material";
import IUL from "../Assets/Brochure-IUL.pdf";

const ProductPage = ({ products }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const { id } = useParams();
  const product = products.find((product) => product.id === +id);

  return (
    <section id="productpage">
      <div className="container productpage__container top__section">
        <div className="row productpage__row">
          <h1 className="productpage__title section__title">{product.name}</h1>
          <div className="productpage__organizer">
            <h4 className="productpage__subtitle">{product.type}</h4>
            <p className="productpage__text">{product.info}</p>
            <ul className="productpage__icon--list">
              <h4>Extra information:</h4>
              <li className="productpage__icon">
                <a href={IUL} target="_blank" rel="noreferrer">
                  <IconButton>
                    <PictureAsPdf />
                  </IconButton>
                </a>
              </li>
              <li className="productpage__icon">
                <a href='mailto:macias.marcel@gmail.com' target="_blank" rel="noreferrer">
                  <IconButton>
                    <Mail />
                  </IconButton>
                </a>
              </li>
            </ul>
            <figure className="productpage__img--wrapper">
              <img src={product.img} alt="" className="productpage__img" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
