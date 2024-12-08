"use client";

import React from "react";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Inbox } from "lucide-react";

const AppHeaderInboxMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer hover:bg-general-hover p-2 rounded-full max-md:hidden">
        <Badge className="bg-[#ececff] text-secondary-theme absolute top-[14px] -translate-x-[2px] rounded-[50rem] z-[1] font-bold">
          12
        </Badge>
        <Inbox className="relative text-heading-color" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white dark:bg-background-color border-border w-[320px] h-[220px] flex flex-col justify-between -translate-x-[10px]">
        <div className="flex flex-col h-[70px]">
          <DropdownMenuLabel className="font-inter text-[18px] text-heading-color font-semibold">
            Inbox
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-border" />
        </div>

        <div className="flex flex-col h-[40px]">
          <DropdownMenuSeparator className="bg-border" />
          <div className="h-full flex items-center justify-end gap-4 px-4">
            <p className="text-[12px] text-primary-theme dark:text-paragraph-color cursor-pointer hover:underline font-inter">
              View All
            </p>
            <p className="text-[12px] text-primary-theme dark:text-paragraph-color cursor-pointer hover:underline font-inter">
              Mark As Read
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppHeaderInboxMenu;
