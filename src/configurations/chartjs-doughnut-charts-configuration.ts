import { ChartOptions, TooltipItem } from "chart.js";
import { useTheme } from "next-themes";

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

export const ChartJsDoughnutChart02Cofigurations =
  (): ChartOptions<"doughnut"> => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";

    return {
      responsive: true,
      maintainAspectRatio: false,
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
          display: true,
          color: "#fff",
          formatter: (value: number) => `${value}%`,
          font: {
            family: "JetBrains Mono, sans-serif",
            size: 12,
            weight: "normal",
          },
        },
      },
      cutout: "30%",
      elements: {
        arc: {
          borderWidth: 5,
          borderColor: isDarkTheme ? "#000000" : "#ffffff",
          hoverBackgroundColor: (ctx) => {
            const raw = ctx.raw as { backgroundColor: string };
            return raw.backgroundColor;
          },
          hoverBorderColor: (ctx) => {
            const raw = ctx.raw as { borderColor: string };
            return raw.borderColor;
          },
        },
      },
    };
  };

export const ChartJsDoughnutChart03Configurations =
  (): ChartOptions<"doughnut"> => {
    return {
      cutout: "80%",
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
