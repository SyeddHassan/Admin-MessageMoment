"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerActivityOptions } from "@/utils/system-performace-options";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
  Legend
);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
    pointRadius: number;
  }[];
};

interface ServerActivityProps {
  chartData: ChartData;
}
export const ServerActivityCard = ({ chartData }: ServerActivityProps) => {
  return (
    <Card className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-6">
      <CardHeader className="py-5 border-b border-border">
        <CardTitle className="text-[1rem] font-inter text-heading-color font-medium">
          Server Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="h-[400px] w-full">
          <Line options={ServerActivityOptions} data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};
