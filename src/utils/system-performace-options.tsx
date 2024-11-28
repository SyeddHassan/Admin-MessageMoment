import { ChartOptions } from "chart.js";

export const ServerActivityOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 30,
        boxWidth: 6,
        boxHeight: 6,
        font: { size: 15 },
      },
    },
    datalabels: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 90,
        minRotation: 90,
        font: {
          size: 11,
        },
        padding: 5,
      },
    },
  },
};

// Transaction/sec databse chart options
export const DatabaseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index" as const,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#666",
      },
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        color: "#666",
      },
      min: 0,
      max: 400,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    datalabels: {
      display: false,
    },
    title: {
      display: true,
      text: "Database",
      color: "#333",
      font: {
        size: 16,
      },
    },
  },
};

// CPU Usage options
export const CpuUsageOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  interaction: {
    intersect: false,
    mode: "nearest",
  },
  scales: {
    x: {
      type: "category",
      grid: { display: false },
      ticks: {
        maxRotation: 0,
        font: { size: 10 },
        maxTicksLimit: 6,
      },
    },
    y: {
      grid: { color: "rgba(0, 0, 0, 0.1)" },
      min: 0,
      max: 40,
      ticks: {
        stepSize: 10,
        font: { size: 10 },
      },
      title: {
        display: true,
        text: "Percent",
        font: { size: 12, weight: "bold" },
        padding: 10,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      align: "center",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 30,
        boxWidth: 6,
        boxHeight: 6,
        font: { size: 15 },
      },
    },
    title: {
      display: true,
      text: "CPU Usage (%)",
      font: { size: 14, weight: "normal" },
    },
    datalabels: {
      display: false,
    },
  },
};
