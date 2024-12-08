"use client";

import React from "react";

import SectionSearchbar from "@/utils/section-searchbar";
import ThemeSwitcher from "@/utils/theme-switcher";

import { SidebarTrigger } from "@/components/ui/sidebar";
import AppHeaderInboxMenu from "./app-header-inbox-menu";
import AppHeaderNotificationMenu from "./app-header-notification-menu";
import AppHeaderProfileMenu from "./app-header-profile-menu";

const AppHeader = () => {
  return (
    <header className="bg-white dark:bg-primary-theme h-[85px] w-full header-box-shadow sticky top-0 z-50">
      <div className="layout-standard h-full flex items-center justify-between">
        {/* HEADER LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* LARGE SCREEN SIDEBAR BUTTON */}
          <SidebarTrigger />

          {/* COMPONENT SEARCH BAR */}
          <SectionSearchbar />
        </div>

        {/* HEADER RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* DASHBOARD INBOX MENU */}
          <AppHeaderInboxMenu />

          {/* DASHBOARD NOTIFICATION MENU */}
          <AppHeaderNotificationMenu />

          {/* THEME SWITCHER */}
          <ThemeSwitcher />

          {/* DASHBOARD PROFILE MENU */}
          <AppHeaderProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
