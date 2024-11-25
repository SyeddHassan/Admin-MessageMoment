import { ColumnDef } from "@tanstack/react-table";

export interface RealTimeMapActivityPropsProps {
  selectedTab: string;
}

export interface User {
  userNo: number;
  country: string;
  countryCode: string;
  city: string;
  longitude: number;
  latitude: number;
}

export interface CountryStats {
  [country: string]: { sessions: number; code: string };
}

export interface RealTimeSessionMonitoringTableProps {
  sessionId: number;
  participants: number;
  sessionType: string;
  location: string;
  locationCode: string;
  duration: string;
}

export type ColumnDefWithMeta<T> = ColumnDef<T> & {
  meta?: {
    className?: string;
  };
};

export interface RealTimeSessionMonitoringTableProps01 {
  selectedTab: string;
  filteredInput: string;
}
