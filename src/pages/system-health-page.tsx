"use client";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import SystemStatus from "@/components/roots/system-health/system-status-card";
import ServerStatus from "@/components/roots/system-health/server-status";
import { ServerActivityCard } from "@/components/roots/system-health/server-activity-card";
import { serverActivityData } from "@/constants/system-health-page-data";
import CpuUtilization from "@/components/roots/system-health/cpu-utilization";
import MemoryUtilization from "@/components/roots/system-health/memory-utilization";
import DiskUsage from "@/components/roots/system-health/disk-usage";
import AnnomaliesEvaluationChart from "@/components/roots/system-health/annomalies-evolution";
import DatabaseTrasactionsCard from "@/components/roots/system-health/database-transaction-card";
import CpuUsageFrequencyCard from "@/components/roots/system-health/cpu-usage-frequency-card";
import MemoryMonitoringGraph from "@/components/roots/system-health/memory-monitoring-graph";

const SystemHealthPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  return (
    <main className="h-full page-layout-standard section-margin-standard">
      <SectionalHeading
        title="System Health and Performance"
        date={date}
        setDate={setDate}
      />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <SystemStatus />

        {/* Circular Progress - Spans 2 columns */}
        <ServerStatus />

        {/* Activity Graph - Full width */}
        <ServerActivityCard chartData={serverActivityData} />
        {/* Three Gauge Charts  */}

        <CpuUtilization />
        <MemoryUtilization />
        <DiskUsage />

        {/* line chart */}
        <AnnomaliesEvaluationChart />
        {/* Area Charts - Each spans 3 columns */}
        <DatabaseTrasactionsCard />
       <CpuUsageFrequencyCard />

        {/* Memory Usage Graph - Full width */}
        <MemoryMonitoringGraph />
      </div>
    </main>
  );
};

export default SystemHealthPage;
