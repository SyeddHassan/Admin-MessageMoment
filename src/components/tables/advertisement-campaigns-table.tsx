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

import { ArrowRight, FileText, Users } from "lucide-react";

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
        header: "Campaign (On/Off)",
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
            <FileText size={16} />
          </div>
        ),
        cell: ({ row }) => row.getValue("campaignId"),
      },

      {
        accessorKey: "timestamp",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px]">Date</span>
            <Users size={16} />
          </div>
        ),
      },

      {
        accessorKey: "campaignType",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Type</span>
            <ArrowRight size={16} />
          </div>
        ),
      },

      {
        accessorKey: "campaignDisplay",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Display</span>
            <ArrowRight size={16} />
          </div>
        ),
      },

      {
        accessorKey: "projectMode",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Project Mode</span>
            <ArrowRight size={16} />
          </div>
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
            <ArrowRight size={16} />
          </div>
        ),
      },

      {
        accessorKey: "zone",
        header: () => (
          <div className="w-full flex items-center gap-4">
            <span className="font-semibold text-[14px] ">Zone/Country</span>
            <ArrowRight size={16} />
          </div>
        ),
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
                    className={`max-lg:!w-[180px] ${
                      header.column.id === "switch"
                        ? "lg:w-[180px]"
                        : header.column.id === "campaignId"
                        ? "lg:w-[200px]"
                        : header.column.id === "timestamp"
                        ? "lg:w-[240px]"
                        : header.column.id === "campaignType"
                        ? "lg:w-[180px]"
                        : header.column.id === "campaignDisplay"
                        ? "lg:w-[180px]"
                        : header.column.id === "projectMode"
                        ? "lg:w-[180px]"
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
            className="font-inter text-heading-color border hover:bg-general-hover text-[14px] tracking-wider !shadow-button-shadow"
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
