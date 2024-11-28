"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatabaseOptionsData } from "@/constants/system-health-page-data";
import { DatabaseOptions } from "@/utils/system-performace-options";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DatabaseTrasactionsCard = () => {
  return (
    <>
      <Card
        id="TrafficOvertimeSection"
        className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-3"
      >
        <CardHeader className="py-6 border-b border-border">
          {/* CARD HEADING */}
          <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
            Transactions/sec
          </CardTitle>
        </CardHeader>

        <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
          <div className="h-[500px] w-full">
            <Line options={DatabaseOptions} data={DatabaseOptionsData} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DatabaseTrasactionsCard;
