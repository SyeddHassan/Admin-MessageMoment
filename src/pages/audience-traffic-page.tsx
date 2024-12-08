"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import TrafficOverTimeCard from "@/components/roots/audience-traffic/traffic-over-time-card";
import NewVsReturningVisitorsCard from "@/components/roots/audience-traffic/new-vs-returning-visitors-card";
import TrafficTimeDaysCard from "@/components/roots/audience-traffic/traffic-time-days-card";
import DeviceTrafficCard from "@/components/roots/audience-traffic/device-traffic-card";
import OperatingSystemTrafficCard from "@/components/roots/audience-traffic/operating-system-traffic-card";
import TrafficSourceVsChatCreationCard from "@/components/roots/audience-traffic/traffic-source-vs-chat-creation-card";
import PageVisitsCard from "@/components/roots/audience-traffic/page-visits-card";

const AudienceTrafficPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="Audience Traffic"
        date={date}
        setDate={setDate}
      />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* TRAFFIC OVER TIME CARD */}
        <TrafficOverTimeCard />

        {/* NEW VS RETURNING VISITORS CARD */}
        <NewVsReturningVisitorsCard />
      </div>

      {/* TRAFFIC BY TIME OF DAYS CARD */}
      <TrafficTimeDaysCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* TRAFFIC BY DEVICE CARD */}
        <DeviceTrafficCard />

        {/* TRAFFIC BY OPERATING SYSTEM CARD */}
        <OperatingSystemTrafficCard />
      </div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
        {/* TRAFFIC SOURCE VS CHAT CREATION CARD */}
        <TrafficSourceVsChatCreationCard />

        {/* PAGE VISITS CARD */}
        <PageVisitsCard />
      </div>
    </main>
  );
};

export default AudienceTrafficPage;
