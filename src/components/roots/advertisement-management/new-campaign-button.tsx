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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  clientName: z.string().min(2, "Client name must be at least 2 characters"),
  campaignTitle: z.string().max(120, "Campaign title must be less than 120 characters"),
  linkOnClick: z.string().url("Must be a valid URL"),
  display: z.string(),
  zone: z.string(),
  country: z.string(),
  duration: z.string(),
  impressionsQuantity: z.string().optional(),
  startDate: z.string(),
  startTime: z.string(),
})

const NewCampaignButton = () => {
  const [selectedTab, setSelectedTab] = useState("textCampaign");
  const [charCount, setCharCount] = useState(0);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: "",
      campaignTitle: "",
      linkOnClick: "",
      display: "Everywhere",
      zone: "",
      country: "Worldwide",
      duration: "7 Days",
      impressionsQuantity: "",
      startDate: "",
      startTime: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const charCount = e.target.value.length;
    setCharCount(charCount);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="sm:w-[183px] w-full h-[45px] rounded-[200px] !shadow-button-shadow bg-secondary-theme hover:bg-secondary-theme-hover text-theme-heading-color font-inter flex-center text-[14px] leading-[18px]">
          + New Campaign
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1536px] w-[90%] h-[90%] bg-white border-border dark:bg-background-color flex flex-col justify-between rounded-[6px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col">
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
                      Image/Video Campaign
                    </h1>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="w-full flex flex-col gap-8">
                <h1 className="text-[24px] leading-[30px] font-inter font-bold text-heading-color">
                  Campaign Information
                </h1>

                <FormField
                  control={form.control}
                  name="clientName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                        Client Name
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="ex: twitch"
                          className="h-[50px] rounded-[10px] border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="campaignTitle"
                  render={({ field }) => (
                    <FormItem>
                      <div className="w-full flex items-center justify-between">
                        <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                          Campaign Title
                        </Label>
                        <p className="text-[14px] leading-[24px]">
                          {field.value.length} characters
                        </p>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="ex: Big Sale on at Flight..."
                          className="h-[50px] rounded-[10px] border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkOnClick"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                        Link on Click
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="ex: http://twitch.tv"
                          className="h-[50px] rounded-[10px] border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="display"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                        Display
                      </Label>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-[50px] rounded-[10px] border-border">
                            <SelectValue placeholder="Select display type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="Everywhere">Everywhere</SelectItem>
                          <SelectItem value="Secure">Secure</SelectItem>
                          <SelectItem value="Standard">Standard</SelectItem>
                          <SelectItem value="Wallet">Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
                  <FormField
                    control={form.control}
                    name="zone"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                          Zone/Country
                        </Label>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-[50px] rounded-[10px] border-border">
                              <SelectValue placeholder="Select zone" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="Worldwide">Worldwide</SelectItem>
                            <SelectItem value="Asia">Asia</SelectItem>
                            <SelectItem value="Europe">Europe</SelectItem>
                            <SelectItem value="North America">North America</SelectItem>
                            <SelectItem value="South America">South America</SelectItem>
                            <SelectItem value="Africa">Africa</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                          Duration
                        </Label>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-[50px] rounded-[10px] border-border">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="1 Day">1 Day</SelectItem>
                            <SelectItem value="7 Days">7 Days</SelectItem>
                            <SelectItem value="15 Days">15 Days</SelectItem>
                            <SelectItem value="30 Days">30 Days</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="impressionsQuantity"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                        Impressions Quantity
                      </Label>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="ex: 200,000"
                          className="h-[50px] rounded-[10px] border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                          Start Date
                        </Label>
                        <FormControl>
                          <Input
                            type="date"
                            className="h-[50px] rounded-[10px] border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
                          Start Time
                        </Label>
                        <FormControl>
                          <Input
                            type="time"
                            className="h-[50px] rounded-[10px] border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="md:h-[80px] h-[130px] flex !flex-col !justify-center gap-4">
              <Separator className="h-[2px]" />
              <div className="md:px-4 flex items-center md:justify-end md:flex-row flex-col max-md:gap-4">
                <div className="flex items-center max-md:w-full gap-2">
                  <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="bg-background-color md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-heading-color border-border border hover:bg-general-hover"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-secondary-theme md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-theme-heading-color border-none hover:bg-secondary-theme-hover"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewCampaignButton;

