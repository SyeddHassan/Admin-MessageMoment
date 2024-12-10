export interface ChartJsGaugeChartProps {
  percentage: number;
}
export interface ChartJsGaugeChartContextType {
  chart: {
    ctx: CanvasRenderingContext2D;
    chartArea?: { left: number; right: number; top: number; bottom: number };
  };
  dataIndex: number;
}
