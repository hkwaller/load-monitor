import Loads from "api/agent";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Load } from "models/load";
import { useEffect, useState } from "react";
import useInterval from "hooks/useInterval";

interface Props {
  title: string;
}

const defaultLoad: Load = {
  normalized: [0],
  timestamp: 0,
  cpus: [[0]],
};

const FiveMinuteGraph = ({ title }: Props) => {
  const [loads, setLoads] = useState([defaultLoad]);

  const getLoads = async () => {
    const loads = await Loads.list(Date.now() - 5 * 60 * 1000);
    loads && setLoads(loads);
  };
  useEffect(() => {
    getLoads();
  }, []);
  useInterval(() => {
    getLoads();
  });

  const fiveMinuteValues = loads
    .filter((_, index) => index % 10 === 0)
    .map((load) => [load.timestamp, load.normalized[1]]);

  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    series: [
      {
        type: "line",
        name: "Past five minutes",
        data: fiveMinuteValues,
        color: "#25c225",
        zones: [
          {
            value: 1,
            color: "#25c225",
          },
          {
            color: "#ff0000",
          },
        ],
      },
    ],
    xAxis: [
      {
        tickInterval: 1000 * 60,
        type: "datetime",
      },
    ],
    yAxis: [
      {
        title: { text: "Cpu Usage" },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default FiveMinuteGraph;
