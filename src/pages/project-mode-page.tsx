"use client";

import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import SectionalHeading from "@/components/partials/sectional-heading";
import UsageFrequencyCard from "@/components/roots/project-mode/usage-frequency-card";
import TranscriptDownloadCard from "@/components/roots/project-mode/transcript-download-card";
import AvgSessionDurationProjectModeCard from "@/components/roots/project-mode/avg-session-duration-project-mode-card";
import ProjectModeDevicesCard from "@/components/roots/project-mode/project-mode-devices-card";
import ProjectModeOperatingSystemsCard from "@/components/roots/project-mode/project-mode-operating-systems-card";
import ProjectModeActivationsCard from "@/components/roots/project-mode/project-mode-activations-card";
import ChatGPTPromptsCard from "@/components/roots/project-mode/chatgpt-prompts-card";
import ChatGPTDailyPeakTimeCard from "@/components/roots/project-mode/chatgpt-daily-peak-time-card";

const ProjectModePage = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="Project Mode (ChatGPT)"
        date={date}
        setDate={setDate}
      />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* USAGE FREQUENCY CARD */}
        <UsageFrequencyCard />

        {/* TRANSCRIPT DOWNLOAD */}
        <TranscriptDownloadCard />
      </div>

      <div className="w-full grid md:grid-cols-4 grid-cols-1 lg:gap-4 md:gap-y-8 md:gap-x-4 gap-8">
        {/* AVERAGE SESSION DURATION */}
        <AvgSessionDurationProjectModeCard />

        {/* PROJECT MODE BY DEVICES */}
        <ProjectModeDevicesCard />

        {/* PROJECT MODE BY OPERATING SYSTEM */}
        <ProjectModeOperatingSystemsCard />
      </div>

      {/* PROJECT MODE ACTIVATIONS CARD */}
      <ProjectModeActivationsCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* CHATGPT PROMPTS CARD */}
        <ChatGPTPromptsCard />

        {/* CHATGPT DAILY PEAK TIME CARD */}
        <ChatGPTDailyPeakTimeCard />
      </div>
    </main>
  );
};

export default ProjectModePage;
