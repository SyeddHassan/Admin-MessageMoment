import { ChartOptions, TooltipItem } from "chart.js";

export const ChartJsDoughnutChart01Options = (): ChartOptions<"doughnut"> => {
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

export const ChartJsDoughnutChart02Options = (): ChartOptions<"doughnut"> => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#000",
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
        },
      },

      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        titleColor: "#000000",
        titleFont: {
          family: "Inter",
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          family: "Inter",
          size: 12,
        },
        bodyColor: "#000000",
        boxPadding: 5,
        callbacks: {
          label: function (tooltipItem: TooltipItem<"doughnut">) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },

      datalabels: {
        display: true,
        color: "#fff",
        formatter: (value: number) => `${value.toFixed(2)}%`,
        font: {
          family: "JetBrains Mono, sans-serif",
          size: 12,
          weight: "normal",
        },
      },
    },
    cutout: "30%",
  };
};
