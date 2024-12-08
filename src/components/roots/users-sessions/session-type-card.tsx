import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChartJsDoughnutChart02 } from "../../charts/chartjs-doughnut-charts";

const SessionTypeCard = () => {
  return (
    <Card id="FileStatusSection" className="!standard-card-styling col-span-1">
      <CardHeader className="lg:py-[30px] py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Session Type
        </CardTitle>
      </CardHeader>

      {/* SESSION TYPE DOUGHNUT CHART */}
      <CardContent className="pb-[5rem] h-full md:w-[80%] flex-center mx-auto">
        {/* <ChartJsDoughnutChart02
          chartData={[
            { label: "Standard", percentage: 30, color: "#5ebce1" },
            { label: "Secure", percentage: 20, color: "#3a56af" },
            { label: "Wallet", percentage: 70, color: "#ab40e8" },
          ]}
        /> */}
      </CardContent>
    </Card>
  );
};

export default SessionTypeCard;
