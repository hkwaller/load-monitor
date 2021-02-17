import Loads from "api/agent";
import { Load } from "models/load";
import { useEffect, useState } from "react";
import useInterval from "hooks/useInterval";

const defaultLoad: Load = {
  normalized: [0],
  timestamp: 0,
  cpus: [[0]],
};

const CurrentLoad = () => {
  const [load, setLoad] = useState(defaultLoad);

  const getLoads = async () => {
    const loads = await Loads.current();
    loads && setLoad(loads);
  };
  useEffect(() => {
    getLoads();
  }, []);
  useInterval(() => {
    getLoads();
  });

  const currentLoad = load.normalized[0];

  return <div>{currentLoad}</div>;
};

export default CurrentLoad;

// TODO: Check if normalized[0] equals avg of cpus
