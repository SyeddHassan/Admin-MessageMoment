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
          <AlertDialogContent className="bg-white dark:bg-background-color border-none">
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
        <p className="text-[14px] leading-[18px] text-heading-color font-semibold font-inter tracking-wider hover:text-secondary-theme cursor-pointer">
          View Participants
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default SessionMonitoringTableManageButton;
