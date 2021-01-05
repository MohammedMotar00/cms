import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

function PcComponent({
  name,
  category,
  slug,
  image,
  description,
  description1,
  description2,
  description3,
  desc1,
  desc2,
  desc3,
  id,
}) {
  console.log(id);
  return (
    <React.Fragment>
      <Grid>s</Grid>
      {/* <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container> */}
    </React.Fragment>
  );
}

export default PcComponent;
