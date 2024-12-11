import React from "react";

import SectionalHeading from "@/components/partials/sectional-heading";
import AdvertisementManagementSystemStatsCards from "@/components/roots/advertisement-management/advertisement-management-system-stats-card";
import AdvertisementCampaignsCard from "@/components/roots/advertisement-management/advertisement-campaigns-card";
import ImpressionsConversionsCard from "@/components/roots/advertisement-management/impressions-conversions-card";
import GoalAchievedCard from "@/components/roots/advertisement-management/goal-achieved-card";
import ImpressionsCard from "@/components/roots/advertisement-management/impressions-card";
import ConversionsCard from "@/components/roots/advertisement-management/conversions-card";
import PeakTimeTypeCard from "@/components/roots/advertisement-management/peak-time-type-card";
import AdvertisingTimeCard from "@/components/roots/advertisement-management/advertising-time-card";
import RegionAdCampaignsCard from "@/components/roots/advertisement-management/region-ad-campaigns-card";

const AdvertisementManagementSystemPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      {/* SECTIONAL HEADING */}
      <SectionalHeading
        title="Advertisement Management System"
        showDateRangePicker={false}
        date={undefined}
        setDate={() => {}}
      />

      {/* MESSAGEMOMENT STATS CARDS */}
      <AdvertisementManagementSystemStatsCards />

      {/* ADVERTISEMENTS CAMPAGIGNS CARD  */}
      <AdvertisementCampaignsCard />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/*  IMPRESSIONS CONVERSIONS CARD */}
        <ImpressionsConversionsCard />

        {/* GOAL ACHIEVED CARD */}
        <GoalAchievedCard />
      </div>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {/* IMPRESSIONS CARD  */}
        <ImpressionsCard />

        {/* CONVERSIONS CARD */}
        <ConversionsCard />
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        {/* PEAK TIME BY TYPE CARD */}
        <PeakTimeTypeCard />

        {/* ADVERTISING TIME CARD */}
        <AdvertisingTimeCard />

        {/* REGION AD CAMPAIGNS CARD */}
        <RegionAdCampaignsCard />
      </div>
    </main>
  );
};

export default AdvertisementManagementSystemPage;
