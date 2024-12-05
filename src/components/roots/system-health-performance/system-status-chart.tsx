"use client";

import React, { useEffect, useState } from "react";

import {
  SystemStatusProps,
  SystemStatusTypes,
} from "@/interfaces/system-health-performance-page-components-interfaces";

import { SystemStatusData } from "@/constants/system-health-performance-data";

import { Badge } from "@/components/ui/badge";

import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  SquarePlus,
} from "lucide-react";

const SystemStatusChart = () => {
  const [timelineData, setTimelineData] = useState<SystemStatusProps[]>([]);

  useEffect(() => {
    const generateTimelineData = (): SystemStatusProps[] => {
      return Array.from({ length: 90 }, (_, i) => ({
        date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000),
        status:
          Math.random() > 0.95
            ? ((Math.random() > 0.5 ? "partial" : "major") as SystemStatusTypes)
            : "operational",
      }));
    };

    setTimelineData(generateTimelineData());

    return () => setTimelineData([]);
  }, []);

  const getStatusColor = (status: SystemStatusTypes) => {
    switch (status) {
      case "operational":
        return "bg-[#2D6B58]";
      case "partial":
        return "bg-orange-600";
      case "major":
        return "bg-red-600";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusBadge = (status: SystemStatusTypes | undefined) => {
    if (!status) return null;
    switch (status) {
      case "operational":
        return (
          <Badge
            variant="secondary"
            className="bg-[#2D6B58] text-white hover:bg-[#2D6B58]/80 cursor-pointer"
          >
            <CheckCircle className="mr-1 h-3 w-3" />
            Operational
          </Badge>
        );
      case "partial":
        return (
          <Badge
            variant="secondary"
            className="bg-orange-600 text-white hover:bg-orange-400 cursor-pointer"
          >
            <AlertTriangle className="mr-1 h-3 w-3" />
            Partial Outage
          </Badge>
        );
      case "major":
        return (
          <Badge
            variant="secondary"
            className="bg-red-600 text-white hover:bg-red-500 cursor-pointer"
          >
            <AlertCircle className="mr-1 h-3 w-3" />
            Major Outage
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="bg-gray-300 text-gray-700">
            Unknown
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-[#2D6B58] text-white p-3 sm:p-4 rounded-lg">
        <h2 className="text-lg sm:text-2xl font-semibold font-inter tracking-wider uppercase">
          Everything is working
        </h2>
      </div>

      {/* Timeline Section */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-1 ml-3 mb-2 sm:mb-0">
            <SquarePlus className="h-4 w-4 sm:h-5 sm:w-5 text-heading-color" />
            <h3 className="text-sm sm:text-base font-inter text-heading-color font-semibold">
              Site Loading
            </h3>
          </div>
          {getStatusBadge("operational")}
        </div>

        {/* Timeline Visualization */}
        <div className="relative mt-6 sm:mt-0">
          <div className="absolute left-[-3.6rem] sm:-left-[4.5rem] top-1/2 -translate-y-1/2 -rotate-90 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
            <span className="font-inter text-heading-color font-semibold">
              Frequency (seconds)
            </span>
          </div>
          <div className="flex gap-0.5 h-6 sm:h-8 ml-4 sm:ml-6">
            {timelineData.map((day, index) => (
              <div
                key={index}
                className={`flex-1 ${getStatusColor(day.status)}`}
                title={day.date.toLocaleDateString()}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground ml-4 sm:ml-6">
          <span className="font-inter text-heading-color font-semibold">
            90 days ago
          </span>
          <span className="font-inter text-heading-color font-semibold">
            Today
          </span>
        </div>
      </div>

      {/* Status List */}
      <div className="space-y-3 sm:space-y-4">
        {SystemStatusData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b"
          >
            <span className="text-sm sm:text-base font-medium mb-1 sm:mb-0 font-inter text-heading-color">
              {item.name}
            </span>
            {getStatusBadge(item.status)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatusChart;
