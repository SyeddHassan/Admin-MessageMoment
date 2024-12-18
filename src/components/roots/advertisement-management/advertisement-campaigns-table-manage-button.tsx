import React from "react";

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

import { Pencil, Trash } from "lucide-react";
import AdvertisementCampaignsTableManageStats from "./advertisement-campaigns-table-manage-stats";

const AdvertisementCampaignsTableManageButtons = () => {
  return (
    <div className="w-[120px] grid grid-cols-3 gap-4">
      {/* EDIT OPTION */}
      <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
        <Pencil size={16} className="text-heading-color" />
      </div>

      {/* DELETED OPTION */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
            <Trash size={16} className="text-red-500" />
          </div>
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

      {/* STATS OPTION */}
      <AdvertisementCampaignsTableManageStats />
    </div>
  );
};

export default AdvertisementCampaignsTableManageButtons;
