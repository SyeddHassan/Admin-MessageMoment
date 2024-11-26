import React from "react";

import {
  CountryStats,
  RealTimeMapActivityPropsProps,
  User,
} from "@/interfaces/dashboard-page-interfaces";

import { RealTimeMapActivityData } from "@/constants/dashboard-page-data";

import { Progress } from "@/components/ui/progress";
import RealTimeSessionsMap from "./real-time-sessions-map";
import RealTimeUsersMap from "./real-time-users-map";

const RealTimeMapActivity = ({
  selectedTab,
}: RealTimeMapActivityPropsProps) => {
  // CALCULATE COUNTRY STATS AND TOTAL SESSIONS
  const calculateCountryStats = (data: User[]) => {
    const countryStats: CountryStats = {};

    // ITERATE SESSIONS TO BUILD COUNTRY STATS
    data.forEach((session) => {
      if (!countryStats[session.country]) {
        countryStats[session.country] = {
          sessions: 0,
          code: session.countryCode,
        };
      }
      countryStats[session.country].sessions += 1;
    });

    // TOTAL NUMBER OF SESSIONS
    const totalSessions = Object.values(countryStats).reduce(
      (acc, country) => acc + country.sessions,
      0
    );

    return { countryStats, totalSessions };
  };

  // FETCHING DATA
  const { countryStats, totalSessions } = calculateCountryStats(
    RealTimeMapActivityData
  );

  return (
    <>
      {/* REAL TIME MAP */}
      <div className="lg:w-[66.66666667%] md:w-[60%] w-full h-full">
        {selectedTab === "sessions" ? (
          <>
            <RealTimeSessionsMap />
          </>
        ) : (
          <>
            <RealTimeUsersMap />
          </>
        )}
      </div>

      {/* REAL TIME MAP STATS */}
      <div className="lg:w-[calc(100%-66.66666667%)] md:w-[calc(100%-60%)] w-full lg:h-full h-[400px] flex flex-col gap-4 py-4 overflow-y-auto">
        {selectedTab === "sessions" ? (
          Object.entries(countryStats).map(
            ([countryName, { sessions, code }], index) => {
              const percentage = ((sessions / totalSessions) * 100).toFixed(1);

              return (
                <div key={index} className="flex items-center gap-4 px-8">
                  <span
                    className={`fi fi-${code.toLowerCase()} !w-[25px] !h-[25px] rounded-full flag-shadow !bg-cover`}
                  />

                  <div className="w-[calc(100%-40px)]">
                    <p className="font-inter text-heading-color text-[0.875rem]">
                      {countryName}
                    </p>
                    <div className="flex items-center gap-3">
                      <Progress
                        value={parseFloat(percentage)}
                        className="h-[7px] bg-[#e9ecef]"
                        indicatorClassName={`bg-[#0069f7] rounded-[50rem]`}
                      />
                      <p className="text-[0.75rem]">{percentage}%</p>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <>asdas</>
        )}
      </div>
    </>
  );
};

export default RealTimeMapActivity;
