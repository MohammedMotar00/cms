import React from "react";
import CpuSpecs from "./CpuSpecs";
import GpuSpecs from "./GpuSpecs";
import PsuSpecs from "./PsuSpecs";
import RamSpecs from "./RamSpecs";

function Specs({ data, category }) {
  console.log(data, category);

  return (
    <>
      {category === "Grafikkort" && <GpuSpecs id={data.gpu_spec.id} />}
      {category === "Processor" && <CpuSpecs id={data.cpu_spec.id} />}
      {category === "RAM-minne" && <RamSpecs id={data.ram_spec.id} />}
      {category === "Nätaggregat" && <PsuSpecs id={data.psu_spec.id} />}
    </>
  );
}

export default Specs;
