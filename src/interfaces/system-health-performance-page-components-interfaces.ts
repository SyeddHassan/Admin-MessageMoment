export type SystemStatusTypes = "operational" | "partial" | "major";

export interface SystemStatusProps {
  date: Date;
  status: SystemStatusTypes;
}