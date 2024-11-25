"use client";

import React from "react";

import { useDrawer } from "@/contexts/drawer-context";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import ComponentSearchBar from "../components/roots/layouts/component-search-bar";
import InboxMenu from "@/components/roots/layouts/inbox-menu";
import NotificationMenu from "@/components/roots/layouts/notification-menu";
import ProfileMenu from "@/components/roots/layouts/profile-menu";

import { Menu } from "lucide-react";

const Header = () => {
  const { open } = useSidebar();
  const { openDrawer } = useDrawer();

  return (
    <header className="bg-white h-[85px] w-full header-box-shadow sticky top-0 z-50">
      <div className="layout-standard h-full flex items-center justify-between">
        {/* HEADER LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* LARGE SCREEN SIDEBAR BUTTON */}
          {!open && <SidebarTrigger className="lg:block hidden" />}

          {/* SMALL & MIDDLE SCREEN SIDEBAR BUTTON */}
          <Menu className="h-[20px] w-[20px] lg:hidden" onClick={openDrawer} />

          {/* COMPONENT SEARCH BAR */}
          <ComponentSearchBar />
        </div>

        {/* HEADER RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* SYSTEM INBOX */}
          <InboxMenu />

          {/* SYSTEM NOTIFICATION */}
          <NotificationMenu />

          {/* SYSTEM PROFILE */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
