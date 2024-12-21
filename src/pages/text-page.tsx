import MessageMomentStatsCards from "@/components/roots/dashboard/messagemoment-stats-cards";
import TestRealTimeMonitoringMapVersionCard from "@/components/roots/test/test-real-time-monitoring-map-version-card";
import React from "react";

const TextPage = () => {
  return (
    <div>
      <main className="page-layout-standard section-margin-standard">
        {/* MESSAGEMOMENT STATS CARDS */}
        <MessageMomentStatsCards />

        <TestRealTimeMonitoringMapVersionCard />
      </main>
    </div>
  );
};

export default TextPage;
