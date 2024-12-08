import { ComponentType } from "react";
import { DateRange } from "react-day-picker";

// FILTERS BUTTONS
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
export interface FilterButtons04Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

// SECTIONAL HEADING
export interface SectionalHeadingProps {
  title: string;
  showDateRangePicker?: boolean;
  className?: string;
  titleClassName?: string;
  actionClassName?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

// DATE RANGE PICKER
export interface DateRangePickerProps {
  className?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

// LOADING PROPS
export interface LoadingProps {
  containerClassName?: string;
  Icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
}
