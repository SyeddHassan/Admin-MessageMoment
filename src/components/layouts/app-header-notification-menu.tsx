"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell } from "lucide-react";

const AppHeaderNotificationMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ursor-pointer hover:bg-general-hover p-2 rounded-full max-md:hidden">
        <div className="w-[8px] h-[8px] rounded-full bg-secondary-theme absolute top-[23px] translate-x-[17px]" />
        <Bell className="relative text-heading-color" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white dark:bg-background-color border-border w-[320px] h-[220px] flex flex-col justify-between -translate-x-[10px]">
        <div className="flex flex-col h-[70px]">
          <DropdownMenuLabel className="font-inter text-[18px] text-heading-color font-semibold">
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-border" />
        </div>

        <div className="flex flex-col h-[40px]">
          <DropdownMenuSeparator className="bg-border" />
          <div className="h-full flex items-center justify-end gap-4 px-4">
            <p className="text-[12px] text-secondary-theme cursor-pointer hover:underline font-inter">
              View All
            </p>
            <p className="text-[12px] text-secondary-theme cursor-pointer hover:underline font-inter">
              Mark As Read
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppHeaderNotificationMenu;
