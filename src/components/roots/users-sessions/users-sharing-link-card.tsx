import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";

const UsersSharingLinkCard = () => {
  return (
    <Card
      id="UsersSharingLinkSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users Sharing Link
        </CardTitle>
      </CardHeader>

      {/* USERS SHARING LINK PIE CHART */}
      <CardContent className="py-4 lg:h-[650px] lg:flex-center mx-auto">
        <ChartJsPieChart01
          chartData={[
            { label: "Message", percentage: 20, color: "#495057" },
            { label: "Mail", percentage: 25, color: "#FF7043" },
            { label: "Whatsapp", percentage: 15, color: "#7E57C2" },
            { label: "Telegram", percentage: 15, color: "#0288D1" },
            { label: "Instagram", percentage: 15, color: "#43A047" },
            { label: "Other", percentage: 20, color: "#FBC02D" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersSharingLinkCard;
