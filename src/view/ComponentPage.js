import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../axios";

import Container from "@material-ui/core/Container";
import { Divider, Typography } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import ImgSlider from "../components/ImgSlider";
import Info from "../components/Info";
import Breadcrumb from "../components/Breadcrumb";

function ComponentPage() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const { slug, id } = location.state;

    async function fetchData() {
      const request = await axios(`${slug}/${id}`);
      setData(request.data);
    }

    fetchData();
  }, [location]);

  return (
    <>
      <Container
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
            margin: "30px auto",
          }}
        >
          {data.name}
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Breadcrumb category={data.category} slug={data.slug} />

        <ImgSlider images={data.image} />

        <div style={{ margin: "40px 0" }} />

        <Info
          desc1={data.desc1}
          desc2={data.desc2}
          desc3={data.desc3}
          description={data.description}
          description1={data.description1}
          description2={data.description2}
          description3={data.description3}
          category={data.category}
          data={data}
        />
      </Container>
    </>
  );
}

export default ComponentPage;
