"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarNavigationData } from "@/constants/layout-data";

import { useDrawer } from "@/contexts/drawer-context";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import Logo from "../../public/logo-white.svg";
import { ArrowLeftToLine } from "lucide-react";

const SmallScreensSidebar = () => {
  const { isDrawerOpen, closeDrawer } = useDrawer();

  const pathname = usePathname();

  return (
    <Drawer open={isDrawerOpen} onOpenChange={closeDrawer} direction="left">
      <DrawerContent
        className="bg-black border-none rounded-none"
        aria-describedby={undefined}
      >
        <DrawerHeader>
          <DrawerTitle className="w-[90%] mx-auto flex items-center justify-between">
            <Image src={Logo} alt="MessageMoment" />

            <ArrowLeftToLine
              onClick={closeDrawer}
              className="h-[22px] w-[22px] text-white"
            />
          </DrawerTitle>
        </DrawerHeader>

        <ul className="w-[90%] mx-auto p-2 py-8 flex flex-col gap-4">
          {SidebarNavigationData.map((item, index) => (
            <Link key={index} href={item.link} onClick={closeDrawer}>
              <li
                className={`flex gap-4 p-2 h-fit text-white rounded-md ${
                  item.page === 8 || item.page === 7 || item.page === 6
                    ? "items-start"
                    : "items-center"
                } ${pathname === item.link ? "bg-[#27272A] " : ""}`}
              >
                {item.icon}
                <p
                  className={`text-[14px] w-[calc(100%-20px)] text-white font-inter font-semibold ${
                    item.page === 8 || item.page === 7 || item.page === 6
                      ? "-translate-y-[2px]"
                      : ""
                  }`}
                >
                  {item.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default SmallScreensSidebar;
