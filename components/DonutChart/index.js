import { useEffect, useState } from "react";
import styles from "./DonutChart.module.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  DoughnutController,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  DoughnutController
);

export default function DonutChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Musical compact discs",
        "Digital downloads - albums",
        "Digital downloads - singles",
        "Other formats",
      ],
      datasets: [
        {
          label: "Sales $ (x 1,000,000)",
          data: [40.0, 10.3, 23.7, 67.8],
          backgroundColor: [
            "rgb(53, 16, 235)",
            "rgb(120, 178, 241)",
            "rgb(180, 213, 255)",
            "rgb(255, 0, 0)",
          ],
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
          text: "Sales of Musical Recordings in Canada (2013-2021)",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
