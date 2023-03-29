import { useEffect, useState } from "react";
import styles from "./BarChart.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["2013", "2015", "2017", "2019", "2021"],
      datasets: [
        {
          label: "Operating Revenue (x 1,000,000)",
          data: [510.4, 462.0, 589.7, 624.0, 728.1],
          backgroundColor: "rgba(53, 16, 235, 0.2)",
          borderColor: "rgb(53, 16, 235)",
          borderWidth: 1,
        },
        {
          label: "Operating Expenses (x 1,000,000)",
          data: [487.8, 438.3, 552.2, 573.6, 659.6],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        {
          label: "Salaries, Wages, Commissions and Benefits (x 1,000,000)",
          data: [64.3, 62.9, 66.2, 78.1, 81.8],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
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
          text: "Operating Revenue, Expenses and Salaries from 2013 to 2021",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
              return "$" + value.toLocaleString();
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Dollars (x 1,000,000)",
          },
        },
        x: {
          stacked: false,
          scaleLabel: {
            display: true,
            labelString: "Year",
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
