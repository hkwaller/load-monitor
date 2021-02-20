import { useContext } from "react";
import { LoadContext } from "context/loadContext";

const CurrentLoad = () => {
  const loads = useContext(LoadContext);

  const currentLoad: string = loads[loads.length - 1].normalized[0].toFixed(2);

  return <div>{`Current load: ${currentLoad}`}</div>;
};

export default CurrentLoad;

// TODO: Check if normalized[0] equals avg of cpus
