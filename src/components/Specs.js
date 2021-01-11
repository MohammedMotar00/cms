import React from "react";
import RenderSpecs from "./RenderSpecs";

function Specs({ data, category }) {
  let id, URL, title1, title2;
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

  if (category === "Hårddisk") {
    id = data.harddrive_spec.id;
    URL = "http://localhost:1337/harddrive-specs/";
    title2 = "Prestanda";
  }

  if (category === "Datorchassi") {
    id = data.chassi_spec.id;
    URL = "http://localhost:1337/chassi-specs/";
    title2 = "Expansion/Anslutning";
  }

  if (category === "Kylning") {
    id = data.cpu_cooling_spec.id;
    URL = "http://localhost:1337/cpu-cooling-specs/";
    title2 = "Kylfläns och fläkt";
  }

  if (category === "Moderskort") {
    id = data.motherboard_spec.id;
    URL = "http://localhost:1337/motherboard-specs/";
    title2 = "RAM som stöds";
  }

  return (
    <div>
      <RenderSpecs
        URL={URL}
        id={id}
        title1={title1}
        title2={title2}
        category={category}
      />
    </div>
  );
}

export default Specs;
