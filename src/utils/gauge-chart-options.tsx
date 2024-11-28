export const GaugeChartOptions = (barWidth: number, isHalfGauge: boolean) => ({
  cutout: `${100 - barWidth}%`,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false, // Disable datalabels for this chart
    },
  },
  circumference: isHalfGauge ? 180 : 360,
  rotation: isHalfGauge ? -90 : 0,
});
