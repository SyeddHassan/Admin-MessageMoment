import { ComponentType } from "react";
import { DateRange } from "react-day-picker";

// TABLE FILTERS
export interface FilterButtons01Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons02Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons03Props {
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

export interface LoadingProps {
  containerClassName?: string;
  Icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
}

// REAL TIME MAP
export interface RealTimeMapProps {
  MapData: {
    countryName: string;
    countryCode: string;
    session: number;
    latitude: number;
    longitude: number;
  }[];
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

// BAR CHARTS
export interface BarChart01Props {
  chartId?: string;
  selectedTab?: string;
  data: {
    date: string;
    users: number;
    sessions: number;
    projectMode: number;
  }[];
}
