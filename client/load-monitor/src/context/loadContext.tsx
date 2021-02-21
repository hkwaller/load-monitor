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

export const LoadContext: React.Context<{
  loads: Load[];
  period: number;
  setPeriod: (arg0: number) => void;
}> = createContext({
  loads: [defaultLoad],
  period: 5,
  setPeriod: (arg0: number) => {},
});

const LoadContextPovider = ({ children }: Props) => {
  const [loads, setLoads] = useState([defaultLoad]);
  const [period, setPeriod] = useState(5);

  const getLoads = async (period: number) => {
    const loads = await (
      await Loads.list(Date.now() - period * 60 * 1000)
    ).filter((_, index) => index % 10 === 0);

    loads && setLoads(loads);
  };
  useEffect(() => {
    getLoads(period);
  }, [period]);
  useInterval(() => {
    getLoads(period);
  });
  return (
    <LoadContext.Provider value={{ loads, period, setPeriod }}>
      {children}
    </LoadContext.Provider>
  );
};

export default LoadContextPovider;
