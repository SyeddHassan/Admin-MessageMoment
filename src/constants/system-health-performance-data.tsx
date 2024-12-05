import { SystemStatusTypes } from "@/interfaces/system-health-performance-page-components-interfaces";

export const SystemStatusData: { name: string; status: SystemStatusTypes }[] = [
  { name: "Server status", status: "operational" },
  { name: "File Uploading", status: "major" },
  { name: "Chat GTP Integration", status: "partial" },
  { name: "Chat Function", status: "operational" },
];
