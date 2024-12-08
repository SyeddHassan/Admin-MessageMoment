import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "@/components/charts/chartjs-line-charts";

const ChatGPTDailyPeakTimeCard = () => {
  return (
    <Card
      id="ChatGPTDailyPeakTimeSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          ChatGPT Daily Peak Time
        </CardTitle>
      </CardHeader>

      {/* CHATGPT DAILY PEAK TIME LINE CHART */}
      <CardContent className="lg:h-[500px] w-full lg:w-[80%] max-lg:py-12 flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Morning",
              value: "09:00",
              color: "#FFA500",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Afternoon",
              value: "14:30",
              color: "#FF6347",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Nigth",
              value: "22:45",
              color: "#4169E1",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ChatGPTDailyPeakTimeCard;
