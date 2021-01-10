import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

function Breadcrumb({ category, slug }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        to="/"
        onClick={() => localStorage.setItem("url", "components")}
      >
        Komponenter
      </Link>

      <Link onClick={() => localStorage.setItem("url", slug)} to="/">
        {category}
      </Link>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
