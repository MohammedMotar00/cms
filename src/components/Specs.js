import React from "react";
import RenderSpecs from "./RenderSpecs";

function Specs({ data, category }) {
  console.log(data);
  console.log(category);

  let id, URL, title1, title2;
  // let URL;
  title1 = "Allmänt";

  if (category === "Grafikkort") {
    id = data.gpu_spec.id;
    URL = "http://localhost:1337/gpu-specs/";
    title2 = "Minne";
  }
  if (category === "Processor") {
    id = data.cpu_spec.id;
    URL = "http://localhost:1337/cpu-specs/";
    title2 = "Processor";
  }
  if (category === "Nätaggregat") {
    id = data.psu_spec.id;
    URL = "http://localhost:1337/psu-specs/";
    title2 = "Nätdel";
  }
  if (category === "RAM-minne") {
    id = data.ram_spec.id;
    URL = "http://localhost:1337/ram-specs/";
    title2 = "Minne";
  }

  console.log(URL);
  console.log(id);

  return (
    <>
      <RenderSpecs
        URL={URL}
        id={id}
        title1={title1}
        title2={title2}
        category={category}
      />
    </>
  );
}

export default Specs;
