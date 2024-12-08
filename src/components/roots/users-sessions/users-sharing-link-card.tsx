import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";

const UsersSharingLinkCard = () => {
  return (
    <Card
      id="UsersSharingLinkSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users Sharing Link
        </CardTitle>
      </CardHeader>

      {/* USERS SHARING LINK PIE CHART */}
      <CardContent className="py-4 lg:h-[650px] lg:flex-center mx-auto">
        {/* <ChartJsPieChart01
          chartData={[
            { label: "Message", percentage: 20, color: "#2285f2" },
            { label: "Mail", percentage: 25, color: "#d83b82" },
            { label: "Whatsapp", percentage: 15, color: "#ab40e8" },
            { label: "Telegram", percentage: 15, color: "#5e37ed" },
            { label: "Instagram", percentage: 15, color: "#4dd992" },
            { label: "Other", percentage: 20, color: "#f02f1d" },
          ]}
        /> */}
      </CardContent>
    </Card>
  );
};

export default UsersSharingLinkCard;
