interface Props {
  treshold: number;
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
  return (
    <div>
      <div className="inputContainer">
        <label htmlFor="treshold">Treshold</label>
        <input
          type="number"
          name="treshold"
          className="graphInput"
          value={treshold}
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
    </div>
  );
};
