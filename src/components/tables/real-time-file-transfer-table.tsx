"use client";

import React, { useState, useMemo } from "react";

import { RealTimeFileTransferTableProps } from "@/interfaces/table-interfces";

import { RealTimeFileTransferStatusTableData } from "@/constants/file-transfer-page-components-data";

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

import {
  AArrowUp,
  ArrowRight,
  ChartSpline,
  FileText,
  Paperclip,
} from "lucide-react";

const RealTimeFileTransferTable = ({
  selectedTab,
  filteredInput,
}: RealTimeFileTransferTableProps) => {
  const [data] = useState(RealTimeFileTransferStatusTableData);

  const filteredData = useMemo(() => {
    let filtered =
      selectedTab === "View All"
        ? data
        : data.filter((row) => row.sessionType === selectedTab);

    if (filteredInput) {
      filtered = filtered.filter((row) =>
        row.sessionId.toString().includes(filteredInput)
      );
    }

    return filtered;
  }, [data, selectedTab, filteredInput]);

  const columns: ColumnDef<
    (typeof RealTimeFileTransferStatusTableData)[number]
  >[] = [
    {
      accessorKey: "sessionId",
      header: () => (
        <div className="w-full flex items-center gap-4">
          <span className="font-semibold text-[14px]">Session ID</span>
          <FileText size={16} />
        </div>
      ),
      cell: ({ row }) => row.getValue("sessionId"),
    },

    {
      accessorKey: "file",
      header: () => (
        <div className="w-full flex items-center gap-4">
          <span className="font-semibold text-[14px]">File Name</span>
          <Paperclip size={16} />
        </div>
      ),
    },

    {
      accessorKey: "fileType",
      header: () => (
        <div className="w-full flex items-center gap-4">
          <span className="font-semibold text-[14px] ">File Type</span>
          <ArrowRight size={16} />
        </div>
      ),
    },

    {
      accessorKey: "status",
      header: () => (
        <div className="w-full flex items-center gap-4">
          <span className="font-semibold text-[14px]">File Status</span>
          <ChartSpline size={16} />
        </div>
      ),
      cell: ({ row }) => {
        const status = row.getValue<string>("status");
        const statusColor =
          status === "Successful"
            ? "text-green-600"
            : status === "Failed"
            ? "text-red-700"
            : "text-yellow-600";

        return <span className={`${statusColor}`}>{status}</span>;
      },
    },

    {
      accessorKey: "size",
      header: () => (
        <div className="w-full flex items-center gap-4">
          <span className="font-semibold text-[14px]">File Size</span>
          <AArrowUp size={16} />
        </div>
      ),
    },

    {
      id: "actions",
      header: "",
      cell: () => (
        <div className="w-full flex items-center gap-4">
          <Button className="w-full bg-transparent text-secondary-theme hover:text-secondary-theme-hover underline font-inter tracking-wide text-[14px]">
            View File
          </Button>
          <Button className="w-full bg-white dark:bg-background-color hover:bg-general-hover dark:hover:bg-primary-theme-hover text-heading-color font-inter tracking-wide text-[14px] rounded-[6px] shadow-button-shadow">
            Download File
          </Button>
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
                      header.column.id === "actions"
                        ? "lg:w-[350px]"
                        : header.column.id === "sessionId"
                        ? "lg:w-[200px]"
                        : header.column.id === "file"
                        ? "lg:w-[300px]"
                        : header.column.id === "fileType"
                        ? "lg:w-[200px]"
                        : header.column.id === "status"
                        ? "lg:w-[200px]"
                        : header.column.id === "size"
                        ? "lg:w-[200px]"
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
                    <TableCell key={cell.id}>
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
            className="font-inter text-heading-color border hover:bg-general-hover text-[14px] tracking-wider"
          >
            Previous
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="font-inter bg-secondary-theme text-theme-heading-color hover:bg-secondary-theme-hover text-[14px] tracking-wider"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFileTransferTable;
