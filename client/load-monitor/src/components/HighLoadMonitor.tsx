import { useContext } from "react";
import { LoadContext } from "context/loadContext";
import { Load } from "models/load";

type LoadState = "high" | "recovered" | "normal";

export const formatHighLoad = (loads: Load[]): LoadState => {
  const isHigh = (load: Load) => load.normalized[0] > 1;

  const currentState = isHigh(loads[loads.length - 1]);

  const getTimeAtCurrentState = (loads: Load[], currentState: boolean) => {
    const loadsCurrentFirst = [...loads].reverse();
    const time = (state: boolean) =>
      loadsCurrentFirst.findIndex((load) => isHigh(load) !== state);
    return time(currentState);
  };

  const timeAtCurrentState = getTimeAtCurrentState(loads, currentState);

  const getText = (highLoad: boolean, time: number): LoadState => {
    const ticksPerMinute = 6;
    const timecap = 1; // I'm aware tresholds says 2 minutes, but introduction says one minute, and it's easier for testing.
    const tickCap = ticksPerMinute * timecap;
    if (time === -1) return "normal"; // There is a gotcha here, but if load is always high, isn't that actually normal?
    if (highLoad && time >= tickCap) return "high";
    if (!highLoad && time < tickCap) return "high";
    if (!highLoad && time > tickCap) return "recovered";
    return "normal";
  };

  const loadState: LoadState = getText(currentState, timeAtCurrentState);

  return loadState;
};

const HighLoadMonitor = () => {
  const loads = useContext(LoadContext);

  const loadState = formatHighLoad(loads);

  return <div className={loadState}>{`Load is ${loadState}`}</div>;
};

export default HighLoadMonitor;
