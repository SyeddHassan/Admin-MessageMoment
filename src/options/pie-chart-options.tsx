import { ChartOptions, TooltipItem } from "chart.js";

export const PieChart01Options = (): ChartOptions<"doughnut"> => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#000",
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            family: "Inter",
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "black",
        cornerRadius: 2,
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
          weight: "bold",
        },
      },
    },
    cutout: "0%",
  };
};
