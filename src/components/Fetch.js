import React, { useState, useEffect } from "react";
import axios from "../axios";
import PcComponent from "./PcComponent";

function Fetch({ fetchUrl }) {
  const [data, setData] = useState([]);
  // console.log(data[1]);

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
        // chassis.map((x) => arr.push(x));

        console.log(arr);

        setData(arrData);
      } else {
        setData(request?.data);
      }
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      {data?.map((pc) => {
        // console.log(pc);
      })}
      <PcComponent />
    </div>
  );
}

export default Fetch;
