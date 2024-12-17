"use client";

import React, { useState, useMemo } from "react";

import { AdvertismentCampaignTableProps } from "@/interfaces/table-interfces";

import { AdvertisementCampaignsTableData } from "@/constants/advertisement-management-system-page-components-data";

import {
  flexRender,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "../ui/progress";
import AdvertisementCampaignsTableManageButtons from "../roots/advertisement-management/advertisement-campaigns-table-manage-button";

import {
  Calendar,
  Type,
  User,
  Globe,
  BarChart2,
  TrendingUp,
  ArrowUpDown,
} from "lucide-react";

const AdvertisementCampaignsTable = ({
  selectedTab,
  filteredInput,
}: AdvertismentCampaignTableProps) => {
  const [data] = useState(AdvertisementCampaignsTableData);

  const filteredData = useMemo(() => {
    let filtered =
      selectedTab === "View All"
        ? data
        : data.filter((row) => row.campaignDisplay === selectedTab);

    if (filteredInput) {
      filtered = filtered.filter((row) =>
        row.campaignId.toString().includes(filteredInput)
      );
    }

    return filtered;
  }, [data, selectedTab, filteredInput]);

  const columns: ColumnDef<(typeof AdvertisementCampaignsTableData)[number]>[] =
    [
      {
        id: "switch",
        header: () => (
          <span className="font-semibold text-[14px] text-center w-full">
            Campaign (On/Off)
          </span>
        ),
        cell: () => (
          <div>
            <Switch />
          </div>
        ),
      },

      {
        accessorKey: "campaignId",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px]">Campaign ID</span>
            <p>#</p>
          </div>
        ),
      },

      {
        accessorKey: "timestamp",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px]">Date</span>
            <Calendar size={12} />
          </div>
        ),
      },

      {
        accessorKey: "campaignType",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Type</span>
            <Type size={14} />
          </div>
        ),
      },

      {
        accessorKey: "campaignDisplay",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Display</span>
            <ArrowUpDown size={14} />
          </div>
        ),
      },

      {
        accessorKey: "projectMode",
        header: () => (
          <span className="font-semibold text-[14px]">Project Mode</span>
        ),
        cell: ({ row }) => {
          const projectMode = row.getValue("projectMode") as boolean;
          return <span>{projectMode ? "ON" : "OFF"}</span>;
        },
      },

      {
        accessorKey: "client",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Client</span>
            <User size={14} />
          </div>
        ),
      },

      {
        accessorKey: "zone",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Zone/Country</span>
            <Globe size={16} />
          </div>
        ),
      },

      {
        accessorKey: "impressions",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px]">Impressions</span>
            <BarChart2 size={16} />
          </div>
        ),
        cell: ({ row }) => {
          const impressions = row.original.impressions;
          return (
            <span className="text-sm font-medium">
              {new Intl.NumberFormat().format(impressions)}
            </span>
          );
        },
      },

      {
        accessorKey: "conversions",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px]">Conversions</span>
            <TrendingUp size={16} />
          </div>
        ),
        cell: ({ row }) => {
          const totalImpressions = row.original.impressions;
          const totalConversions = row.original.conversions;

          const percentage =
            totalImpressions > 0
              ? ((totalConversions / totalImpressions) * 100).toFixed(0)
              : 0;

          return (
            <div className="flex items-center lg:gap-8 gap-4">
              <span className="md:text-[14px] text-[12px]">
                {new Intl.NumberFormat().format(totalConversions)}
              </span>
              <Progress
                value={parseFloat(percentage.toString())}
                className="h-[7px] max-lg:w-[200px] bg-[#e9ecef]"
                indicatorClassName="bg-[#FFC107] rounded-[50rem]"
              />
              <p className="md:text-[14px] text-[12px]">{percentage}%</p>
            </div>
          );
        },
      },

      {
        id: "actions",
        header: "",
        cell: () => <AdvertisementCampaignsTableManageButtons />,
      },
    ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="lg:h-[860px] lg:flex lg:flex-col lg:justify-between">
      <div className="overflow-auto">
        <Table>
          <TableHeader className="font-inter tracking-wide text-heading-color font-semibold">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-border">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`max-lg:!w-[200px] ${
                      header.column.id === "switch"
                        ? "lg:w-[100px]"
                        : header.column.id === "campaignId"
                        ? "lg:w-[180px]"
                        : header.column.id === "timestamp"
                        ? "lg:w-[120px]"
                        : header.column.id === "campaignType"
                        ? "lg:w-[100px]"
                        : header.column.id === "campaignDisplay"
                        ? "lg:w-[100px]"
                        : header.column.id === "projectMode"
                        ? "lg:w-[100px]"
                        : header.column.id === "client"
                        ? "lg:w-[140px]"
                        : header.column.id === "zone"
                        ? "lg:w-[100px]"
                        : header.column.id === "impressions"
                        ? "lg:w-[100px]"
                        : header.column.id === "conversions"
                        ? "lg:w-[480px]"
                        : ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="border-border">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.column.id === "sessionType" && "lg:pl-14"
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No session ID found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* TABLE PAGINATION */}
      <div className="flex items-center justify-between py-4">
        <span className="font-semibold font-jetbrains_mono">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="font-inter text-heading-color border hover:bg-general-hover text-[14px] tracking-wider !shadow-button-shadow border-border"
          >
            Previous
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="font-inter bg-secondary-theme text-theme-heading-color hover:bg-secondary-theme-hover text-[14px] tracking-wider !shadow-button-shadow"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCampaignsTable;
