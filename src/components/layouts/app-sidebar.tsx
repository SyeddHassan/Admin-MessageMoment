"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavigationData } from "@/constants/layout-components-data";

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
import { ArrowLeftToLine } from "lucide-react";

const AppSidebar = () => {
  const { state, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader className="w-full h-[85px] flex-center">
        {/* LARGE SCREENS */}
        <Image
          src={state === "collapsed" ? MiniLogo : Logo}
          alt="MessageMoment"
          className={`w-full max-lg:hidden ${
            state === "collapsed" ? "h-[45px]" : "w-[185px]"
          }`}
          priority
        />

        <div className="w-[90%] mx-auto flex items-center justify-between lg:hidden">
          <Image src={Logo} alt="MessageMoment" />

          <ArrowLeftToLine
            onClick={() => setOpenMobile(false)}
            className="h-[22px] w-[22px] text-theme-heading-color"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="mt-4">
        <SidebarGroup>
          {/* LARGE SCREENS SIDEBAR  */}
          <SidebarGroupContent>
            {state === "expanded" ? (
              <SidebarMenu className="md:gap-10 gap-8">
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
                      <Link
                        href={item.link}
                        onClick={() => setOpenMobile(false)}
                      >
                        {item.icon}
                        <p
                          className={`md:text-[16px] text-[14px] w-[calc(100%-20px)] text-theme-heading-color font-inter font-semibold ${
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

export default AppSidebar;
