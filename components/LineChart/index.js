import { useEffect, useState } from "react";
import styles from "./LineChart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement
);

export default function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["2013", "2015", "2017", "2019", "2021"],
      datasets: [
        {
          label: "Total Sales of Recordings $ (x 1,000,000)",
          data: ["351.6", "297.5", "425.1", "456.1", "548.8"],
          borderColor: "rgb(53, 16, 235)",
          fill: false,
        },
        {
          label: "Canadian Artists $ (x 1,000,000)",
          data: ["67.5", "73.8", "97.9", "100.7", "119.8"],
          borderColor: "rgb(16, 235, 53)",
          fill: false,
        },
        {
          label: "Non-Canadian Artists $ (x 1,000,000)",
          data: ["284.1", "223.7", "327.2", "355.4", "428.9"],
          borderColor: "rgb(235, 16, 53)",
          fill: false,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Total Sales of Recordings by Canadian and Non-Canadian Artists",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              return "$" + value;
            },
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
