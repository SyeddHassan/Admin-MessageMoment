"use client";

import React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import SectionalHeading from "@/components/partials/sectional-heading";
import SessionTypeCard from "@/components/roots/users-sessions/session-type-card";
import ActiveUsersSessionsCard from "@/components/roots/users-sessions/active-users-sessions-card";

const UsersSessionsPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="h-full page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="File Transfer Overview"
        date={date}
        setDate={setDate}
      />

      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {/* ACTIVE USERS SESSIONS CARD */}
        <ActiveUsersSessionsCard />

        {/* SESSION TYPE CARD */}
        <SessionTypeCard />
      </div>
    </main>
  );
};

export default UsersSessionsPage;
