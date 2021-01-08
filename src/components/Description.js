import { Container, Divider, Typography } from "@material-ui/core";
import React from "react";

function Description({
  desc1,
  desc2,
  desc3,
  description,
  description1,
  description2,
  description3,
}) {
  // console.log(description);
  return (
    <Container>
      <Typography>{description}</Typography>
      <Divider />
      <Typography style={{ fontWeight: "bold" }}>{desc1}</Typography>
      <Typography>{description1}</Typography>
      <Divider />
      <Typography style={{ fontWeight: "bold" }}>{desc2}</Typography>
      <Typography>{description2}</Typography>
      <Divider />
      <Typography style={{ fontWeight: "bold" }}>{desc3}</Typography>
      <Typography>{description3}</Typography>
      <Divider />
    </Container>
  );
}

export default Description;
