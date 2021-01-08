import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

function Breadcrumb({ category, slug }) {
  console.log(slug);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/">
        Komponenter
      </Link>

      <Link
        to={{
          pathname: "/",
          state: {
            slug: slug,
          },
        }}
      >
        {category}
      </Link>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
