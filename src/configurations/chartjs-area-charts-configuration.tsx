import { ChartOptions } from "chart.js";

export const ChartJsAreaChart01Options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#333",
      titleColor: "#fff",
      bodyColor: "#fff",
      cornerRadius: 4,
      animation: {
        duration: 300,
      },
    },
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      zoom: {
        wheel: {
          enabled: true, 
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
        drag: {
          enabled: true,
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: "Inter",
          size: 12,
        },
        color: "#000",
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        font: {
          family: "JetBrains Mono",
          size: 12,
        },
        color: "#000",
      },
      grid: {
        color: "#e5e5e5",
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};
