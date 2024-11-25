"use client";

import { useMemo, useState } from "react";

import {
  ColumnDefWithMeta,
  RealTimeSessionMonitoringTableProps,
  RealTimeSessionMonitoringTableProps01,
} from "@/interfaces/dashboard-page-interfaces";

import { RealTimeSessionMonitoringTableData } from "@/constants/dashboard-page-data";

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
import { Progress } from "@/components/ui/progress";

import {
  ArrowRight,
  ArrowUpWideNarrow,
  Clock,
  FileText,
  MapPin,
  OctagonAlert,
  Users,
} from "lucide-react";

const RealTimeSessionMonitoringTable = ({
  selectedTab,
  filteredInput,
}: RealTimeSessionMonitoringTableProps01) => {
  const [data] = useState(RealTimeSessionMonitoringTableData);
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

  const columns: ColumnDefWithMeta<RealTimeSessionMonitoringTableProps>[] = [
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
      meta: { className: "lg:w-[5%] text-center" },
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
      accessorKey: "participants",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Participants
          </span>
          <Users size={16} />
        </div>
      ),
      cell: ({ row }) => {
        const totalParticipants = 10;
        const currentParticipants = row.original.participants;

        const percentage = (currentParticipants / totalParticipants) * 100;

        return (
          <div className="flex items-center lg:gap-8 gap-4">
            <span className="md:text-[14px] text-[12px]">
              {currentParticipants}/{totalParticipants}
            </span>
            <Progress
              value={percentage}
              className="h-[7px] max-lg:w-[200px] bg-[#e9ecef]"
              indicatorClassName="bg-secondary-theme rounded-[50rem]"
            />
            <p className="md:text-[14px] text-[12px]">{percentage}%</p>
          </div>
        );
      },
      meta: { className: "lg:w-[28%] lg:pr-12" },
    },

    {
      accessorKey: "sessionType",
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
      accessorKey: "location",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] md:text-[14px] text-[12px]">
            Location
          </span>
          <MapPin size={16} />
        </div>
      ),
      cell: ({ row }) => {
        const location = row.original.location;
        const locationCode = row.original.locationCode.toLowerCase();
        return (
          <div className="flex items-center lg:gap-8 gap-4">
            <span
              className={`w-4 h-4 rounded-full fi fi-${locationCode} !bg-cover`}
            />
            <span>{location}</span>
          </div>
        );
      },
    },

    {
      accessorKey: "duration",
      header: () => (
        <div className="w-full flex items-center lg:gap-8 gap-4">
          <span className="font-semibold lg:text-[16px] text-[14px]">
            Duration
          </span>
          <Clock size={16} />
        </div>
      ),
    },

    {
      id: "actions",
      header: "",
      cell: () => (
        <Button className="w-full bg-secondary-theme hover:bg-[#0052cc] text-white font-inter tracking-wide text-[14px] rounded-[6px] button-box-shadow">
          Manage
        </Button>
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
            <thead className="bg-hovered-color rounded-lg font-inter text-heading-color">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`px-4 py-4 border-b border-gray-300 ${
                        (
                          header.column
                            .columnDef as ColumnDefWithMeta<RealTimeSessionMonitoringTableProps>
                        ).meta?.className || ""
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
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
                          .columnDef as ColumnDefWithMeta<RealTimeSessionMonitoringTableProps>
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

export default RealTimeSessionMonitoringTable;
