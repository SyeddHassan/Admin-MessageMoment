"use client";

import React from "react";

import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import RealTimeFileTransferStatusCard from "@/components/roots/file-transfer/real-time-file-transfer-status-card";
import FileTypesCard from "@/components/roots/file-transfer/file-types-card";
import FileStatusCard from "@/components/roots/file-transfer/file-status-card";
import FilePeakTimeCard from "@/components/roots/file-transfer/file-peak-time-card";
import FileMomentServerCapacityCard from "@/components/roots/file-transfer/filemoment-server-capacity-card";

const FileTransferPage = () => {
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

      {/* REAL TIME FILE TRANSFER STATUS CARD */}
      <RealTimeFileTransferStatusCard />

      <div className="w-full grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {/* FILE TYPES CARD */}
        <FileTypesCard />

        {/* FILE STATUS CARD */}
        <FileStatusCard />

        {/* FILE PEAK TIME CARD */}
        <FilePeakTimeCard />
      </div>

      {/* FileMoment SERVER CAPACITY CARD */}
      <FileMomentServerCapacityCard />
    </main>
  );
};

export default FileTransferPage;
