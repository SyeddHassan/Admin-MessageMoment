"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

import { ImExit } from "react-icons/im";

const AppHeaderProfileMenu = () => {
  const router = useRouter();

  const HandleLogoOut = () => {
    router.push("/");
  };

  return (
    <>
      <Avatar className="w-[50px] h-[50px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>MM</AvatarFallback>
      </Avatar>

      <Separator orientation="vertical" className="h-[43px]" />

      <h1 className="text-heading-color text-[20px] leading-[20px] font-semibold md:block hidden">
        John Doe
      </h1>

      {/* DELETED OPTION */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="w-[45px] h-[45px] rounded-lg hover:bg-general-hover cursor-pointer flex-center translate-y-[1px]">
            <ImExit className="text-heading-color text-[25px]" />
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
            <AlertDialogAction
              onClick={HandleLogoOut}
              className="text-[14px] bg-secondary-theme text-theme-heading-color font-inter hover:bg-secondary-theme-hover"
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AppHeaderProfileMenu;
