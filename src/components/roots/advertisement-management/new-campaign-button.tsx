"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import AdvertisementManagementSystemNewCampaignImg01 from "../../../../public/images/advertisement-management-system-new-campaign-img-01.png";
import AdvertisementManagementSystemNewCampaignImg02 from "../../../../public/images/advertisement-management-system-new-campaign-img-02.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const NewCampaignButton = () => {
  const [selectedTab, setSelectedTab] = useState("textCampaign");
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const charCount = e.target.value.length;
    setCharCount(charCount);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:w-[183px] w-full h-[45px] rounded-[200px] !shadow-button-shadow bg-secondary-theme hover:bg-secondary-theme-hover text-theme-heading-color font-inter flex-center text-[14px] leading-[18px]">
          + New Campaign
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1536px] w-[90%] h-[90%] bg-white border-border dark:bg-background-color flex flex-col justify-between rounded-[6px]">
        <DialogHeader className="md:h-[80px] h-[60px] flex flex-col justify-center gap-2">
          <DialogTitle className="md:text-[44px] text-[28px] text-secondary-theme font-inter font-bold md:leading-[50px] leading-[34px] text-start md:px-4">
            New Campaign
          </DialogTitle>
          <Separator className="h-[2px]" />
        </DialogHeader>

        <div className="overflow-y-auto md:h-[calc(100%-160px)] h-[calc(100%-190px)] md:px-4 px-2 flex flex-col gap-8 py-4">
          {/* CAMPAIGN TYPE SECTION */}
          <div className="space-y-8">
            <h1 className="text-[24px] leading-[30px] font-inter font-bold text-heading-color">
              Campaign Type
            </h1>

            <div className="w-full gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="col-span-1 flex flex-col items-center gap-4 w-full">
                <div
                  onClick={() => setSelectedTab("textCampaign")}
                  className={`h-[134px] w-full rounded-[10px] bg-background-color dark:bg-primary-theme flex-center p-4 cursor-pointer ${
                    selectedTab === "textCampaign"
                      ? "!ring-secondary-theme ring-2"
                      : "hover:bg-general-hover"
                  }`}
                >
                  <Image
                    src={AdvertisementManagementSystemNewCampaignImg01}
                    className="w-[300px] h-[100px] rounded-sm"
                    alt="Advertisement Management System New Campaign Type"
                  />
                </div>

                <h1
                  className={`text-[16px] leading-[22px] font-inter font-semibold  ${
                    selectedTab === "textCampaign"
                      ? "text-secondary-theme"
                      : "text-heading-color"
                  }`}
                >
                  Text Campaign
                </h1>
              </div>

              <div className="col-span-1 flex flex-col items-center gap-4 w-full">
                <div
                  className={`h-[134px] w-full rounded-[10px] bg-background-color  dark:bg-primary-theme flex-center p-4 cursor-pointer ${
                    selectedTab === "imageCampaign"
                      ? "!ring-secondary-theme ring-2"
                      : "hover:bg-general-hover"
                  }`}
                  onClick={() => setSelectedTab("imageCampaign")}
                >
                  <Image
                    src={AdvertisementManagementSystemNewCampaignImg02}
                    className="w-[140px] h-[100px] rounded-sm"
                    alt="Advertisement Management System New Campaign Type"
                  />
                </div>

                <h1
                  className={`text-[16px] leading-[22px] font-inter font-semibold  ${
                    selectedTab === "imageCampaign"
                      ? "text-secondary-theme"
                      : "text-heading-color"
                  }`}
                >
                  Image Campaign
                </h1>
              </div>
            </div>
          </div>

          <Separator />

          <div className="w-full flex flex-col gap-8">
            <h1 className="text-[24px] leading-[30px] font-inter font-bold text-heading-color">
              Campaign Information
            </h1>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="campaign-name"
                className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
              >
                Client Name
              </Label>
              <Input
                id="campaign-title"
                placeholder="ex: twitch"
                className="h-[50px] rounded-[10px] border-border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center justify-between">
                <Label
                  htmlFor="campaign-title"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Title
                </Label>

                <p className="text-[14px] leading-[24px]">
                  {charCount} characters
                </p>
              </div>

              <Input
                id="campaign-title"
                placeholder="ex: Big Sale on at Flight..."
                className="h-[50px] rounded-[10px] border-border"
                onChange={handleInputChange}
              />
            </div>

            {selectedTab === "imageCampaign" && (
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-image-video"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Image/Video
                </Label>
                <div
                  id="campaign-image-video"
                  className={`h-[200px] w-full rounded-[10px] bg-background-color dark:bg-primary-theme flex-center p-4 cursor-pointer`}
                ></div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="campaign-link"
                className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
              >
                Link on Click
              </Label>
              <Input
                id="campaign-link"
                placeholder="ex: http://twitch.tv"
                className="h-[50px] rounded-[10px] border-border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="campaign-display"
                className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
              >
                Campaign Display
              </Label>
              <Input
                id="campaign-display"
                placeholder="ex: http://twitch.tv"
                className="h-[50px] rounded-[10px] border-border"
              />
            </div>

            <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-zone"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Zone
                </Label>
                <Input
                  id="campaign-zone"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-country"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Country
                </Label>
                <Input
                  id="campaign-country"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-link"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Display
                </Label>
                <Input
                  id="campaign-ink"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p>Impressions Quantity</p>
                <Input
                  id="campaign-ink"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-link"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Display
                </Label>
                <Input
                  id="campaign-ink"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="campaign-link"
                  className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
                >
                  Campaign Display
                </Label>
                <Input
                  id="campaign-ink"
                  placeholder="ex: http://twitch.tv"
                  className="h-[50px] rounded-[10px] border-border"
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="md:h-[80px] h-[130px] flex !flex-col !justify-center gap-4">
          <Separator className="h-[2px]" />
          <div className="md:px-4 flex items-center md:justify-end md:flex-row flex-col max-md:gap-4">
            <div className="flex items-center max-md:w-full gap-2">
              <Button className="bg-background-color md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-heading-color border-border border hover:bg-general-hover">
                Cancel
              </Button>
              <Button className="bg-secondary-theme md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-theme-heading-color border-none hover:bg-secondary-theme-hover">
                Save
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCampaignButton;
