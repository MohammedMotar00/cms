import React, { useEffect, useState } from "react";

// material ui
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const URL = "http://localhost:1337";

function ImgSlider({ images }) {
  return (
    <Carousel>
      {images !== undefined &&
        images.map((img) => (
          <Paper
            style={{ border: "1px solid red", width: "30%", height: "100px" }}
          >
            <img style={{ width: "100%" }} src={`${URL}${img.url}`} alt="" />
          </Paper>
        ))}
    </Carousel>
  );
}

export default ImgSlider;
