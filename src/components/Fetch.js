import React, { useState, useEffect } from "react";
import axios from "../axios";
import PcComponent from "./PcComponent";

import styling from "./styling";
import { Grid } from "@material-ui/core";

function Fetch({ fetchUrl }) {
  const [data, setData] = useState([]);
  const classes = styling();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  useEffect(() => {
    let url = localStorage.getItem("url");

    async function fetchData() {
      const request = await axios(url ?? "components");
      if (request.config.url === "components") {
        const data = request?.data[0];
        let arrData = [];
        let arr = [];

        arrData.push(
          data?.cpus,
          data?.gpus,
          data?.psus,
          data?.rams,
          data?.motherboards,
          data?.chassis,
          data?.cpu_coolings
        );

        data.chassis.map((x) => x).map((x) => arr.push(x));
        data.cpu_coolings.map((x) => x).map((x) => arr.push(x));
        data.cpus.map((x) => x).map((x) => arr.push(x));
        data.gpus.map((x) => x).map((x) => arr.push(x));
        data.harddrives.map((x) => x).map((x) => arr.push(x));
        data.motherboards.map((x) => x).map((x) => arr.push(x));
        data.psus.map((x) => x).map((x) => arr.push(x));
        data.rams.map((x) => x).map((x) => arr.push(x));

        shuffleArray(arr);

        setData(arr);
      } else {
        setData(request?.data);
      }
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <main className={classes.content}>
      <Grid container spacing={4}>
        {data?.map((pc) => (
          <Grid
            item
            key={pc.name}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.item}
          >
            <PcComponent
              name={pc.name}
              category={pc.category}
              slug={pc.slug}
              image={pc.image}
              description={pc.description}
              description1={pc.description1}
              description2={pc.descriptio2}
              description3={pc.descriptio3}
              desc1={pc.desc1}
              desc2={pc.desc2}
              desc3={pc.desc3}
              prop1={pc.prop1}
              prop2={pc.prop2}
              prop3={pc.prop3}
              id={pc.id}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Fetch;
