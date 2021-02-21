import { useState } from "react";
import FiveMinuteGraph from "./FiveMinuteGraph";
import { GraphSettings } from "./GraphSettings";
import "./graphComponent.css";
import HighLoadMonitor from "./HighLoadMonitor";

const GraphComponent = () => {
  const [treshold, setTreshold] = useState(1);
  const [duration, setDuration] = useState(2);

  return (
    <div className="graphComponent">
      <FiveMinuteGraph treshold={treshold} />
      <GraphSettings
        treshold={treshold}
        setTreshold={setTreshold}
        duration={duration}
        setDuration={setDuration}
      />
      <HighLoadMonitor treshold={treshold} duration={duration} />
    </div>
  );
};

export default GraphComponent;
