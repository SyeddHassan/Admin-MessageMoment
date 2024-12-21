import { ChartOptions, TooltipItem } from "chart.js";
import { useTheme } from "next-themes";

export const ChartJsPieChart01Cofigurations = (): ChartOptions<"doughnut"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: isDarkTheme ? "#ffffff" : "#000000",
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
        backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
        borderColor: "transparent",
        borderWidth: 0,
        cornerRadius: 8,
        padding: 10,
        displayColors: false,
        multiKeyBackground: "#fff",
        titleMarginBottom: 0,
        titleFont: {
          size: 0,
        },
        bodyFont: {
          family: "Inter",
          size: 12,
        },
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        caretSize: 0,
        callbacks: {
          label: function (tooltipItem: TooltipItem<"doughnut">) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },

      datalabels: {
        display: false,
      },
    },
    cutout: "0%",
  };
};
