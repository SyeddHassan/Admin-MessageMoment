"use client";

import dynamic from "next/dynamic";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChevronDown, ChevronRight } from "lucide-react";

type TableProps = {
  data: {
    hours: string[];
    days: string[];
    trafficData: number[][];
  };
};

const HeatMapTableContent = ({ data }: TableProps) => {
  const { hours, days, trafficData } = data;

  const getBackgroundColor = (value: number) => {
    switch (value) {
      case 0:
        return "bg-blue-50 !text-black";
      case 1:
        return "bg-blue-100 !text-black";
      case 2:
        return "bg-blue-200 !text-black";
      case 3:
        return "bg-blue-300 !text-black";
      default:
        return "bg-blue-400 !text-black";
    }
  };

  return (
    <Table className="w-full h-full mt-6">
      <TableHeader>
        <TableRow>
          <TableHead className="w-20 border-r border-b border-border bg-secondary-theme p-0">
            <div className="p-1 flex flex-col items-center text-theme-heading-color">
              <div className="flex items-center justify-center font-inter mb-0.5">
                Day
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
              <div className="flex items-center justify-center font-inter">
                Hour
                <ChevronDown className="ml-1 h-3 w-3" />
              </div>
            </div>
          </TableHead>
          {days.map((day, index) => (
            <TableHead
              key={`day-header-${index}`}
              className="text-center border-r border-border h-[24px] px-1 sm:px-2 font-inter text-heading-color"
            >
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {hours.map((hour, hourIndex) => (
          <TableRow key={`hour-${hourIndex}`}>
            <TableCell className="border-r sm:p-0 border-border border-b font-inter text-heading-color">
              {hour}
            </TableCell>
            {days.map((_, dayIndex) => (
              <TableCell
                key={`cell-${hourIndex}-${dayIndex}`}
                className={`border-r border-border text-center p-1 sm:p-2 border-b font-jetbrains_mono ${getBackgroundColor(
                  trafficData[hourIndex][dayIndex]
                )}`}
              >
                {trafficData[hourIndex][dayIndex]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const HeatMapTable = dynamic(() => Promise.resolve(HeatMapTableContent), {
  ssr: false,
});

export default HeatMapTable;
