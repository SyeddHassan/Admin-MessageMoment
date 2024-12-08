"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import SystemStatusCard from "@/components/roots/system-health-performance/system-status-card";
import ServerStatusCard from "@/components/roots/system-health-performance/server-status-card";

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
    </main>
  );
};

export default SystemHealthPerformancePage;
