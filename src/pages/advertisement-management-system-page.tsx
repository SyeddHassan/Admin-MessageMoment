import React from "react";

import SectionalHeading from "@/components/partials/sectional-heading";
import AdvertisementManagementSystemStatsCards from "@/components/roots/advertisement-management/advertisement-management-system-stats-card";
import Card1 from "@/components/roots/advertisement-management/card-1";
import Card2 from "@/components/roots/advertisement-management/card-2";
import Card3 from "@/components/roots/advertisement-management/card-3";
import Card4 from "@/components/roots/advertisement-management/card-4";
import Card5 from "@/components/roots/advertisement-management/card-5";
import Card6 from "@/components/roots/advertisement-management/card-6";
import Card7 from "@/components/roots/advertisement-management/card-7";

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

      {/* CARD 1 */}
      <Card1 />

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8">
        {/* CARD 1  */}
        <Card2 />

        {/* CARD 2 */}
        <Card3 />
      </div>
    </main>
  );
};

export default AdvertisementManagementSystemPage;
