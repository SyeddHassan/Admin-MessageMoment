"use client";

import GaugeChart from "@/components/partials/gauge-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServerStatus = () => {
  return (
    <Card className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-2">
      <CardHeader className="py-5 border-b border-border w-full">
        <CardTitle className="text-[1rem] font-inter text-heading-color font-medium">
          Server Status
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center p-6">
        <div className="mt-6">
          <GaugeChart
            data={{
              datasets: [
                {
                  data: [60, 40], 
                  backgroundColor: ["#0ea5e9", "#e5e7eb"], 
                  borderWidth: 0,
                  circumference: 360,
                  rotation: 0,
                },
              ],
            }}
            value={60}
            title="Percent"
            isHalfGauge={false}
            startColor="#0ea5e9"
            endColor="#4ade80"
            backgroundColor="#e5e7eb"
            barWidth={10}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerStatus;
