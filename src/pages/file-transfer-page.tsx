"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import RealTimeFileTransferCard from "@/components/roots/file-transfer/real-time-file-transfer-card";

const FileTransferPage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="File Transfer Overview"
        date={date}
        setDate={setDate}
      />

      {/* REAL TIME FILE TRANSFER CARD */}
      <RealTimeFileTransferCard />
    </main>
  );
};

export default FileTransferPage;
