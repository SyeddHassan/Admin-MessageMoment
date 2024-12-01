import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChart from "@/components/partials/pie-chart";

const ChatGPTPromptsCard = () => {
  return (
    <Card
      id="ChatGPTPromptsSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          ChatGPT Prompts
        </CardTitle>
      </CardHeader>

      {/* CHATGPT PROMPTS PIE CHART */}
      <CardContent className="w-full lg:h-[600px] h-[400px] py-8">
        <PieChart
          chartId="ChatGPTPromptsPieChart"
          data={[
            { category: "Advice and Guidance", value: 501.9, color: "#34a853" },
            { category: "Problem Solving", value: 301.9, color: "#fbbc05" },
            {
              category: "Creative Writing Assistance",
              value: 201.1,
              color: "#ea4335",
            },
            {
              category: "Entertainment and Fun",
              value: 165.8,
              color: "#4285f4",
            },
            { category: "Recommendations", value: 139.9, color: "#ff6f00" },
            { category: "Other", value: 139.9, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ChatGPTPromptsCard;
