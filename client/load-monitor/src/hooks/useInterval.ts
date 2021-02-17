import { useRef, useEffect } from "react";

function useInterval(callback: () => void) {
  const delayMS = 10000;
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== "undefined") {
        savedCallback?.current();
      }
    }

    const id = setInterval(tick, delayMS);

    return () => clearInterval(id);
  }, []);
}

export default useInterval;
