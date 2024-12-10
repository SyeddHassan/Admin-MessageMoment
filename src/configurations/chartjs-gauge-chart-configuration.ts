import { ChartOptions } from "chart.js";

export const ChartJsGaugeChartConfigrations = (): ChartOptions<"doughnut"> => {
  return {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "80%",
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
};
