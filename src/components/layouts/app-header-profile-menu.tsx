"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
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
} from "../ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

const AppHeaderProfileMenu = () => {
  const router = useRouter();

  const HandleLogoOut = () => {
    router.push("/");
  };

  return (
    <>
      <Separator orientation="vertical" className="h-[43px]" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer flex items-center gap-2">
            <h1 className="text-heading-color text-[20px] leading-[20px] font-semibold">
              Admin
            </h1>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-48 bg-white font-inter animation-standard p-2 py-4 space-y-2"
        >
          <DropdownMenuItem
            onClick={() => console.log("View Profile")}
            className="bg-white hover:bg-general-hover py-2 cursor-pointer"
          >
            Change Password
          </DropdownMenuItem>

          <DropdownMenuItem asChild onClick={() => console.log("Logout")}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="bg-white hover:bg-general-hover py-2 cursor-pointer !text-[14px] px-2">
                  Log Out
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white dark:bg-background-color border-border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-inter text-heading-color font-bold">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently close
                    this chat room and remove related data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="max-md:mt-4">
                  <AlertDialogCancel className="text-[14px] text-heading-color font-inter hover:bg-general-hover border-border">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={HandleLogoOut}
                    className="text-[14px] bg-secondary-theme text-theme-heading-color font-inter hover:bg-secondary-theme-hover"
                  >
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DELETED OPTION */}
      {/* */}
    </>
  );
};

export default AppHeaderProfileMenu;
