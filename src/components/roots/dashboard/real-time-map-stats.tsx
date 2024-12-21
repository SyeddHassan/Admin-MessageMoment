import React from "react";

import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

import { Progress } from "@/components/ui/progress";

const RealTimeMapStats = ({
  setSelectedCountry,
  selectedTab,
  data,
}: RealTimeMapProps) => {
  const total = data.reduce((sum, country) => {
    const countryTotal = country.countryCities.reduce(
      (citySum, city) =>
        citySum +
        (selectedTab === "sessions" ? city.citySessions : city.cityUsers),
      0
    );
    return sum + countryTotal;
  }, 0);

  return (
    <div className="w-full h-full flex flex-col gap-4 py-4 overflow-y-auto">
      {data.map((item, index) => {
        const value = item.countryCities.reduce(
          (citySum, city) =>
            citySum +
            (selectedTab === "sessions" ? city.citySessions : city.cityUsers),
          0
        );
        const formattedValue = new Intl.NumberFormat().format(value);
        const percentage = ((value / total) * 100).toFixed(0);

        return (
          <div key={index} className="flex items-center gap-4 pl-4 pr-8">
            <span
              onClick={() =>
                setSelectedCountry?.({
                  latitude: item.latitude,
                  longitude: item.longitude,
                })
              }
              className={`fi fi-${item.countryCode.toLowerCase()} !w-[25px] !h-[25px] rounded-full flag-shadow !bg-cover bg-[50%_50%] cursor-pointer`}
            />

            <div className="w-[calc(100%-40px)]">
              <p className="font-inter text-heading-color text-[0.875rem] font-medium">
                {item.countryName}{" "}
                <span className="text-[12px] leading-[15px] text-paragraph-color font-jetbrains_mono">
                  ({formattedValue}{" "}
                  {selectedTab === "sessions" ? "Sessions" : "Users"})
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

export default RealTimeMapStats;
