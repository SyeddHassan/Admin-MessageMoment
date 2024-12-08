export interface TimelineChartProps {
  data: {
    date?: Date;
    name?: string;
    status: "operational" | "partial" | "major";
  }[];
}
