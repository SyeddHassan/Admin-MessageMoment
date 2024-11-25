"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActiveUsersSessionsCard = () => {
  const [selectedTab, setSelectedTab] = useState("sessions");

  return (
    <Card
      id="ActiveUsersSessionsSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow lg:col-span-3 col-span-1"
    >
      <CardHeader className="md:py-3 py-4 border-b border-border flex md:flex-row flex-col max-md:gap-2 items-center justify-between">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Active Users and Sessions
        </CardTitle>

        {/* FILTER BUTTON */}
        <div className="md:flex max-sm:w-full max-md:grid max-md:grid-cols-2 font-inter font-medium">
          <Button
            onClick={() => setSelectedTab("View All")}
            className={`h-[40px] sm:w-[135px] w-full md:rounded-[6px_0_0_6px] rounded-[6px_0_0_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
              selectedTab === "View All"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            View All
          </Button>

          <Button
            onClick={() => setSelectedTab("Standard")}
            className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_6px_0_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
              selectedTab === "Standard"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Standard
          </Button>

          <Button
            onClick={() => setSelectedTab("Secure")}
            className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_0_0_6px] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
              selectedTab === "Secure"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Secure
          </Button>

          <Button
            onClick={() => setSelectedTab("Wallet")}
            className={`h-[40px] sm:w-[135px] w-full md:rounded-[0_6px_6px_0] rounded-[0_0_6px_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
              selectedTab === "Wallet"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Wallet
          </Button>
        </div>
      </CardHeader>

      {/* ACTIVE USER SESSIONS BAR GRAPH */}
      <CardContent className="py-5 lg:px-[1.5rem] px-1 lg:h-[500px] flex gap-6 md:flex-row flex-col"></CardContent>
    </Card>
  );
};

export default ActiveUsersSessionsCard;
