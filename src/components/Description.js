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
  return (
    <Container style={{ marginTop: "30px" }}>
      <Typography>{description}</Typography>

      {description1 !== null && <Divider style={{ margin: "30px 0" }} />}

      <Typography style={{ fontWeight: "bold" }}>{desc1}</Typography>

      <Typography>{description1}</Typography>

      {description2 !== null && <Divider style={{ margin: "30px 0" }} />}

      <Typography style={{ fontWeight: "bold" }}>{desc2}</Typography>
      <Typography>{description2}</Typography>

      {description3 !== null && <Divider style={{ margin: "30px 0" }} />}

      <Typography style={{ fontWeight: "bold" }}>{desc3}</Typography>
      <Typography>{description3}</Typography>

      <div style={{ margin: "100px 0" }} />
    </Container>
  );
}

export default Description;
