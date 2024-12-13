import React from "react";

import { RealTimeSessionsMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

import { Progress } from "@/components/ui/progress";

const RealTimeMapSessionsStats: React.FC<RealTimeSessionsMapProps> = ({
  data,
}) => {
  const totalSessions = data.reduce((sum, item) => sum + item.session, 0);

  return (
    <div className="w-full h-full flex flex-col gap-4 py-4 overflow-y-auto">
      {data.map((item, index) => {
        const percentage = ((item.session / totalSessions) * 100).toFixed(2);

        return (
          <div key={index} className="flex items-center gap-4 pl-4 pr-8">
            <span
              className={`fi fi-${item.countryCode.toLowerCase()} !w-[25px] !h-[25px] rounded-full flag-shadow !bg-cover bg-[50%_50%]`}
            />

            <div className="w-[calc(100%-40px)]">
              <p className="font-inter text-heading-color text-[0.875rem] font-medium">
                {item.countryName}{" "}
                <span className="text-[12px] leading-[15px] text-paragraph-color font-jetbrains_mono">
                  ({item.session} Session)
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Progress
                  value={parseFloat(percentage)}
                  className="h-[7px] bg-[#e9ecef] dark:bg-[#424242]"
                  indicatorClassName={`bg-[#FFC107] rounded-[50rem]`}
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
