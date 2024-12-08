import React from "react";

import MessageMomentStatsCards from "@/components/roots/dashboard/messagemoment-stats-cards";
import RealTimeMonitoringMapVersionCard from "@/components/roots/dashboard/real-time-monitoring-map-version-card";
import RealTimeMonitoringTableVersionCard from "@/components/roots/dashboard/real-time-monitoring-table-version-card";
import AvgUsersChatRoomCard from "@/components/roots/dashboard/avg-users-chat-room-card";
import ReturnedVisitorsCard from "@/components/roots/dashboard/returned-visitors-card";

const DashboardPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      {/* MESSAGEMOMENT STATS CARDS */}
      <MessageMomentStatsCards />

      {/* REAL TIME MONITORING MAP VERSION CARD */}
      <RealTimeMonitoringMapVersionCard />

      {/* REAL TIME MONITORING TABLE VERSION CARD */}
      <RealTimeMonitoringTableVersionCard />

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {/* AVERAGE USERS CHAT ROOM CARD */}
        <AvgUsersChatRoomCard />

        {/* RETURNED VISITORS CARD */}
        <ReturnedVisitorsCard />
      </div>
    </main>
  );
};

export default DashboardPage;
