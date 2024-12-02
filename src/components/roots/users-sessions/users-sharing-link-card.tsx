import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart01 } from "@/components/partials/pie-charts";

const UsersSharingLinkCard = () => {
  return (
    <Card
      id="UsersSharingLinkSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users Sharing Link
        </CardTitle>
      </CardHeader>

      {/* USERS SHARING LINK PIE CHART */}
      <CardContent className="py-4 mx-auto lg:w-[60%] md:w-[70%]">
        <PieChart01
          chartData={[
            { label: "Message", percentage: 20, color: "#6C757D" },
            { label: "Mail", percentage: 25, color: "#FFB74D" },
            { label: "Whatsapp", percentage: 15, color: "#9575CD" },
            { label: "Telegram", percentage: 15, color: "#64B5F6" },
            { label: "Instagram", percentage: 15, color: "#81C784" },
            { label: "Other", percentage: 20, color: "#DCE775" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersSharingLinkCard;
