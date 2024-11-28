import { generateCPUData } from "@/constants/system-health-page-data";
import { CPUData } from "@/interfaces/system-performance-interface";
import { ChartData } from "chart.js";
import { useCallback, useEffect, useRef, useState } from "react";

export const useCpuData = () => {
  const [data, setData] = useState<CPUData[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateChart = useCallback(() => {
    setData((prevData) => {
      const now = new Date();
      const newData = [
        ...prevData,
        { timestamp: formatTime(now), usage: generateCPUData() },
      ].slice(-60); // Keep last 60 entries
      return newData;
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(updateChart, 300);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateChart]);

  const chartData = (data: CPUData[]): ChartData<"line"> => ({
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: "CPU Usage",
        data: data.map((d) => d.usage),
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      },
    ],
  });

  return { data, chartData };
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
