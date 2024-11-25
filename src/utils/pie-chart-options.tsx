import { ChartOptions, TooltipItem } from "chart.js";

export const PieChartOptions = (): ChartOptions<"doughnut"> => {
  const getLegendPosition = (): "right" | "bottom" => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 ? "right" : "bottom";
    }
    return "right";
  };

  return {
    responsive: true,
    plugins: {
      legend: {
        position: getLegendPosition(),
        labels: {
          color: "#000000",
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
          weight: "bold",
        },
      },
    },
    cutout: "0%",
  };
};
