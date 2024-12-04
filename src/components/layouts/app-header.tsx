"use client";

import React from "react";

import { useDrawer } from "@/providers/drawer-provider";

import DashboardSearchbar from "@/utils/dashboard-searchbar";

import { SidebarTrigger } from "@/components/ui/sidebar";
import AppHeaderInboxMenu from "./app-header-inbox-menu";
import AppHeaderNotificationMenu from "./app-header-notification-menu";
import AppHeaderProfileMenu from "./app-header-profile-menu";

import { Menu } from "lucide-react";

const AppHeader = () => {
  const { openDrawer } = useDrawer();

  return (
    <header className="bg-white dark:bg-primary-theme h-[85px] w-full header-box-shadow sticky top-0 z-50">
      <div className="layout-standard h-full flex items-center justify-between">
        {/* HEADER LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* LARGE SCREEN SIDEBAR BUTTON */}
          <SidebarTrigger className="lg:block hidden" />

          {/* SMALL SCREEN SIDEBAR BUTTON */}
          <Menu
            className="h-[25px] w-[25px] text-heading-color lg:hidden"
            onClick={openDrawer}
          />

          {/* COMPONENT SEARCH BAR */}
          <DashboardSearchbar />
        </div>

        {/* HEADER RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* DASHBOARD INBOX MENU */}
          <AppHeaderInboxMenu />

          {/* DASHBOARD NOTIFICATION MENU */}
          <AppHeaderNotificationMenu />

          {/* DASHBOARD PROFILE MENU */}
          <AppHeaderProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
