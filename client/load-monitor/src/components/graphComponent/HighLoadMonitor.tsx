import { useContext, useEffect } from "react";
import { LoadContext } from "context/loadContext";
import { Load } from "models/load";
import { toast, ToastOptions } from "react-toastify";

type LoadState = "high" | "recovered" | "recovering" | "normal";

interface Props {
  treshold: number;
  duration: number;
}

export const formatHighLoad = (
  loads: Load[],
  treshold: number,
  duration: number
): LoadState => {
  const isHigh = (load: Load) => load.normalized[0] > treshold;

  const currentState = isHigh(loads[loads.length - 1]);

  const getTimeAtCurrentState = (loads: Load[], currentState: boolean) => {
    const loadsCurrentFirst = [...loads].reverse();
    const time = (state: boolean) =>
      loadsCurrentFirst.findIndex((load) => isHigh(load) !== state);
    return time(currentState);
  };

  const timeAtCurrentState = getTimeAtCurrentState(loads, currentState);

  const getLoadDescription = (highLoad: boolean, time: number): LoadState => {
    const ticksPerMinute = 6;
    const timecap = duration;
    const tickCap = ticksPerMinute * timecap;
    if (time === -1) return "normal"; // There is a gotcha here, but if load is always high, isn't that actually normal?
    if (highLoad && time >= tickCap) return "high";
    if (!highLoad && time < tickCap) return "recovering";
    if (!highLoad && time >= tickCap) return "recovered";
    return "normal";
  };

  const loadState: LoadState = getLoadDescription(
    currentState,
    timeAtCurrentState
  );

  return loadState;
};

const HighLoadMonitor = ({ treshold, duration }: Props) => {
  const loads = useContext(LoadContext);

  const loadState = formatHighLoad(loads, treshold, duration);

  useEffect(() => {
    const toastOptions: ToastOptions = {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (loadState === "high") {
      toast.error("🚨 Warning, CPU load is high! 🚨", toastOptions);
    } else if (loadState === "recovered") {
      toast.info("Phew.. CPU load has recovered.", toastOptions);
    }
  }, [loadState]);

  return <></>;
};

export default HighLoadMonitor;
