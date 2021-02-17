import { useContext } from "react";
import { LoadContext } from "context/loadContext";

const CurrentLoad = () => {
  const loads = useContext(LoadContext);

  const currentLoad = loads[loads.length - 1].normalized[0];

  return <div>{currentLoad}</div>;
};

export default CurrentLoad;

// TODO: Check if normalized[0] equals avg of cpus
