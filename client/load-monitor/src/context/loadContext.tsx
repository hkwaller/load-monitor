import { createContext, useEffect, useState } from "react";
import { Load } from "models/load";
import Loads from "api/agent";
import useInterval from "hooks/useInterval";
import React from "react";

const defaultLoad: Load = {
  normalized: [0],
  timestamp: 0,
  cpus: [[0]],
};

interface Props {
  children: React.ReactNode;
}

export const LoadContext: React.Context<Load[]> = createContext([defaultLoad]);

const LoadContextPovider = ({ children }: Props) => {
  const [loads, setLoads] = useState([defaultLoad]);

  const getLoads = async () => {
    const loads = await (await Loads.list(Date.now() - 5 * 60 * 1000)).filter(
      (_, index) => index % 10 === 0
    );

    loads && setLoads(loads);
  };
  useEffect(() => {
    getLoads();
  }, []);
  useInterval(() => {
    getLoads();
  });
  return <LoadContext.Provider value={loads}>{children}</LoadContext.Provider>;
};

export default LoadContextPovider;
