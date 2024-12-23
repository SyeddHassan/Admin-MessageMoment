"use client";

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { RealTimeSessionMonitoringTableViewParticipantsData } from "@/constants/dashboard-page-components-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Globe, Clock, Smartphone, Chrome, Activity } from "lucide-react";

const columnHelper =
  createColumnHelper<
    (typeof RealTimeSessionMonitoringTableViewParticipantsData)[number]
  >();

const columns = [
  columnHelper.accessor("userId", {
    cell: (info) => info.getValue(),
    header: "ID",
  }),
  columnHelper.accessor("ipAddress", {
    cell: (info) => <span className="text-blue-600">{info.getValue()}</span>,
    header: "IP Address",
  }),
  columnHelper.accessor("telcomProvider", {
    cell: (info) => info.getValue(),
    header: "Telcom Provider",
  }),
  columnHelper.accessor("location", {
    cell: (info) => (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <Globe className="h-4 w-4 hidden sm:inline" />
        <div className="flex flex-col">
          <p>{info.getValue().country}</p>
          <p className="text-[12px] leading-[14px]">
            {info.getValue().coordinates}
          </p>
        </div>
      </div>
    ),
    header: "Location",
  }),
  columnHelper.accessor("macAddress", {
    cell: (info) => <span className="text-green-600">{info.getValue()}</span>,
    header: "Mac Address",
  }),
  columnHelper.accessor("device", {
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Smartphone className="h-4 w-4 hidden sm:inline" />
        <span>{info.getValue()}</span>
      </div>
    ),
    header: "Device",
  }),
  columnHelper.accessor("browser", {
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Chrome className="h-4 w-4 hidden sm:inline" />
        <span>{info.getValue()}</span>
      </div>
    ),
    header: "Browser",
  }),
  columnHelper.accessor("sessionDuration", {
    cell: (info) => (
      <Badge className="bg-[#fff9e6] text-[#4b4b00] flex-center">
        <Clock className="h-3 w-3 mr-1" />
        <span className="">{info.getValue()}</span>
      </Badge>
    ),
    header: "Session Duration",
  }),
  columnHelper.accessor("sessionCount", {
    cell: (info) => (
      <Badge className="inline-flex items-center">
        <Activity className="h-3 w-3 mr-1 text-red-600" />
        <span>{info.getValue()}</span>
      </Badge>
    ),
    header: "Session Count",
  }),
];

const RealTimeSessionMonitoringViewParticipantsTable = () => {
  const [data] = useState(RealTimeSessionMonitoringTableViewParticipantsData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
      <Table className="min-w-full divide-y divide-border">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="text-heading-color font-inter border-border"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={` py-3.5 text-left text-sm font-semibold ${
                    header.id === "#" ? "w-[50px]" : ""
                  } hidden sm:table-cell`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="divide-y divide-border">
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="text-[14px] leading-[16px] border-border"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className=" py-4 text-sm whitespace-nowrap"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-medium sm:hidden">
                      {cell.column.columnDef.header as string}:
                    </span>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RealTimeSessionMonitoringViewParticipantsTable;
