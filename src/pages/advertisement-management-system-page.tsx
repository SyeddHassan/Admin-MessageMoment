import React from "react";

import SectionalHeading from "@/components/partials/sectional-heading";
import AdvertisementManagementSystemStatsCards from "@/components/roots/advertisement-management/advertisement-management-system-stats-card";

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
    </main>
  );
};

export default AdvertisementManagementSystemPage;
