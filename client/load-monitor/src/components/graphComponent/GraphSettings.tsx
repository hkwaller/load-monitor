import { LoadContext } from "context/loadContext";
import { useContext } from "react";

interface Props {
  treshold: number;
  // det stavas Threshold :)
  setTreshold: (value: number) => void;
  duration: number;
  setDuration: (value: number) => void;
}

export const GraphSettings = ({
  treshold,
  setTreshold,
  duration,
  setDuration,
}: Props) => {
  const { period, setPeriod } = useContext(LoadContext);
  return (
    // behöver du div här för layout eller håller ett fragment?
    <div>
      <div className="inputContainer">
        <label htmlFor="treshold">Treshold</label>
        <input
          type="number"
          name="treshold"
          className="graphInput"
          value={treshold}
          // föredrar att ha siffror i {} hellre en strings även om string
          // är helt lov här
          step="0.1"
          onChange={(event) =>
            setTreshold(parseFloat(event.currentTarget.value))
          }
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="duration">Event duration</label>
        <input
          type="number"
          name="duration"
          className="graphInput"
          value={duration}
          step="0.5"
          onChange={(event) =>
            setDuration(parseFloat(event.currentTarget.value))
          }
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="duration">Graph period</label>
        <input
          type="number"
          name="period"
          className="graphInput"
          value={period}
          step="1"
          onChange={(event) => setPeriod(parseFloat(event.currentTarget.value))}
        />
      </div>
    </div>
  );
};
