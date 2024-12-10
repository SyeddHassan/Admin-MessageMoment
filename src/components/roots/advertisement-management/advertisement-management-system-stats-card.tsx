import React from "react";
import Image from "next/image";

import { AdvertismentManagementSystemStatsCardsData } from "@/constants/advertisement-management-system-page-components-data";

import { Card, CardContent } from "@/components/ui/card";

import UpArrowIcon from "../../../../public/icons/up-icon.svg";
import DownArrowIcon from "../../../../public/icons/down-icon.svg";

const AdvertisementManagementSystemStatsCards = () => {
  return (
    <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      {AdvertismentManagementSystemStatsCardsData.map((data) => (
        <Card
          key={data.stats}
          className={`w-full lg:h-[130px] h-[180px] cursor-pointer rounded-[0.75rem] shadow-card-shadow-1 hover:shadow-card-shadow-2 !animation-standard flex-center border-border`}
        >
          <CardContent
            className={`flex items-center justify-center gap-4 p-0 md:flex-row flex-col md:text-start text-center`}
          >
            <div
              className={`w-[3rem] h-[3rem] rounded-[0.5rem] flex-center text-white`}
              style={{ backgroundColor: data.bgColor }}
            >
              {data.stats === 1 || data.stats === 2 ? (
                <Image src={data.icon} alt="Stats Icon" />
              ) : (
                <h1 className="text-[15px] font-bold text-theme-heading-color leading-[17.9px]">
                  {data.iconTitle}
                </h1>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-inter font-medium text-heading-color text-[16px] leading-[20px]">
                {data.title}
              </h1>

              {data.stats === 1 || data.stats === 2 || data.stats === 3 ? (
                <div className="w-full flex items-center justify-between">
                  <p className="text-[16px] leading-[20px] font-semibold">
                    {data.detail}
                  </p>
                  <div className="flex items-center gap-1">
                    <Image
                      src={data.profit ? UpArrowIcon : DownArrowIcon}
                      alt="Analytics"
                    />

                    <p
                      className={`w-[calc(100%-11px)] text-[12px] font-bold ${
                        data.profit ? "text-[#4DD992]" : "text-[#E14949]"
                      }`}
                    >
                      {data.profit ? "+" : "-"}
                      {data.analyticsPerentage}%
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <h1 className="font-inter font-medium text-heading-color text-[14px] leading-[18px]">
                    {data.title2}
                  </h1>
                  <p className="text-[14px] leading-[18px] font-semibold">
                    {data.detail}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default AdvertisementManagementSystemStatsCards;
