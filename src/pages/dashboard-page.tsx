import React from "react";

import MessageMomentStatsCards from "@/components/roots/dashboard/messagemoment-stats-cards";
import RealTimeGlobalActivityCard from "@/components/roots/dashboard/real-time-global-activity-card";
import RealTimeSessionMonitoringCard from "@/components/roots/dashboard/real-time-session-monitoring-card";
import RealTimeUsersMonitoringCard from "@/components/roots/dashboard/real-time-users-monitoring-card";
import UsersAverageChatRoomCard from "@/components/roots/dashboard/users-average-chat-room-card";
import ReturnedVisitorsCard from "@/components/roots/dashboard/returned-visitors-card";

const DashboardPage = () => {
  return (
    <main className="h-full page-layout-standard section-margin-standard">
      {/* MESSAGEMOMENT STATS CARDS */}
      <MessageMomentStatsCards />

      {/* REAL TIME GLOBAL ACTIVITY CARD */}
      <RealTimeGlobalActivityCard />

      {/* REAL TIME SESSION MONITORING */}
      <RealTimeSessionMonitoringCard />

      {/* REAL TIME USERS MONITORING */}
      <RealTimeUsersMonitoringCard />

      <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-4 mb-[2rem]">
        {/* USERS AVERAGE CHAT ROOM CARD */}
        <UsersAverageChatRoomCard />

        {/* RETURNED VISITORS CARD */}
        <ReturnedVisitorsCard />
      </div>
    </main>
  );
};

export default DashboardPage;
