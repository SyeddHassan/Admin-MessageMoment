export const chart_config = {
  data_point: 30,
  update_interval: 1000,
  min_value: 5,
  max_value: 40,
  color: 0x3b82f6,
};

export const generateCPUData = (lastValue = 10): number => {
  const change = (Math.random() - 0.5) * 10;
  const newValue = lastValue + change;

  return Math.max(
    chart_config.min_value,
    Math.min(chart_config.max_value, newValue)
  );
};
