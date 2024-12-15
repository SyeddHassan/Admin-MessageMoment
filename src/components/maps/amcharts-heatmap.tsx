// Use dynamic import to avoid hydration issues
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

// Wrap the HeatMapTable logic inside a dynamically loaded component
const HeatMapTableContent = ({ data }: TableProps) => {
  const { hours, days, trafficData } = data;

  const getBackgroundColor = (value: number) => {
    switch (value) {
      case 0:
        return "bg-blue-50";
      case 1:
        return "bg-blue-100";
      case 2:
        return "bg-blue-200";
      case 3:
        return "bg-blue-300";
      default:
        return "bg-blue-400";
    }
  };

  return (
    <Table className="w-full h-full mt-6">
      <TableHeader>
        <TableRow className="hover:bg-transparent bg-header-gray">
          <TableHead className="w-20 border-r border-b border-gray-300 bg-header-gray p-0">
            <div className="p-1 flex flex-col items-center">
              <div className="flex items-center justify-center font-inter mb-0.5">
                Day
                <ChevronRight className="ml-1 h-3 w-3 text-muted-gray" />
              </div>
              <div className="flex items-center justify-center font-inter">
                Hour
                <ChevronDown className="ml-1 h-3 w-3 text-muted-gray" />
              </div>
            </div>
          </TableHead>
          {days.map((day, index) => (
            <TableHead
              key={`day-header-${index}`}
              className="text-center border-r h-[24px] px-1 sm:px-2 font-inter"
            >
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {hours.map((hour, hourIndex) => (
          <TableRow key={`hour-${hourIndex}`} className="hover:bg-light-gray">
            <TableCell className="border-r sm:p-0 border-gray-300 font-inter bg-white">
              {hour}
            </TableCell>
            {days.map((_, dayIndex) => (
              <TableCell
                key={`cell-${hourIndex}-${dayIndex}`}
                className={`border-r border-gray-300 text-center p-1 sm:p-2 font-inter ${getBackgroundColor(
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

// Dynamically import the HeatMapTableContent component
const HeatMapTable = dynamic(() => Promise.resolve(HeatMapTableContent), {
  ssr: false,
});

export default HeatMapTable;
