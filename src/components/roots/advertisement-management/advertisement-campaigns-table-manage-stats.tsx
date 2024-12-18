"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart03 } from "@/components/charts/chartjs-doughnut-charts";
import { Progress } from "@/components/ui/progress";
import Loading from "@/components/partials/loader";
const AmChartsBarChart09 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart09
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { LoaderCircle } from "lucide-react";

import { ChartNoAxesCombined } from "lucide-react";
import { IoPerson, IoBarChartSharp } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { TbArrowsDiff } from "react-icons/tb";
import { MdTimer } from "react-icons/md";
import AdvertisementCampaignsTableManageStats01Icon from "../../../../public/icons/advertisement-campaigns-table-manage-stats-01-icon.svg";
import AdvertisementCampaignsTableManageStats02Icon from "../../../../public/icons/advertisement-campaigns-table-manage-stats-02-icon.svg";
import UpArrowIcon from "../../../../public/icons/up-icon.svg";
import DownArrowIcon from "../../../../public/icons/down-icon.svg";
import { PiLinkSimpleBold } from "react-icons/pi";
import { BsDisplayFill } from "react-icons/bs";
import { TiWorld } from "react-icons/ti";
import { MdSubtitles } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const AdvertisementCampaignsTableManageStats = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
          <ChartNoAxesCombined size={16} className="text-heading-color" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[1536px] w-[90%] h-[90%] bg-white border-border dark:bg-background-color flex flex-col justify-between rounded-[6px]">
        <DialogHeader className="md:h-[80px] h-[60px] flex flex-col justify-center gap-2">
          <DialogTitle className="md:text-[44px] text-[28px] text-secondary-theme font-inter font-bold md:leading-[50px] leading-[34px] text-start md:px-4">
            Campaign Details
          </DialogTitle>
          <Separator className="h-[2px]" />
        </DialogHeader>

        <div className="overflow-y-auto md:h-[calc(100%-160px)] h-[calc(100%-190px)] md:px-4 px-2 flex flex-col gap-12 pt-4">
          {/* INFROMATION SECTION */}
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
            <div className="flex gap-4 items-start">
              <IoPerson className="text-[20px] text-heading-color" />
              <div className="w-[calc(100%-20px)] flex flex-col gap-1">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Client Name
                </h1>

                <p className="text-[16px] leading-[22px]">Twitch</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <TbArrowsDiff className="text-[20px] text-heading-color" />
              <div className="w-[calc(100%-20px)] flex flex-col gap-1">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Type
                </h1>

                <p className="text-[16px] leading-[22px]">Text Advertisement</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MdTimer className="text-[20px] text-heading-color" />
              <div className="w-[calc(100%-20px)] flex flex-col gap-1">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Started On
                </h1>

                <p className="text-[16px] leading-[22px]">
                  24/03/2024 14:15 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <IoIosSwitch className="text-[20px] text-heading-color" />
              <div className="w-[calc(100%-20px)] flex flex-col gap-1">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Campaign (On/Off)
                </h1>

                <Switch />
              </div>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1 lg:h-full h-[350px] flex flex-col gap-4">
              <Card className="w-full h-full cursor-pointer rounded-[0.75rem] !shadow-card-shadow-1 !animation-standard flex-center border-border">
                <CardContent className="flex items-center justify-center gap-4 p-0 md:flex-row flex-col md:text-start text-center">
                  <div
                    className={`w-[3rem] h-[3rem] rounded-[0.5rem] flex-center text-white bg-[#ab40e8]`}
                  >
                    <Image
                      src={AdvertisementCampaignsTableManageStats01Icon}
                      alt="Stats Icon"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-inter font-bold text-heading-color text-[16px] leading-[20px]">
                      Total Campaigns
                    </h1>

                    <p className="text-[16px] leading-[20px] font-semibold">
                      23,893
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full h-full cursor-pointer rounded-[0.75rem] !shadow-card-shadow-1 !animation-standard flex-center border-border">
                <CardContent className="flex items-center justify-center gap-4 p-0 md:flex-row flex-col md:text-start text-center">
                  <div
                    className={`w-[3rem] h-[3rem] rounded-[0.5rem] flex-center text-white bg-[#03A9F4]`}
                  >
                    <Image
                      src={AdvertisementCampaignsTableManageStats02Icon}
                      alt="Stats Icon"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-inter font-bold text-heading-color text-[16px] leading-[20px]">
                      Total Conversions
                    </h1>

                    <p className="text-[16px] leading-[20px] font-semibold">
                      234
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1 lg:h-full h-[350px] flex flex-col gap-4">
              <Card className="w-full h-full cursor-pointer rounded-[0.75rem] !shadow-card-shadow-1 !animation-standard flex-center border-border">
                <CardContent className="flex items-center justify-center gap-4 p-0 md:flex-row flex-col md:text-start text-center">
                  <div
                    className={`w-[3rem] h-[3rem] rounded-[0.5rem] flex-center text-white bg-[#ab40e8]`}
                  >
                    <h1 className="text-[15px] font-bold text-theme-heading-color leading-[17.9px]">
                      15/3
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-inter font-bold text-heading-color text-[16px] leading-[20px]">
                      Impressions Today
                    </h1>

                    <div className="w-full flex items-center justify-between">
                      <p className="text-[16px] leading-[20px] font-semibold">
                        2389
                      </p>
                      <div className="flex items-center gap-1">
                        <Image src={DownArrowIcon} alt="Analytics" />

                        <p
                          className="w-[calc(100%-11px)] text-[12px] font-bold text-[#E14949]
                          "
                        >
                          -3%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full h-full cursor-pointer rounded-[0.75rem] !shadow-card-shadow-1 !animation-standard flex-center border-border">
                <CardContent className="flex items-center justify-center gap-4 p-0 md:flex-row flex-col md:text-start text-center">
                  <div
                    className={`w-[3rem] h-[3rem] rounded-[0.5rem] flex-center text-white bg-[#03A9F4]`}
                  >
                    <h1 className="text-[15px] font-bold text-theme-heading-color leading-[17.9px]">
                      15/3
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-inter font-bold text-heading-color text-[16px] leading-[20px]">
                      Conversions Today
                    </h1>

                    <div className="w-full flex items-center justify-between">
                      <p className="text-[16px] leading-[20px] font-semibold">
                        12
                      </p>
                      <div className="flex items-center gap-1">
                        <Image src={UpArrowIcon} alt="Analytics" />

                        <p
                          className="w-[calc(100%-11px)] text-[12px] font-bold text-[#4DD992]
                          "
                        >
                          +3%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ACHIEVED CARD */}
            <Card className="!standard-card-styling lg:col-span-1 md:col-span-3 col-span-1">
              <CardHeader className="py-6 border-b border-border">
                {/* CARD HEADING */}
                <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
                  Achieved
                </CardTitle>
              </CardHeader>

              {/* SERVER STATUS DOUGHNUT CHART */}
              <CardContent className="lg:h-[350px] h-[400px] flex-center mx-auto">
                <ChartJsDoughnutChart03 percentage={25} />
              </CardContent>
            </Card>
          </div>

          {/* CAMPAIGN DETAILS SECTION */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <MdSubtitles className="text-[25px] text-heading-color" />
              <div className="w-[calc(100%-25px)] flex flex-col gap-2">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Campaign Title
                </h1>

                <p className="text-[16px] leading-[22px]">
                  Big Sale on at Flight Centre! Don&apos;t miss out. Visit
                  www.flightcentre.com now and book your trip!
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex gap-4 items-start">
              <PiLinkSimpleBold className="text-[25px] text-heading-color" />
              <div className="w-[calc(100%-25px)] flex flex-col gap-2">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Link on Click
                </h1>

                <p className="text-[16px] leading-[22px]">https//twitch.tv</p>
              </div>
            </div>

            <Separator />

            <div className="flex md:items-center md:gap-12 gap-8 md:flex-row flex-col">
              <div className="flex gap-4 items-start">
                <BsDisplayFill className="text-[25px] text-heading-color" />
                <div className="w-[calc(100%-25px)] flex flex-col gap-2">
                  <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                    Display
                  </h1>

                  <p className="text-[16px] leading-[22px]">Standard Only</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <TiWorld className="text-[25px] text-heading-color" />
                <div className="w-[calc(100%-25px)] flex flex-col gap-2">
                  <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                    Zone/Country
                  </h1>

                  <p className="text-[16px] leading-[22px]">
                    Asia: Thailand, Vietnam
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex gap-4 items-start">
              <GiProgression className="text-[25px] text-heading-color" />
              <div className="w-[calc(100%-25px)] flex flex-col md:gap-2 gap-8">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Progress
                </h1>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] leading-[22px]">
                      Display 7 Days (1d 23h 14m 12s left)
                    </p>

                    <div className="flex items-center gap-2">
                      <Progress
                        value={80}
                        className="h-[7px] max-lg:w-[200px] bg-[#e9ecef]"
                        indicatorClassName="bg-[#FFC107] rounded-[50rem]"
                      />
                      <p className="md:text-[14px] text-[12px]">80%</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] leading-[22px]">
                      Impressions : 30,000 (6,107 left)
                    </p>

                    <div className="flex items-center gap-2">
                      <Progress
                        value={60}
                        className="h-[7px] max-lg:w-[200px] bg-[#e9ecef]"
                        indicatorClassName="bg-[#FFC107] rounded-[50rem]"
                      />
                      <p className="md:text-[14px] text-[12px]">60%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex gap-4 items-start">
              <IoBarChartSharp className="text-[25px] text-heading-color" />
              <div className="w-[calc(100%-25px)] flex flex-col gap-2">
                <h1 className="text-[18px] leading-[24px] font-inter font-semibold text-heading-color">
                  Charts/Graphics
                </h1>

                <p className="text-[16px] leading-[22px]">Standard Only</p>
              </div>
            </div>

            {/* CAMPAIGN PROGRESS */}
            <Card className="!standard-card-styling mt-4">
              <CardHeader className="py-6 border-b border-border">
                {/* CARD HEADING */}
                <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
                  Campaign Progress
                </CardTitle>
              </CardHeader>

              {/* SERVER STATUS DOUGHNUT CHART */}
              <CardContent className="py-8 h-[650px] max-md:px-2">
                <AmChartsBarChart09
                  chartId="CampaignProgressBarChart"
                  data={[
                    { month: "Feb", impressions: 90, conversions: 40 },
                    { month: "Mar", impressions: 80, conversions: 30 },
                    { month: "Apr", impressions: 100, conversions: 50 },
                    { month: "May", impressions: 90, conversions: 40 },
                    { month: "Jun", impressions: 85, conversions: 45 },
                    { month: "Jul", impressions: 95, conversions: 50 },
                    { month: "Aug", impressions: 100, conversions: 55 },
                    { month: "Sep", impressions: 110, conversions: 60 },
                    { month: "Oct", impressions: 95, conversions: 50 },
                  ]}
                />
              </CardContent>
            </Card>
          </div>

          {/* NEW CAMPAIGN FORM */}
          <div className="">
asdasdas
          </div>
        </div>

        <DialogFooter className="md:h-[80px] h-[130px] flex !flex-col !justify-center gap-4">
          <Separator className="h-[2px]" />
          <div className="md:px-4 flex items-center md:justify-between md:flex-row flex-col max-md:gap-4">
            <Button className="bg-[#E14949] hover:bg-[#C73838] md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-theme-heading-color border-none">
              Delete
            </Button>

            <div className="flex items-center max-md:w-full gap-2">
              <Button className="bg-background-color md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-heading-color border-border border hover:bg-general-hover">
                Edit
              </Button>
              <Button className="bg-secondary-theme md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-theme-heading-color border-none hover:bg-secondary-theme-hover">
                OK
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdvertisementCampaignsTableManageStats;
