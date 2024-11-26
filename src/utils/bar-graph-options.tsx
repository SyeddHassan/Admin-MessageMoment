import { ChartOptions } from "chart.js";

export const BarGraph01Options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
      },
      title: {
        display: true,
        text: "Hours of Day",
        color: "#000000",
        font: {
          size: 14,
          family: "'Inter', sans-serif",
          weight: "bold",
        },
      },
    },

    y: {
      beginAtZero: true,
      max: 2,
      ticks: {
        stepSize: 1,
      },
      grid: {
        color: "#f0f0f0",
      },
      title: {
        display: true,
        text: "Avg. Site Sessions",
        color: "#000000",
        font: {
          size: 14,
          family: "'Inter', sans-serif",
          weight: "bold",
        },
      },
    },
  },
};
