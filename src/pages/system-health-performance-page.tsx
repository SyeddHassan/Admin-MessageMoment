"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import SystemStatusCard from "@/components/roots/system-health-performance/system-status-card";
import ServerStatusCard from "@/components/roots/system-health-performance/server-status-card";
import ServerActivityCard from "@/components/roots/system-health-performance/server-activity-card";
import CpuUtilizationCard from "@/components/roots/system-health-performance/cpu-utilization-card";
import MemoryUtilizationCard from "@/components/roots/system-health-performance/memory-utilization-card";
import DiskUtilizationCard from "@/components/roots/system-health-performance/disk-utilization-card";
import AnnomaliesEvolutionCard from "@/components/roots/system-health-performance/annomalies-evolution-card";
import TrasationsPerSecondCard from "@/components/roots/system-health-performance/trasations-per-second-card";
import CpuUsageCard from "@/components/roots/system-health-performance/cpu-usage-card";

const SystemHealthPerformancePage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="System Health and Performance"
        date={date}
        setDate={setDate}
      />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* SYSTEM STATUS CARD */}
        <SystemStatusCard />

        {/* SERVER STATUS CARD */}
        <ServerStatusCard />
      </div>

      {/* SERVER ACTIVITY CARD */}
      <ServerActivityCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* CPU UTILIZATION CARD */}
        <CpuUtilizationCard />

        {/* MEMORY UTILIZATION CARD */}
        <MemoryUtilizationCard />

        {/* DISK UTILIZATION CARD */}
        <DiskUtilizationCard />
      </div>

      {/* ANNOMALIES EVOLUTION CARD */}
      <AnnomaliesEvolutionCard />

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {/* TRANSACTIONS PER SECOND CARD */}
        <TrasationsPerSecondCard />

        {/* CPU USAGE CARD */}
        <CpuUsageCard />
      </div>
    </main>
  );
};

export default SystemHealthPerformancePage;
