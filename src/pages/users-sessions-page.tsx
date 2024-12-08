"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import ActiveUsersSessionsCard from "@/components/roots/users-sessions/active-users-sessions-card";
import SessionTypeCard from "@/components/roots/users-sessions/session-type-card";
import ActiveRegionsSessionsCard from "@/components/roots/users-sessions/active-regions-sessions-card";
import AvgSessionDurationCard from "@/components/roots/users-sessions/avg-session-duration-card";
import PeakUsageTimesCard from "@/components/roots/users-sessions/peak-uasge-times-card";
import PeakTimesCard from "@/components/roots/users-sessions/peak-times-card";
import ActiveUsersSessionTimeCard from "@/components/roots/users-sessions/active-users-session-time-card";
import UsersSharingLinkCard from "@/components/roots/users-sessions/users-sharing-link-card";
import DeviceUsersCard from "@/components/roots/users-sessions/device-users-card";
import BroswerUsersCard from "@/components/roots/users-sessions/broswer-users-card";
import OperatingSystemUsersCard from "@/components/roots/users-sessions/operating-system-users-card";
import UsersAvgMessagesCard from "@/components/roots/users-sessions/users-avg-messages-card";
import UsersAvgInactivityCard from "@/components/roots/users-sessions/users-avg-inactivity-card";

const UsersSessionsPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="Users & Sessions"
        date={date}
        setDate={setDate}
      />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* ACTIVE USERS SESSIONS CARD  */}
        <ActiveUsersSessionsCard />

        {/* SESSION TYPE CARD */}
        <SessionTypeCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* ACTIVE REGION SESSIONS CARD  */}
        <ActiveRegionsSessionsCard />

        {/* AVERAGE SESSION DURATION CARD */}
        <AvgSessionDurationCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* PEAK USAGE TIME CARD  */}
        <PeakUsageTimesCard />

        {/* PEAK TIMES CARD */}
        <PeakTimesCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* ACTIVE USERS SESSION TIME CARD */}
        <ActiveUsersSessionTimeCard />

        {/* USERS SHARING LINK CARD */}
        <UsersSharingLinkCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {/* DEVICE USERS CARD */}
        <DeviceUsersCard />

        {/* BROWSER USERS CARD */}
        <BroswerUsersCard />

        {/* OPERATING SYSTEM USERS CARD */}
        <OperatingSystemUsersCard />
      </div>

      <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
        {/* USER AVERAGE MESSAGES CARD */}
        <UsersAvgMessagesCard />

        {/* USER AVERAGE INACTIVITY CARD */}
        <UsersAvgInactivityCard />
      </div>
    </main>
  );
};

export default UsersSessionsPage;
