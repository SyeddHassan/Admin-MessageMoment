import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RealTimeSessionMonitoringViewParticipantsTable from "@/components/tables/real-time-session-monitoring-view-participants-table";

const SessionMonitoringTableManageButton = () => {
  return (
    <Popover>
      <PopoverTrigger className="w-full h-[40px] max-lg:px-6 bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color font-inter tracking-wide text-[14px] rounded-[6px] !shadow-button-shadow">
        Manage
      </PopoverTrigger>
      <PopoverContent className="bg-white dark:bg-background-color border-none p-6 flex flex-col gap-4">
        {/* OPTION 1 */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <p className="text-[14px] leading-[18px] text-heading-color font-semibold font-inter tracking-wider hover:text-secondary-theme cursor-pointer">
              End Chat
            </p>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white dark:bg-background-color border-border">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-inter text-heading-color font-bold">
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently close this
                chat room and remove related data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="max-md:mt-4">
              <AlertDialogCancel className="text-[14px] text-heading-color font-inter hover:bg-general-hover border-border">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="text-[14px] bg-secondary-theme text-theme-heading-color font-inter hover:bg-secondary-theme-hover">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Separator />

        {/* OPTION 2 */}
        <p className="text-[14px] leading-[18px] text-heading-color font-semibold font-inter tracking-wider hover:text-secondary-theme cursor-pointer">
          Join as SuperAdmin
        </p>

        <Separator />

        {/* OPTION 3 */}
        <Dialog>
          <DialogTrigger asChild>
            <p className="text-[14px] leading-[18px] text-heading-color font-semibold font-inter tracking-wider hover:text-secondary-theme cursor-pointer">
              View Participants
            </p>
          </DialogTrigger>
          <DialogContent className="max-w-[1536px] w-[90%] h-[90%] bg-white border-border dark:bg-background-color flex flex-col justify-between rounded-[6px] pb-0">
            <DialogHeader className="md:h-[60px] h-[60px] flex flex-col justify-center gap-2">
              <DialogTitle className="md:text-[44px] text-[28px] text-secondary-theme font-inter font-bold md:leading-[50px] leading-[34px] text-start md:px-4">
                Session Details
              </DialogTitle>
              <Separator className="h-[2px]" />
            </DialogHeader>

            <div className="overflow-y-auto md:h-[calc(100%-60px)] h-[calc(100%-60px)] md:px-4 px-2 flex flex-col gap-8 py-4">
              <div className="w-full bg-background-color dark:bg-white/10 md:rounded-[50px] rounded-lg shadow-xl grid md:grid-cols-4 grid-cols-2 max-md:gap-y-4 justify-center p-4">
              <div className="text-center flex flex-col gap-1">
                <h1 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[26px] md:leading-[24px] leading-[22px] font-inter font-bold text-heading-color">Session Id</h1>
                <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[23px] md:leading-[21px] leading-[19px]">12839712893712</p>
              </div>
              <div className="text-center flex flex-col gap-1">
                <h1 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[26px] md:leading-[24px] leading-[22px] font-inter font-bold text-heading-color">Participants</h1>
                <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[23px] md:leading-[21px] leading-[19px]">8/10</p>
              </div>
              <div className="text-center flex flex-col gap-1">
                <h1 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[26px] md:leading-[24px] leading-[22px] font-inter font-bold text-heading-color">Location</h1>
                <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[23px] md:leading-[21px] leading-[19px]">Argentina</p>
              </div>
              <div className="text-center flex flex-col gap-1">
                <h1 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[26px] md:leading-[24px] leading-[22px] font-inter font-bold text-heading-color">Duration</h1>
                <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[23px] md:leading-[21px] leading-[19px]">12m 04s</p>
              </div>
              </div>

              <RealTimeSessionMonitoringViewParticipantsTable />
            </div>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
};

export default SessionMonitoringTableManageButton;
