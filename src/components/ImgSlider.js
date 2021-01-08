import React from "react";

// material ui
import Carousel from "react-material-ui-carousel";
import { Grid, Paper } from "@material-ui/core";

const URL = "http://localhost:1337";

function ImgSlider({ images }) {
  return (
    <div>
      <Grid item xs={12}>
        <Carousel>
          {images !== undefined &&
            images.map((img) => (
              <Paper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  objectFit: "contain",
                }}
              >
                <img
                  style={{
                    height: "250px",
                    objectFit: "contain",
                  }}
                  src={`${URL}${img.url}`}
                  alt=""
                />
              </Paper>
            ))}
        </Carousel>
      </Grid>
    </div>
  );
}

export default ImgSlider;
