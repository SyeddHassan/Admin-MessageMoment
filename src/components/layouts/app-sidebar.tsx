"use client";

import React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

import AppLargeScreensSidebar from "./app-large-screens-sidebar";
import AppSmallScreensSidebar from "./app-small-screens-sidebar";

export function AppSidebar() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isLargeScreen ? <AppLargeScreensSidebar /> : <AppSmallScreensSidebar />}
    </>
  );
}
