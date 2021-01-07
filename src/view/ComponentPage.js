import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../axios";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import ImgSlider from "../components/ImgSlider";

function ComponentPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  // console.log(data);

  let image = data.image;
  // console.log(image);

  useEffect(() => {
    const { slug, category, id } = location.state;

    async function fetchData() {
      const request = await axios(`${slug}/${id}`);
      // console.log(request.data);

      setData(request.data);
    }

    fetchData();
  }, [location]);

  return (
    <>
      <Container
        style={{
          // backgroundColor: "grey",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid>
          <ImgSlider images={data.image} />
        </Grid>
      </Container>
    </>
  );
}

export default ComponentPage;
