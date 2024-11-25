export const LineChart01Options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },

  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0.3,
    },
  },
};
