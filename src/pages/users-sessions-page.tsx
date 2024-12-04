"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import ActiveUsersSessionsCard from "@/components/roots/users-sessions/active-users-sessions-card";
import SessionTypeCard from "@/components/roots/users-sessions/session-type-card";
import ActiveRegionSessionsCard from "@/components/roots/users-sessions/active-region-sessions-card";
import SessionDurationCard from "@/components/roots/users-sessions/session-duration-card";
import PeakUsageTimesCard from "@/components/roots/users-sessions/peak-uasge-times-card";
import PeakTimesCard from "@/components/roots/users-sessions/peak-times-card";
import ActiveUsersSessionTimeCard from "@/components/roots/users-sessions/active-users-session-time-card";

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
        <ActiveRegionSessionsCard />

        {/* SESSION DURATION CARD */}
        <SessionDurationCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* PEAK USAGE TIME CARD  */}
        <PeakUsageTimesCard />

        {/* PEAK TIMES CARD */}
        <PeakTimesCard />
      </div>

      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {/* ACTIVE USERS SESSION TIME CARD */}
        <ActiveUsersSessionTimeCard />

        {/* USERS SHARING LINK CARD */}
        {/* <UsersSharingLinkCard /> */}
      </div>
    </main>
  );
};

export default UsersSessionsPage;
