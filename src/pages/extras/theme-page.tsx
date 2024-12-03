"use client";

import React from "react";

import { useTheme } from "next-themes";

const ThemePage = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center gap-8">
      <p
        className="cursor-pointer hover:underline text-[20px] dark:text-primary-theme text-secondary-theme"
        onClick={() => setTheme("dark")}
      >
        Dark
      </p>
      <p
        onClick={() => setTheme("light")}
        className="cursor-pointer hover:underline text-[20px] text-primary-theme dark:text-secondary-theme"
      >
        Light
      </p>
    </div>
  );
};

export default ThemePage;
