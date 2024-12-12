"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons03 } from "@/components/partials/filter-buttons";
import AdvertisementCampaignsTable from "@/components/tables/advertisement-campaigns-table";

const AdvertisementCampaignsCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card id="AdvertisementCampaignsSection" className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Advertisement Campaigns
        </CardTitle>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <FilterButtons03
          isCampaign={true}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* ADVERTISEMENTS CAMPAGIGNS TABLE */}
        <AdvertisementCampaignsTable
          selectedTab={selectedTab}
          filteredInput={filteredInput}
        />
      </CardContent>
    </Card>
  );
};

export default AdvertisementCampaignsCard;
