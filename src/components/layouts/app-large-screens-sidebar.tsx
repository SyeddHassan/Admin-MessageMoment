"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavigationData } from "@/constants/layout-data";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Logo from "../../../public/logo-white.svg";
import MiniLogo from "../../../public/logo-shortcut.png";

const AppLargeScreensSidebar = () => {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="w-full h-[85px] flex-center max-md:hidden">
        <Image
          src={state === "collapsed" ? MiniLogo : Logo}
          alt="MessageMoment"
          className={`w-full  ${
            state === "collapsed" ? "h-[45px] " : "h-full"
          }`}
          priority
        />
      </SidebarHeader>

      <SidebarContent className="mt-4">
        <SidebarGroup>
          {/* LARGE AND MIDDLE SCREENS SIDEBAR  */}
          <SidebarGroupContent>
            {state === "expanded" ? (
              <SidebarMenu className="gap-10">
                {SidebarNavigationData.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      asChild
                      className={`flex gap-4 p-2 h-fit ${
                        item.page === 8 || item.page === 7 || item.page === 6
                          ? "items-start"
                          : "items-center"
                      } ${pathname === item.link ? "bg-secondary-theme" : ""}`}
                    >
                      <Link href={item.link}>
                        {item.icon}
                        <p
                          className={`text-[16px] w-[calc(100%-20px)] text-theme-heading-color font-inter font-semibold ${
                            item.page === 8 ||
                            item.page === 7 ||
                            item.page === 6
                              ? "-translate-y-[2px]"
                              : ""
                          }`}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <SidebarMenu className="gap-10 w-full items-center">
                {SidebarNavigationData.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <SidebarMenuButton
                            asChild
                            className={`w-full flex-center ${
                              pathname === item.link ? "bg-secondary-theme" : ""
                            }`}
                          >
                            <Link href={item.link}>{item.icon}</Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={5}
                          align="start"
                          className="bg-secondary-theme border-none !duration-75"
                        >
                          <p className="text-[14px] font-semibold text-theme-heading-color font-inter">
                            {item.title}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppLargeScreensSidebar;
