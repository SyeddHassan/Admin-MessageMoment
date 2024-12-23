import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

export const chartJsBarChart04Options = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false, // No grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // No legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: isDarkTheme ? "#ffffff" : "#000000",
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
          size: 12,
          weight: "normal",
        },
        titleFont: {
          family: "Inter",
          size: 14,
          weight: "bold",
        },
        footerFont: {
          family: "Inter",
          size: 12,
          weight: "normal",
        },
        caretSize: 5,
        caretPadding: 10,
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
      },
      datalabels: {
        display: true,
        align: "start",
        anchor: "end",
        offset: -25,
        color: isDarkTheme ? "#ffffff" : "#000000",
        font: {
          family: "Jetbrains mono",
          size: 14,
          weight: "bold",
        },
      },
    },
  };
};

export const chartJsBarChart05Options = (): ChartOptions<"bar"> => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          pointStyleWidth: 10,
          boxHeight: 7,
          padding: 25,
          color: isDarkTheme ? "#ffffff" : "#000000",
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
        titleColor: isDarkTheme ? "#000000" : "#ffffff",
        bodyColor: isDarkTheme ? "#000000" : "#ffffff",
        footerColor: isDarkTheme ? "#000000" : "#ffffff",
        padding: 10,
        cornerRadius: 5,
        boxWidth: 10,
        boxHeight: 10,
        displayColors: false,
        bodyFont: {
          family: "Jetbrains mono",
          size: 12,
          weight: "normal",
        },
        titleFont: {
          family: "Inter",
          size: 14,
          weight: "bold",
        },
        footerFont: {
          family: "Inter",
          size: 12,
          weight: "normal",
        },
        caretSize: 5,
        caretPadding: 10,
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
      },
      datalabels: {
        display: true,
        align: "start",
        anchor: "end",
        offset: -24,
        color: isDarkTheme ? "#ffffff" : "#000000",
        font: {
          family: "Jetbrains mono",
          size: 14,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            family: "Inter",
            size: 14,
            weight: "normal",
          },
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        border: {
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
      },
    },
  };
};
