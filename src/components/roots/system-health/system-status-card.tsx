"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  SquarePlus,
} from "lucide-react";
import { generateTimelineData } from "@/constants/system-health-page-data";


const SystemStatus = () => {
  const timelineData = generateTimelineData();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-[#2D6B58]";
      case "partial":
        return "bg-orange-400";
      case "major":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge
            variant="secondary"
            className="bg-[#2D6B58] text-white hover:bg-[#2D6B58]"
          >
            <CheckCircle className="mr-1 h-3 w-3" />
            Operational
          </Badge>
        );
      case "major":
        return (
          <Badge
            variant="secondary"
            className="bg-red-500 text-white hover:bg-red-500"
          >
            <AlertCircle className="mr-1 h-3 w-3" />
            Major Outage
          </Badge>
        );
      case "partial":
        return (
          <Badge
            variant="secondary"
            className="bg-orange-400 text-white hover:bg-orange-400"
          >
            <AlertTriangle className="mr-1 h-3 w-3" />
            Partial Outage
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-4">
      <CardHeader className="py-5 border-b border-border">
        <CardTitle className="text-[1rem] font-inter text-heading-color font-medium">
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-[#2D6B58] text-white p-3 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-2xl font-semibold font-inter">
              Everything is working
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center gap-1 ml-3 mb-2 sm:mb-0">
                <SquarePlus className="h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-sm sm:text-base font-inter text-black">
                  Site Loading
                </h3>
              </div>
              {getStatusBadge("operational")}
            </div>
            <div className="relative mt-6 sm:mt-0">
              <div className="absolute left-[-3.6rem] sm:-left-[4.5rem] top-1/2 -translate-y-1/2 -rotate-90 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                <span className="font-inter text-black">
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
              <span className="font-inter text-black">90 days ago</span>
              <span className="font-inter text-black">Today</span>
            </div>
          </div>

          {/* Status List */}
          <div className="space-y-3 sm:space-y-4">
            {[
              { name: "Server status", status: "operational" },
              { name: "File Uploading", status: "major" },
              { name: "Chat GTP Integration", status: "partial" },
              { name: "Chat Function", status: "operational" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b"
              >
                <span className="text-sm sm:text-base font-medium mb-1 sm:mb-0 font-inter text-black">
                  {item.name}
                </span>
                {getStatusBadge(item.status)}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemStatus;