import { ColumnDef } from "@tanstack/react-table";

export interface RealTimeFileTransferStatusTableProps01 {
  selectedTab: string;
  filteredInput: string;
}

export interface RealTimeFileTransferStatusTableProps02 {
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
