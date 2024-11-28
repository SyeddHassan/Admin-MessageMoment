import { ChartOptions, TooltipItem } from "chart.js";

export interface CPUData {
  timestamp: string;
  usage: number;
}

// Memory graph.

export const memoryGraphOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 750,
    easing: "easeInOutQuart",
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 15,
        font: {
          size: 11,
          family: "Inter",
        },
        boxWidth: 8,
        boxHeight: 8,
      },
    },
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      titleColor: "#1a202c",
      bodyColor: "#4a5568",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: 1,
      padding: 12,
      bodyFont: {
        size: 12,
        family: "Inter",
      },
      titleFont: {
        size: 13,
        family: "Inter",
      },
      callbacks: {
        label: (context: TooltipItem<"line">) => {
          return `${context.dataset.label}: ${context.raw} MB`;
        },
      },
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(113, 128, 150, 0.2)",
        drawTicks: true,
      },
      ticks: {
        font: {
          size: 12,
          family: "Inter",
        },
        color: "#718096",
        padding: 8,
      },
    },
    y: {
      grid: {
        display: true,
        color: "rgba(113, 128, 150, 0.5)",
        drawTicks: false,
      },
      title: {
        display: true,
        text: "MB",
        font: {
          size: 14,
          family: "Inter",
        },
        color: "#2d3748",
        padding: { bottom: 10 },
      },
      min: 0,
      max: 400,
      ticks: {
        font: {
          size: 12,
          family: "Inter",
        },
        color: "#718096",
        padding: 8,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 6,
      hoverBorderWidth: 2,
    },
    line: {
      borderWidth: 2,
    },
  },
};