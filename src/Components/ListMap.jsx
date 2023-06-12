import { InsertLink } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const ListMap = ({ item }) => {
  return (
    <div className="productlist__item">
      <h3 className="productlist__name">{item.name}</h3>
      <h3 className="productlist__type">{item.type}</h3>
      <IconButton>
        <InsertLink />
      </IconButton>
    </div>
  );
};

export default ListMap;
