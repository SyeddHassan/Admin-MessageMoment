"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";

const AdvertisementManagementSystemPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="Advertisement Management System"
        date={date}
        setDate={setDate}
        showDateRangePicker={false}
      />
    </main>
  );
};

export default AdvertisementManagementSystemPage;
