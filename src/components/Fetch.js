import React, { useState, useEffect } from "react";
import axios from "../axios";
import PcComponent from "./PcComponent";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import styling from "./styling";
import { Grid } from "@material-ui/core";

function Fetch({ fetchUrl }) {
  const [data, setData] = useState([]);
  // console.log(data);
  const classes = styling();

  useEffect(() => {
    async function fetchData() {
      const request = await axios(fetchUrl ?? "components");
      // console.log(request?.config?.url);
      if (request.config.url === "components") {
        const data = request?.data[0];
        // console.log(data);
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

        // console.log(arr);

        setData(arr);
      } else {
        setData(request?.data);
      }
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    // <>
    // <main className={classes.content}>
    //   <CssBaseline />
    //   <Container disableGutters maxWidth={false}>
    //     <Typography
    //       component="div"
    //       style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    //     >
    //       {data?.map((pc) => (
    //         <PcComponent
    //           name={pc.name}
    //           category={pc.category}
    //           slug={pc.slug}
    //           image={pc.image}
    //           description={pc.description}
    //           description1={pc.description1}
    //           description2={pc.descriptio2}
    //           description3={pc.descriptio3}
    //           desc1={pc.desc1}
    //           desc2={pc.desc2}
    //           desc3={pc.desc3}
    //           id={pc.id}
    //         />
    //       ))}
    //     </Typography>
    //   </Container>
    // </main>
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container spacing={4} style={{ border: "1px solid blue" }}>
        {data?.map((pc) => (
          <Grid
            item
            key={pc.name}
            xs={12}
            sm={3}
            lg={2}
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
              id={pc.id}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Fetch;
