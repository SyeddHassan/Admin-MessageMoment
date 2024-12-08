import React from "react";

import {
  FilterButtons01Props,
  FilterButtons02Props,
  FilterButtons03Props,
  FilterButtons04Props,
} from "@/interfaces/partial-components-interface";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { ListFilter } from "lucide-react";

export const FilterButtons01 = ({
  selectedTab,
  setSelectedTab,
}: FilterButtons01Props) => {
  return (
    <div className="flex max-sm:w-full font-inter font-medium">
      <Button
        onClick={() => setSelectedTab("sessions")}
        className={`h-[40px] sm:w-[135px] w-full border border-border rounded-[6px_0_0_6px] text-[14px] !shadow-button-shadow ${
          selectedTab === "sessions"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white dark:bg-background-color hover:bg-general-hover dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Sessions
      </Button>
      <Button
        onClick={() => setSelectedTab("users")}
        className={`h-[40px] sm:w-[135px] w-full border border-border rounded-[0_6px_6px_0] text-[14px] !shadow-button-shadow ${
          selectedTab === "users"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white dark:bg-background-color hover:bg-general-hover dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Users
      </Button>
    </div>
  );
};

export const FilterButtons02 = ({
  selectedTab,
  setSelectedTab,
}: FilterButtons02Props) => {
  return (
    <div className="md:flex max-sm:w-full max-md:grid max-md:grid-cols-2 font-inter font-medium">
      <Button
        onClick={() => setSelectedTab("View All")}
        className={`h-[40px] sm:w-[135px] w-full md:rounded-[6px_0_0_6px] rounded-[6px_0_0_0] border-border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
          selectedTab === "View All"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white dark:bg-background-color dark:hover:bg-primary-theme-hover hover:bg-general-hover text-heading-color"
        }`}
      >
        View All
      </Button>

      <Button
        onClick={() => setSelectedTab("Standard")}
        className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_6px_0_0] border border-border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
          selectedTab === "Standard"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Standard
      </Button>

      <Button
        onClick={() => setSelectedTab("Secure")}
        className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_0_0_6px] border border-border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
          selectedTab === "Secure"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Secure
      </Button>

      <Button
        onClick={() => setSelectedTab("Wallet")}
        className={`h-[40px] sm:w-[135px] w-full md:rounded-[0_6px_6px_0] rounded-[0_0_6px_0] border border-border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
          selectedTab === "Wallet"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Wallet
      </Button>
    </div>
  );
};

export const FilterButtons03 = ({
  selectedTab,
  setSelectedTab,
  filteredInput,
  setFilteredInput,
}: FilterButtons03Props) => {
  return (
    <div className="w-full flex items-center lg:justify-between lg:flex-row flex-col max-lg:gap-8">
      {/* TABS */}
      <div className="md:flex max-sm:w-full max-md:grid max-md:grid-cols-2 font-inter font-medium">
        <Button
          onClick={() => setSelectedTab("View All")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[6px_0_0_6px] border-border rounded-[6px_0_0_0] border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
            selectedTab === "View All"
              ? "bg-selected-color text-theme-heading-color"
              : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
          }`}
        >
          View All
        </Button>

        <Button
          onClick={() => setSelectedTab("Standard")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] border-border rounded-[0_6px_0_0] border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
            selectedTab === "Standard"
              ? "bg-selected-color text-theme-heading-color"
              : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
          }`}
        >
          Standard
        </Button>

        <Button
          onClick={() => setSelectedTab("Secure")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] border-border rounded-[0_0_0_6px] border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
            selectedTab === "Secure"
              ? "bg-selected-color text-theme-heading-color"
              : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
          }`}
        >
          Secure
        </Button>

        <Button
          onClick={() => setSelectedTab("Wallet")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0_6px_6px_0] border-border rounded-[0_0_6px_0] border text-[14px] !shadow-button-shadow max-md:col-span-1 ${
            selectedTab === "Wallet"
              ? "bg-selected-color text-theme-heading-color"
              : "bg-white hover:bg-general-hover dark:bg-background-color dark:hover:bg-primary-theme-hover text-heading-color"
          }`}
        >
          Wallet
        </Button>
      </div>

      {/* SEARCH  */}
      <div className="lg:w-fit md:w-[90%] w-full flex items-center gap-4">
        <Input
          placeholder="Search Session ID"
          className="h-[40px] rounded-[6px] lg:w-[300px] w-full focus:outline-2 border-border dark:placeholder:text-paragraph-color focus-visible:ring-secondary-theme bg-transparent text-[14px] placeholder:text-[14px] focus-visible:!ring-offset-0"
          value={filteredInput}
          onChange={(e) => setFilteredInput(e.target.value)}
        />

        <Button
          onClick={() => {
            setFilteredInput(filteredInput);
          }}
          className="h-[40px] border hover:bg-general-hover text-heading-color !shadow-button-shadow border-border"
        >
          <ListFilter />
          <span className="text-[14px] font-inter tracking-wider">Filter</span>
        </Button>
      </div>
    </div>
  );
};

export const FilterButtons04 = ({
  selectedTab,
  setSelectedTab,
}: FilterButtons04Props) => {
  return (
    <div className="flex max-sm:w-full font-inter font-medium">
      <Button
        onClick={() => setSelectedTab("heatmap")}
        className={`h-[40px] sm:w-[135px] w-full border-border rounded-[6px_0_0_6px] border text-[14px] !shadow-button-shadow ${
          selectedTab === "heatmap"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white dark:bg-background-color hover:bg-general-hover dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Heatmap
      </Button>
      <Button
        onClick={() => setSelectedTab("barChart")}
        className={`h-[40px] sm:w-[135px] w-full border-border rounded-[0_6px_6px_0] border text-[14px] !shadow-button-shadow ${
          selectedTab === "barChart"
            ? "bg-selected-color text-theme-heading-color"
            : "bg-white dark:bg-background-color hover:bg-general-hover dark:hover:bg-primary-theme-hover text-heading-color"
        }`}
      >
        Bar Chart
      </Button>
    </div>
  );
};
