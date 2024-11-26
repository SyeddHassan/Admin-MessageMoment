"use client";

import React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import SectionalHeading from "@/components/partials/sectional-heading";
import TrafficOvertimeCard from "@/components/roots/audience-traffic/traffic-overtime-card";
import NewReturningVisitorsCard from "@/components/roots/audience-traffic/new-returning-visitors-card";
import TrafficTimeCard from "@/components/roots/audience-traffic/traffic-time-card";
import OperatingSystemTrafficCard from "@/components/roots/audience-traffic/operating-system-traffic-card";
import DeviceTrafficCard from "@/components/roots/audience-traffic/device-traffic-card";
import TrafficSourceChatCreationCard from "@/components/roots/audience-traffic/traffic-source-chat-creation-card";
import PageVisitsCard from "@/components/roots/audience-traffic/page-visits-card";

const AudienceTrafficPage = () => {
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

      <div className="w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-8">
        {/* TRAFFIC OVERTIME CARD */}
        <TrafficOvertimeCard />

        {/* NEW VS RETURNING VISITORS CARD */}
        <NewReturningVisitorsCard />
      </div>

      {/* TRAFFIC TIME CARD */}
      <TrafficTimeCard />

      <div className="w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-8">
        {/* DEVICE TRAFFIC CARD */}
        <DeviceTrafficCard />

        {/* OPERATING SYSTEM TRAFFIC CARD */}
        <OperatingSystemTrafficCard />
      </div>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {/* TRAFFIC SOURCES VS CHAT CREATION CARD */}
        <TrafficSourceChatCreationCard />

        {/* PAGE VISITS CARD */}
        <PageVisitsCard />
      </div>
    </main>
  );
};

export default AudienceTrafficPage;
