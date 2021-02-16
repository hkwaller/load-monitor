import Loads from "api/agent";
import { Load } from "models/load";
import { useEffect, useState } from "react";

const CurrentLoad = () => {
  const [load, setLoad] = useState({} as Load);
  useEffect(() => {
    async function getLoad() {
      const load = await Loads.current();
      load && setLoad(load);
      console.log(load.normalized[0]);
    }
    getLoad();
  }, []);
  return <div>{load.normalized && load.normalized[0]}</div>;
};

export default CurrentLoad;
