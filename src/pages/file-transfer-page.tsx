"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import RealTimeFileTransferCard from "@/components/roots/file-transfer/real-time-file-transfer-card";
import FileTypesCard from "@/components/roots/file-transfer/file-types-card";
import FileStatusCard from "@/components/roots/file-transfer/file-status-card";
import FilePeakTimeCard from "@/components/roots/file-transfer/file-peak-time-card";
import FileMomentServerCapacityCard from "@/components/roots/file-transfer/file-moment-server-capacity-card";

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

      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {/* FILES BY TYPE CARD */}
        <FileTypesCard />

        {/* FILE STATUS CARD */}
        <FileStatusCard />

        {/* FILE PEAK TIME CARD */}
        <FilePeakTimeCard />
      </div>

      {/* FILEMOMENT SERVER CAPACITY CARD */}
      <FileMomentServerCapacityCard />
    </main>
  );
};

export default FileTransferPage;
