import { ChartOptions } from "chart.js";

export const LineChart01Options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },

  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0.3,
    },
  },
};

export const lineChart02Options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark tooltip background
      titleColor: "#fff", // Title color for tooltip
      bodyColor: "#fff", // Body text color
    },
    datalabels: {
      display: false, // Disable data labels
    },
  },
  interaction: {
    mode: "nearest", // Ensure proper literal type
    intersect: false, // Show tooltip when hovering near points, not intersecting
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove gridlines from the X-axis
      },
      ticks: {
        color: "#666", // Set tick label color
      },
    },
    y: {
      grid: {
        display: true, // Show gridlines for the Y-axis
      },
      ticks: {
        color: "#666", // Set tick label color
      },
    },
  },
};