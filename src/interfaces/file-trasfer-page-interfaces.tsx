import { ColumnDef } from "@tanstack/react-table";

export interface RealTimeFileTransferStatusTableProps01 {
  selectedTab: string;
  filteredInput: string;
}

export interface RealTimeFileTransferStatusTableProps02 {
  sessionId: number;
  sessionType: string;
  file: string;
  fileType: string;
  status: string;
  size: string;
}

export type ColumnDefWithMeta<T> = ColumnDef<T> & {
  meta?: {
    className?: string;
  };
};
