import React from "react";

import { TableFiltersProps } from "@/interfaces/partials-components-interfaces";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { ListFilter } from "lucide-react";

const TableFilters = ({
  selectedTab,
  setSelectedTab,
  filteredInput,
  setFilteredInput,
}: TableFiltersProps) => {
  return (
    <div className="w-full flex items-center lg:justify-between lg:flex-row flex-col max-lg:gap-8">
      {/* TABS */}
      <div className="md:flex max-sm:w-full max-md:grid max-md:grid-cols-2 font-inter font-medium">
        <Button
          onClick={() => setSelectedTab("View All")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[6px_0_0_6px] rounded-[6px_0_0_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
            selectedTab === "View All"
              ? "bg-selected-color text-white"
              : "bg-white hover:bg-hovered-color text-heading-color"
          }`}
        >
          View All
        </Button>

        <Button
          onClick={() => setSelectedTab("Standard")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_6px_0_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
            selectedTab === "Standard"
              ? "bg-selected-color text-white"
              : "bg-white hover:bg-hovered-color text-heading-color"
          }`}
        >
          Standard
        </Button>

        <Button
          onClick={() => setSelectedTab("Secure")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0] rounded-[0_0_0_6px] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
            selectedTab === "Secure"
              ? "bg-selected-color text-white"
              : "bg-white hover:bg-hovered-color text-heading-color"
          }`}
        >
          Secure
        </Button>

        <Button
          onClick={() => setSelectedTab("Wallet")}
          className={`h-[40px] sm:w-[135px] w-full md:rounded-[0_6px_6px_0] rounded-[0_0_6px_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow max-md:col-span-1 ${
            selectedTab === "Wallet"
              ? "bg-selected-color text-white"
              : "bg-white hover:bg-hovered-color text-heading-color"
          }`}
        >
          Wallet
        </Button>
      </div>

      {/* SEARCH  */}
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search Session ID"
          className="h-[40px] rounded-[6px] lg:w-[300px] w-full focus:outline-2 focus-visible:ring-secondary-theme"
          value={filteredInput}
          onChange={(e) => setFilteredInput(e.target.value)}
        />

        <Button
          onClick={() => {
            setFilteredInput(filteredInput);
          }}
          className="h-[40px] border hover:bg-blue-50 card-filter-button-box-shadow"
        >
          <ListFilter />
          <span className="lg:text-[16px] md:text-[14px] text-[12px]">
            Filter
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TableFilters;
