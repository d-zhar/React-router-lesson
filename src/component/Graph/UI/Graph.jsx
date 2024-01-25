import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

import s from "./Graph.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend //переносит в label название линии
  // Tooltip //всплывающая подсказка на графике по точкам
);

const Graph = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Эта неделя",
        data: [2, 4, 3, 1.3, 1.7, 3.5, 7, 4, 9.5, 6, 7, 6],
        borderColor: "aqua", //цвет линии
        pointBorderColor: "aqua", //цвет точки на линии
        pointBorderWidth: 0, //ширина точки
        borderWidth: 5, //ширина линии
        tension: 0.4, //скругление основной линии
      },
      {
        label: "Прошедшая неделя",
        data: [3, 1, 5, 5, 1.7, 2, 5, 3, 7, 6, 9, 3],
        borderDash: [6, 5], //тип линии в масиве длинна и ширина разметки
        borderColor: "violet",
        pointBorderColor: "violet",
        pointBorderWidth: 0,
        tension: 0.4, //скругление основной линии
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <div className={s.Graph}>
      <div style={{ width: "1030px", height: "300px" }}>
        <Line width={1030} height={300} data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Graph;
