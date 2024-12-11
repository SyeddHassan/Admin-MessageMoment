"use client";

import { ArrowUpIcon, InfoIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DeviceTrafficTableProps } from "@/interfaces/table-interfces";

export const DeviceTrafficTable = ({ data }: DeviceTrafficTableProps) => {
  return (
    <div className="w-full overflow-auto font-inter">
      <Table className="border-collapse w-full bg-white rounded-lg overflow-hidden shadow">
        <TableHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
          <TableRow>
            <TableHead className="w-[200px]">Device Type</TableHead>
            <TableHead className="">
              Page Views{" "}
              <ArrowUpIcon className="inline-block w-4 h-4 ml-1 text-blue-500" />
            </TableHead>
            <TableHead className="">
              Site Sessions{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="inline-block w-4 h-4 ml-1 text-blue-500 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <p>Number of unique sessions per device type</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableHead>
            <TableHead className="">Unique Visitors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.deviceType}
              className={`transition duration-200 ${
                row.isTotal
                  ? "bg-blue-100 font-bold text-blue-800"
                  : index % 2 === 0
                  ? "hover:bg-gray-200 bg-white"
                  : "hover:bg-gray-200 bg-gray-50"
              }`}
            >
              <TableCell className="flex items-center space-x-2">
                {row.isTotal && (
                  <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                    Total
                  </span>
                )}
                <span>{row.deviceType}</span>
              </TableCell>
              <TableCell className="text-gray-700 text-sm font-medium">
                {row.pageViews.toLocaleString()}
              </TableCell>
              <TableCell className="flex items-center text-gray-700 text-sm font-medium">
                {row.siteSessions.toLocaleString()}
                {row.siteSessions > 100 ? (
                  <ArrowUpIcon className="ml-2 w-4 h-4 text-green-500" />
                ) : (
                  <ArrowUpIcon className="ml-2 w-4 h-4 text-gray-400 rotate-180" />
                )}
              </TableCell>
              <TableCell className="text-gray-700 text-sm font-medium">
                {row.uniqueVisitors.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
