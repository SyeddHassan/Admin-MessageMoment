import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart01 } from "@/components/partials/doughnut-charts";

const UsersAverageChatRoomCard = () => {
  return (
    <Card
      id="UserAverageChatRoomSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Avg. Users by Chat Room
        </CardTitle>
      </CardHeader>

      {/* USER AVERAGE CHAT ROOM DOUGHNUT CHART */}
      <CardContent className="pb-12 h-full flex-center mx-auto">
        <DoughnutChart01
          label="Avg. Users: 7/10"
          percentage={70}
          backgroundColor={["#91CC75", "#f2f2f2"]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAverageChatRoomCard;
