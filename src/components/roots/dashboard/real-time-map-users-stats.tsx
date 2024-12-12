import React from "react";

import { RealTimeMapUsersStatsProps } from "@/interfaces/pages/dashboard-page-components-interface";

import { RealTimeMapUsersStatsData } from "@/constants/dashboard-page-components-data";

import { Progress } from "@/components/ui/progress";

import { BsGlobeAsiaAustralia } from "react-icons/bs";

const RealTimeMapUsersStats = ({
  selectedCountry,
  setSelectedCountry,
}: RealTimeMapUsersStatsProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 overflow-y-auto items-center">
      {/* Country List */}
      <div className="w-full h-[80px] bg-white/10 rounded-2xl shadow-button-shadow border border-border p-4 flex flex-wrap gap-8 overflow-y-auto items-center">
        {RealTimeMapUsersStatsData.map((country) => (
          <span
            key={country.countryCode}
            className={`!w-[35px] !h-[35px] fi fi-${
              country.countryCode
            } rounded-full flag-shadow !bg-cover !bg-[50%_50%] cursor-pointer ${
              selectedCountry?.countryCode === country.countryCode
                ? "border-2 border-blue-500"
                : ""
            }`}
            onClick={() => setSelectedCountry(country)}
          />
        ))}
      </div>

      {/* SELECTED COUNTRY */}
      {selectedCountry === null && (
        <div className="w-full flex-center flex-col gap-4">
          <BsGlobeAsiaAustralia className="text-[140px] text-secondary-theme" />
          <div className="flex flex-col items-center">
            <p className="text-[18px] leading-[24px] font-inter text-heading-color font-bold">
              Select a country
            </p>
            <p className="text-[14px] leading-[18px] max-w-[400px] text-center">
              Please select a country to view its details and number of users.
            </p>
          </div>
        </div>
      )}

      {selectedCountry && (
        <div className="w-full lg:h-[200px] h-[180px] flex-center flex-col gap-4">
          <span
            className={`lg:!w-[90px] !w-[70px] lg:!h-[90px] !h-[70px] fi fi-${selectedCountry.countryCode} rounded-full flag-shadow !bg-cover !bg-[50%_50%]`}
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-heading-color font-inter text-[14px] leading-[18px] font-bold">
              {selectedCountry.name} (
              <span className="text-[12px] font-jetbrains_mono text-paragraph-color">
                {selectedCountry.states.reduce(
                  (total, state) => total + state.users,
                  0
                )}{" "}
                Users
              </span>
              )
            </p>
            <p className="text-[12px] font-jetbrains_mono text-paragraph-color">
              {selectedCountry.latitude} / {selectedCountry.longitude}
            </p>
          </div>
        </div>
      )}

      {/* COUNTRY DETAIL */}
      <div className="w-full lg:h-[calc(100%-280px)] h-[calc(100%-260px)] overflow-y-auto p-4 flex flex-col gap-8">
        {selectedCountry?.states.map((state) => (
          <div key={state.name} className="flex flex-col">
            <p className="text-[16px] leading-[19px] text-heading-color font-inter">
              {state.name}:
              <span className="text-paragraph-color text-[14px] font-jetbrains_mono">
                {" "}
                {state.users} Users
              </span>
            </p>

            <div className="flex items-center gap-3">
              <Progress
                value={
                  (state.users /
                    selectedCountry.states.reduce(
                      (total, s) => total + s.users,
                      0
                    )) *
                  100
                }
                className="h-[7px] bg-[#e9ecef] dark:bg-[#424242]"
                indicatorClassName={`bg-[#4caf50] rounded-[50rem]`}
              />
              <p className="text-[0.75rem] text-paragraph-color">
                {(
                  (state.users /
                    selectedCountry.states.reduce(
                      (total, s) => total + s.users,
                      0
                    )) *
                  100
                ).toFixed(2)}
                %
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeMapUsersStats;
