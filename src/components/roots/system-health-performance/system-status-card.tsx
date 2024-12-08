import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import SystemStatusChart from "./system-status-chart";

const SystemStatusCard = () => {
  return (
    <Card
      id="SystemStatusSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          System Status
        </CardTitle>
      </CardHeader>

      {/* SYSTEM STATUS CHART */}
      <CardContent className="p-8 py-10">
        {/* <SystemStatusChart /> */}
      </CardContent>
    </Card>
  );
};

export default SystemStatusCard;
