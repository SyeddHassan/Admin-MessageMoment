import { DotProps } from "recharts";

export type LineChart02CustomizationProps = DotProps & {
  index: number;
  value?: number;
  dataKey: string;
};
