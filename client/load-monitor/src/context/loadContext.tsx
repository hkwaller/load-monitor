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
  // du definerar en ny setPeriod under? kan vara jag som är rostig på Context men.
  // och varför returnerar den tomt objekt och inte void?
  setPeriod: (arg0: number) => {},
});

const LoadContextPovider = ({ children }: Props) => {
  const [loads, setLoads] = useState([defaultLoad]);
  const [period, setPeriod] = useState(5);

  const getLoads = async (period: number) => {
    // tycker denna är lite svårläst. och behöver du verkligen await på
    // await här?

    // så har du en lokal state variabel som heter loads, då föredrar
    // jag att inte återvända den i samma komponent
    const loads = await (
      await Loads.list(Date.now() - period * 60 * 1000)
    ).filter((_, index) => index % 10 === 0);

    loads && setLoads(loads);
  };

  // lite mer spacing hade varit fint här 🕺
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
