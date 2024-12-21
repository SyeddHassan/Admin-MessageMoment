"use client";

import React from "react";

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

const RealTimeSessionMonitoringViewParticipantsTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="text-heading-color font-inter border-border !w-[600px]">
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Telcom Provider</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Mac Address</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Browser</TableHead>
            <TableHead>Session Duration</TableHead>
            <TableHead>Session Count</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {RealTimeSessionMonitoringTableViewParticipantsData.map(
            (participant, index) => (
              <TableRow
                key={participant.id}
                className="!w-[200px] text-[14px] leading-[16px] border-border"
              >
                <TableCell className="text-heading-color">
                  {index + 1}
                </TableCell>
                <TableCell>{participant.userId}</TableCell>
                <TableCell className="text-blue-600">
                  {participant.ipAddress}
                </TableCell>
                <TableCell>{participant.telcomProvider}</TableCell>
                <TableCell>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4" />
                    <div className="flex flex-col gap-2">
                      <p>{participant.location.country}</p>
                      <p className="text-[12px] leading-[14px]">
                        {participant.location.coordinates}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-green-600">
                  {participant.macAddress}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    {participant.device}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Chrome className="h-4 w-4" />
                    {participant.browser}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#fff9e6] text-[#4b4b00]">
                    <Clock className="h-3 w-3 mr-1" />
                    {participant.sessionDuration}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge>
                    <Activity className="h-3 w-3 mr-1 text-red-600" />
                    {participant.sessionCount}
                  </Badge>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RealTimeSessionMonitoringViewParticipantsTable;
