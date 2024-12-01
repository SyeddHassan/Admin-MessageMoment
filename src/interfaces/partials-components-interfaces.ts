import { DateRange } from "react-day-picker";

export interface TableFiltersProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  filteredInput: string;
  setFilteredInput: (input: string) => void;
}

export interface SectionalHeadingProps {
  title: string;
  showDateRangePicker?: boolean;
  className?: string;
  titleClassName?: string;
  actionClassName?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export interface DateRangePickerProps {
  className?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

// DOUGHNUT CHARTS
export interface DoughnutChart01Props {
  label: string;
  percentage: number;
  backgroundColor: [string, string];
}
export interface DoughnutChart02Props {
  chartData: { label: string; percentage: number; color: string }[];
}
export interface DoughnutChart03Props {
  label: string;
  percentage: number;
}

// LINE CHARTS
export interface LineChart01Props {
  chartId: string;
  data: { date: string; value: number }[];
}
export interface LineChart02Props {
  chartId: string;
  data: { date: string; value: number }[];
}
export interface LineChart03Props {
  chartData: {
    name: string;
    value: string | number;
    color: string;
    data: number[];
  }[];
}
export interface LineChart04Props {
  chartId?: string;
  data: {
    date: string;
    value1: number;
    value2: number;
    previousDate: string;
  }[];
}

// BAR CHARTS
export interface BarChart01Props {
  chartId?: string;
  data: { month: string; sessions: number; activations: number }[];
}

// PIE CHART
export interface PieChartProps {
  chartId: string;
  data: { category: string; value: number; color?: string }[];
}

// GAUGR CHART
export interface GaugeChartProps {
  chartId: string;
  value: number;
  axisRange0Color: string;
  axisRange1Color: string;
}
