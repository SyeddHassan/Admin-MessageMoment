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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Users, Clock, Hash, MapPin } from "lucide-react";
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
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-white dark:bg-primary-theme border-border">
            <DialogTitle>
              <div className="pt-8 py-4">
                <h2 className="font-inter font-bold text-[34px] leading-[36px] text-heading-color tracking-wide mb-6 px-8">
                  Session Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 dark:bg-[#494af8]/10 bg-[#000000]/10 mx-6 py-3 px-2 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Hash className="h-4 w-4 text-heading-color dark:text-theme-heading-color" />
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] leading-[16px] font-medium text-heading-color dark:text-theme-heading-color font-inter">
                        Session ID
                      </p>
                      <p className="text-[12px] leading-[12px] text-paragraph-color dark:text-theme-paragraph-color">
                        128397128937112
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-heading-color dark:text-theme-heading-color" />
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] leading-[16px] font-medium text-heading-color dark:text-theme-heading-color font-inter">
                        Participants
                      </p>
                      <p className="text-[12px] leading-[12px] text-paragraph-color dark:text-theme-paragraph-color">
                        8/10
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-heading-color dark:text-theme-heading-color" />
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] leading-[16px] font-medium text-heading-color dark:text-theme-heading-color font-inter">
                        Location
                      </p>
                      <p className="text-[12px] leading-[12px] text-paragraph-color dark:text-theme-paragraph-color">
                        Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-heading-color dark:text-theme-heading-color" />
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] leading-[16px] font-medium text-heading-color dark:text-theme-heading-color font-inter">
                        Duration
                      </p>
                      <p className="text-[12px] leading-[12px] text-paragraph-color dark:text-theme-paragraph-color">
                        12m 04s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTitle>

            {/* Table */}
            <ScrollArea className="h-[60vh]">
              <RealTimeSessionMonitoringViewParticipantsTable />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
};

export default SessionMonitoringTableManageButton;
