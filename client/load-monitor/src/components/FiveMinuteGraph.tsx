import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext } from "react";
import { LoadContext } from "context/loadContext";

interface Props {
  title: string;
}

const FiveMinuteGraph = ({ title }: Props) => {
  const loads = useContext(LoadContext);

  const fiveMinuteValues = loads
    .filter((_, index) => index % 10 === 0)
    .map((load) => [load.timestamp, load.normalized[1]]);

  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    series: [
      {
        type: "spline",
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
