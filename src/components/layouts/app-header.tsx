"use client";

import React from "react";

import ThemeSwitcher from "@/utils/theme-switcher";

import { SidebarTrigger } from "@/components/ui/sidebar";
import AppHeaderProfileMenu from "./app-header-profile-menu";

const AppHeader = () => {
  return (
    <header className="bg-white dark:bg-primary-theme h-[85px] w-full header-box-shadow !sticky top-0 z-50">
      <div className="layout-standard h-full flex items-center justify-between">
        {/* HEADER LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* LARGE SCREEN SIDEBAR BUTTON */}
          <SidebarTrigger />
        </div>

        {/* HEADER RIGHT SIDE */}
        <div className="flex items-center gap-4">
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
