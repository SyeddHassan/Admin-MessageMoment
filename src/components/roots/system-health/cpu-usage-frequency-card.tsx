"use client";

import { useRef } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useCpuData } from "@/hooks/system-performance-hooks";
import { CpuUsageOptions } from "@/utils/system-performace-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const CpuUsageFrequencyCard = () => {
  const { data, chartData } = useCpuData();
  const chartRef = useRef(null);

  return (
    <Card
      id="TrafficOvertimeSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-3"
    >
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          CPU Usage (%)
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[550px]">
        <Line options={CpuUsageOptions} data={chartData(data)} ref={chartRef} />
      </CardContent>
    </Card>
  );
};

export default CpuUsageFrequencyCard;
