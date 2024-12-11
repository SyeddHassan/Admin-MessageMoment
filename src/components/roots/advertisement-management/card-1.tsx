"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons03 } from "@/components/partials/filter-buttons";

const Card1 = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card id="Card1Section" className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Card 1
        </CardTitle>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <FilterButtons03
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* CARD 1 TABLE */}
      </CardContent>
    </Card>
  );
};

export default Card1;
