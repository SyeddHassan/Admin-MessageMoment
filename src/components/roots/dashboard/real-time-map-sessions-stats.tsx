import React from "react";

import { RealTimeMapSessionsStatsData } from "@/constants/dashboard-page-components-data";

import { Progress } from "@/components/ui/progress";

const RealTimeMapSessionsStats = () => {
  const totalSessions = RealTimeMapSessionsStatsData.reduce(
    (sum, data) => sum + data.session,
    0
  );

  return (
    <div className="w-full h-full flex flex-col gap-4 py-4 overflow-y-auto">
      {RealTimeMapSessionsStatsData.map((data, index) => {
        const percentage = ((data.session / totalSessions) * 100).toFixed(2);

        return (
          <div key={index} className="flex items-center gap-4 px-8">
            <span
              className={`fi fi-${data.countryCode.toLowerCase()} !w-[25px] !h-[25px] rounded-full flag-shadow !bg-cover bg-[50%_50%]`}
            />

            <div className="w-[calc(100%-40px)]">
              <p className="font-inter text-heading-color text-[0.875rem] font-medium">
                {data.countryName}
              </p>
              <div className="flex items-center gap-3">
                <Progress
                  value={parseFloat(percentage)}
                  className="h-[7px] bg-[#e9ecef] dark:bg-[#424242]"
                  indicatorClassName={`bg-[#4caf50] rounded-[50rem]`}
                />
                <p className="text-[0.75rem]">{percentage}%</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RealTimeMapSessionsStats;
