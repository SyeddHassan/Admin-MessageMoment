import React from "react";

import { MessageMomentStatsCardsData } from "@/constants/dashboard-page-data";

import { Card, CardContent } from "@/components/ui/card";

const MessageMomentStatsCards = () => {
  return (
    <section
      className={
        "w-full sm:flex sm:flex-wrap grid grid-cols-2 max-lg:justify-center max-lg:items-center gap-4"
      }
    >
      {MessageMomentStatsCardsData.map((data) => (
        <Card
          key={data.stats}
          className={`sm:w-[300px] h-[130px] cursor-pointer rounded-[0.75rem] card-box-showdow-02 !animation-standard flex-center ${
            data.stats === 5 ? "col-span-2" : ""
          }`}
        >
          <CardContent className="flex items-center justify-center sm:gap-8 gap-4 p-0">
            <div
              className={`sm:w-[3rem] w-[2.5rem] sm:h-[3rem] h-[2.5rem] rounded-[0.5rem] flex-center text-white`}
              style={{ backgroundColor: data.bgColor }}
            >
              {data.icon}
            </div>
            <div
              className={`flex flex-col gap-1 translate-y-[2px] ${
                data.stats === 5 ? "" : "max-sm:w-[50%]"
              }`}
            >
              <h1 className="font-inter text-heading-color lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[18px] md:leading-[16px] leading-[14px]">
                {data.title}
              </h1>
              <p className="sm:text-[16px] text-[14px] font-semibold">
                {data.detail}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default MessageMomentStatsCards;
