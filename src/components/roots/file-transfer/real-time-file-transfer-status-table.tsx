"use client";

import React, { useMemo, useState } from "react";

import {
  ColumnDefWithMeta,
  RealTimeFileTransferStatusTableProps01,
  RealTimeFileTransferStatusTableProps02,
} from "@/interfaces/file-trasfer-page-interfaces";

import { RealTimeFileTransferStatusTableData } from "@/constants/file-trasfer-page-data";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  AArrowUp,
  ArrowRight,
  ArrowUpWideNarrow,
  ChartSpline,
  FileText,
  OctagonAlert,
  Paperclip,
} from "lucide-react";

const RealTimeFileTransferStatusTable = ({
  selectedTab,
  filteredInput,
}: RealTimeFileTransferStatusTableProps01) => {
  const [data] = useState(RealTimeFileTransferStatusTableData);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

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

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = useMemo(
    () =>
      filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      ),
    [filteredData, currentPage, rowsPerPage]
  );

  const columns: ColumnDefWithMeta<RealTimeFileTransferStatusTableProps02>[] = [
    {
      accessorKey: "index",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Index
          </span>
          <ArrowUpWideNarrow size={16} />
        </div>
      ),
      cell: ({ row }) => (
        <div>{(currentPage - 1) * rowsPerPage + row.index + 1}.</div>
      ),
      meta: { className: "lg:w-[5%] text-center rounded-[15px_0px_0px_0px]" },
    },

    {
      accessorKey: "sessionId",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Session ID
          </span>
          <FileText size={16} />
        </div>
      ),
      meta: { className: "lg:w-[12%]" },
    },

    {
      accessorKey: "file",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            File
          </span>
          <Paperclip size={16} />
        </div>
      ),
    },

    {
      accessorKey: "fileType",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Type
          </span>
          <ArrowRight size={16} />
        </div>
      ),
    },

    {
      accessorKey: "status",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Status
          </span>
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

        return <span className={`font-semibold ${statusColor}`}>{status}</span>;
      },
    },

    {
      accessorKey: "size",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] text-[14px]">Size</span>
          <AArrowUp size={16} />
        </div>
      ),
    },

    {
      id: "actions",
      meta: { className: "rounded-[0px_15px_0px_0px]" },
      header: "",
      cell: () => (
        <div className="w-full flex items-center gap-4">
          <Button className="w-full bg-transparent text-secondary-theme hover:text-secondary-theme-hovered-color underline font-inter tracking-wide text-[14px]">
            View File
          </Button>
          <Button className="w-full bg-secondary-theme hover:bg-secondary-theme-hovered-color text-white font-inter tracking-wide text-[14px] rounded-[6px] button-box-shadow">
            Download File
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      {filteredData.length === 0 ? (
        <div className="flex-center flex-col gap-4 my-8">
          <OctagonAlert className="lg:w-[5%] md:w-[15%] w-[25%] lg:h-[5%] md:h-[15%] h-[25%] text-heading-color" />
          <h1 className="text-center">No session ID found.</h1>
        </div>
      ) : (
        <>
          <table
            key={currentPage}
            className="min-w-full border-b rounded-lg border-gray-200 text-left"
          >
            <thead className="bg-black font-inter text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const metaClassName =
                      (
                        header.column
                          .columnDef as ColumnDefWithMeta<RealTimeFileTransferStatusTableProps02>
                      ).meta?.className || "";

                    return (
                      <th
                        key={header.id}
                        className={`px-4 py-4 border-b border-gray-300 ${metaClassName}`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => {
                    const metaClassName =
                      (
                        cell.column
                          .columnDef as ColumnDefWithMeta<RealTimeFileTransferStatusTableProps02>
                      ).meta?.className || "";

                    return (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 border-b border-gray-200 md:text-[14px] text-[12px] ${metaClassName}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <Pagination className="w-full flex items-center justify-center mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  isActive={currentPage !== 1}
                  className="ffont-inter text-heading-color text-[14px] cursor-pointer hover:underline border-none"
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 5 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                  isActive={currentPage < totalPages}
                  className={`font-inter text-heading-color text-[14px] cursor-pointer hover:underline border-none`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default RealTimeFileTransferStatusTable;
