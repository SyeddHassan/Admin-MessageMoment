import { ChartOptions } from "chart.js";

export const ChartJsDoughnutChart01Cofigurations =
  (): ChartOptions<"doughnut"> => {
    return {
      cutout: "85%",
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
    };
  };
