"use client";
import GaugeChart from "@/components/partials/gauge-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const DiskUsage = () => {
  return (
    <Card className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-1 lg:col-span-2">
      <CardHeader className="py-5 border-b border-border w-full">
        <CardTitle className="text-[1rem] font-inter text-heading-color font-medium">
          DiskUsage
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center p-6">
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
          value={75}
          title=""
          isHalfGauge={true}
          startColor="#4ade80"
          endColor="#0ea5e9"
          barWidth={20}
        />
      </CardContent>
    </Card>
  );
};

export default DiskUsage;
