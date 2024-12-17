import React from "react";
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

import { ChartNoAxesCombined } from "lucide-react";
import { IoPerson } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import { TbArrowsDiff } from "react-icons/tb";
import { MdTimer } from "react-icons/md";
import AdvertisementCampaignsTableManageStats01Icon from "../../../../public/icons/advertisement-campaigns-table-manage-stats-01-icon.svg";
import AdvertisementCampaignsTableManageStats02Icon from "../../../../public/icons/advertisement-campaigns-table-manage-stats-02-icon.svg";
import UpArrowIcon from "../../../../public/icons/up-icon.svg";
import DownArrowIcon from "../../../../public/icons/down-icon.svg";

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

        <div className="overflow-y-auto md:h-[calc(100%-160px)] h-[calc(100%-190px)] md:px-4 flex flex-col gap-12">
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
