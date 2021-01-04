import React, { useState, useEffect } from "react";
import axios from "../axios";
import PcComponent from "./PcComponent";

function Fetch({ fetchUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios(fetchUrl ?? "components");
      console.log(request?.config?.url);
      if (request.config.url === "components") {
        const data = request?.data[0];
        let arrData = [];

        arrData.push(
          data?.cpus,
          data?.gpus,
          data?.psus,
          data?.rams,
          data?.motherboards,
          data?.chassis,
          data?.cpu_coolings
        );

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
      <PcComponent />
    </div>
  );
}

export default Fetch;
