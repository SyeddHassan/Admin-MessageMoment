import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";

const ChatGPTPromptsCard = () => {
  return (
    <Card
      id="ChatGPTPromptsSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          ChatGPT Prompts
        </CardTitle>
      </CardHeader>

      {/* CHATGPT PROMPTS PIE CHART */}
      <CardContent className="mx-auto w-full py-8">
        <ChartJsPieChart01
          chartData={[
            {
              label: "Advice and Guidance",
              percentage: 70,
              color: "#2285f2",
            },
            { label: "Problem Solving", percentage: 30, color: "#d83b82" },
            {
              label: "Creative Writing Assistance",
              percentage: 30,
              color: "#ab40e8",
            },
            {
              label: "Entertainment and Fun",
              percentage: 40,
              color: "#5e37ed",
            },
            { label: "Recommendations", percentage: 50, color: "#4dd992" },
            { label: "Other", percentage: 50, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ChatGPTPromptsCard;
