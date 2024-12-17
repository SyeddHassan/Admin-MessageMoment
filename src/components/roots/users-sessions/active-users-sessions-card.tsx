"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterButtons02 } from "@/components/partials/filter-buttons";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/partials/loader";
const AmChartsBarChart01 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart01
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { ArrowDown, ArrowUp, LoaderCircle } from "lucide-react";

const ActiveUsersSessionsCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");

  return (
    <Card
      id="AcctiveUsersSessionsSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="lg:py-4 py-6 border-b border-border flex lg:flex-row flex-col max-lg:gap-4 items-center md:justify-between">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Active Users and Sessions
        </CardTitle>

        {/* FILTER BUTTONS */}
        <FilterButtons02
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </CardHeader>

      {/* ACCTIVE USERS AND SESSIONS BAR CHART */}
      <CardContent className="pt-[2rem] h-[650px] max-md:px-2">
        <AmChartsBarChart01
          chartId="AcctiveUsersSessionsBarChart"
          data={[
            { date: "02 Jan", users: 40, sessions: 10, projectMode: 0 },
            { date: "03 Jan", users: 52, sessions: 20, projectMode: 5 },
            { date: "04 Jan", users: 38, sessions: 18, projectMode: 8 },
            { date: "05 Jan", users: 65, sessions: 0, projectMode: 5 },
            { date: "06 Jan", users: 20, sessions: 12, projectMode: 0 },
            { date: "07 Jan", users: 40, sessions: 25, projectMode: 15 },
            { date: "08 Jan", users: 42, sessions: 10, projectMode: 0 },
            { date: "09 Jan", users: 55, sessions: 20, projectMode: 0 },
            { date: "10 Jan", users: 38, sessions: 18, projectMode: 5 },
            { date: "11 Jan", users: 65, sessions: 5, projectMode: 5 },
            { date: "12 Jan", users: 20, sessions: 12, projectMode: 0 },
            { date: "13 Jan", users: 40, sessions: 25, projectMode: 0 },
          ]}
        />
      </CardContent>

      <CardFooter className="md:py-6 py-12 border-t border-border grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
        <div className="flex flex-col lg:gap-2 gap-4 max-lg:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Users
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              8.8K
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 gap-4 max-lg:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Session
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              18.2K
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 gap-4 max-lg:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Bounce Rate
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              46.7%
            </p>
            <Badge className="bg-red-100 text-red-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowDown size={10} />
              7.6%
            </Badge>
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 gap-4 max-lg:items-center">
          <h1 className="text-[16px] leading-[16px] font-semibold font-inter tracking-wider">
            Session Duration
          </h1>
          <div className="flex items-end gap-2">
            <p className="text-[26px] leading-[26px] font-bold text-heading-color">
              9m 24s
            </p>
            <Badge className="bg-green-100 text-green-600 font-bold gap-1 max-md:text-[10px]">
              <ArrowUp size={10} />
              7.6%
            </Badge>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActiveUsersSessionsCard;
