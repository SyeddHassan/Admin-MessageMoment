import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const UsersAvgChatRoomCard = () => {
  return (
    <Card
      id="UserAverageChatRoomSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Users by Chat Room
        </CardTitle>
      </CardHeader>

      {/* USER AVERAGE CHAT ROOM DOUGHNUT CHART */}
      <CardContent className="pb-[5rem] h-full flex-center mx-auto">
        <ChartJsDoughnutChart01
          label="Avg. Users: 7/10"
          percentage={70}
          backgroundColor={["#91CC75", "#f2f2f2"]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgChatRoomCard;
