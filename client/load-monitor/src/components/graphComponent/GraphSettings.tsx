interface Props {
  treshold: number;
  setTreshold: (value: number) => void;
}

export const GraphSettings = ({ treshold, setTreshold }: Props) => {
  return (
    <div>
      <input
        type="number"
        name="treshold"
        value={treshold}
        step="0.1"
        onChange={(event) => setTreshold(parseFloat(event.currentTarget.value))}
      />
    </div>
  );
};
