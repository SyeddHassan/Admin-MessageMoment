"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import AcctiveUsersSessionsCard from "@/components/roots/users-sessions/acctive-users-sessions-card";
import SessionTypeCard from "@/components/roots/users-sessions/session-type-card";

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

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-8">
        {/* ACTIVE USERS SESSIONS CARD  */}
        <AcctiveUsersSessionsCard />

        {/* SESSION TYPE CARD */}
        <SessionTypeCard />
      </div>
    </main>
  );
};

export default UsersSessionsPage;
