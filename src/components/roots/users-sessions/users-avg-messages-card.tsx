import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const LineChart03 = dynamic(
  () => import("../../partials/line-charts").then((mod) => mod.LineChart03),
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
import Loading from "@/components/partials/loader";

import { LoaderCircle } from "lucide-react";

const UsersAvgMessagesCard = () => {
  return (
    <Card
      id="UsersAvgMessagesSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Messages by User
        </CardTitle>
      </CardHeader>

      {/* AVERAGE MESSAGES BY USERS LINE CHART */}
      <CardContent className="py-8 h-[550px] max-md:px-2">
        <LineChart03
          chartId="UsersAvgMessagesLineChart"
          data={[
            { date: "2024-01-01", value: 150 },
            { date: "2024-02-01", value: 60 },
            { date: "2024-03-01", value: 30 },
            { date: "2024-04-01", value: 25 },
            { date: "2024-05-01", value: 35 },
            { date: "2024-06-01", value: 20 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgMessagesCard;
