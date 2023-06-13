import { InsertLink } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ListMap = ({ item }) => {
  return (
    <Link className="productlist__item" to={`/product/${item.id}`}>
      <div className="productlist__info--container">
        <h3 className="productlist__name">{item.name}</h3>
        <h3 className="productlist__type">{item.type}</h3>
      </div>
      <IconButton>
        <InsertLink />
      </IconButton>
    </Link>
  );
};

export default ListMap;
