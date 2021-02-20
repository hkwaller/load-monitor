import { useState } from "react";
import FiveMinuteGraph from "./FiveMinuteGraph";
import { GraphSettings } from "./GraphSettings";

const GraphComponent = () => {
  const [treshold, setTreshold] = useState(1);

  return (
    <>
      <FiveMinuteGraph treshold={treshold} />
      <GraphSettings treshold={treshold} setTreshold={setTreshold} />
    </>
  );
};

export default GraphComponent;
