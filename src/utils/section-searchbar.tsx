"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { SectionSearchbarType } from "@/interfaces/utils-interface";

import { SectionSearchbarData } from "@/constants/layout-components-data";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { AlertCircle } from "lucide-react";
import { IoSearchCircleSharp } from "react-icons/io5";

const SectionSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<SectionSearchbarType[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const normalize = (str: string): string =>
    str.toLowerCase().replace(/\s+/g, "");

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const normalizedValue = normalize(value);
    const filteredSuggestions = SectionSearchbarData.filter((section) =>
      normalize(section.sectionId).includes(normalizedValue)
    );

    setSuggestions(filteredSuggestions);
    setDropdownVisible(true);
  };

  const handleSelect = async (section: SectionSearchbarType) => {
    const isOnCurrentPage = pathname === section.link;

    if (isOnCurrentPage) {
      const element = document.getElementById(section.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      await router.push(section.link);
      setTimeout(() => {
        const element = document.getElementById(section.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }

    setSearchTerm("");
    setSuggestions([]);
    setDropdownVisible(false);
  };

  return (
    <>
      {/* LARGE SCREENS */}
      <div
        ref={dropdownRef}
        className="relative w-[300px] h-[40px] rounded-[6px] border dark:border-border lg:flex hidden items-center justify-between px-2"
      >
        <Input
          className="w-[calc(100%-35px)] h-[30px] bg-transparent !p-0 border-none rounded-none ring-0 text-[14px] font-inter tracking-wider placeholder:text-paragraph-color dark:placeholder:text-paragraph-color text-heading-colo focus-visible:!ring-0 focus-visible:!ring-offset-0"
          placeholder="Search Section here..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="w-[30px] h-[30px] border dark:border-border rounded-sm flex items-center justify-center text-paragraph-color">
          /
        </div>

        {dropdownVisible && (
          <>
            {suggestions.length > 0 ? (
              <ul className="absolute top-[42px] left-0 w-full bg-white dark:bg-background-color border dark:border-border rounded-md shadow-lg z-10 p-4 flex flex-col gap-4">
                <ScrollArea className="w-full h-[400px]">
                  {suggestions.map((section) => (
                    <li
                      key={section.sectionId}
                      onClick={() => handleSelect(section)}
                      className="p-2 font-inter text-[14px] text-heading-color font-semibold tracking-wide cursor-pointer hover:text-secondary-theme border-b dark:border-border"
                    >
                      {section.displaySectionName}
                    </li>
                  ))}
                </ScrollArea>
              </ul>
            ) : searchTerm.trim() ? (
              <div className="absolute top-[42px] left-0 w-full bg-white border-bord dark:bg-background-color rounded-md shadow-lg z-10 p-4 text-sm text-heading-color font-inter tracking-wide flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                No searched section found
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* MIDDLE & SMALL SCREENS */}
      <IoSearchCircleSharp className="hidden text-[40px] text-gray-200 dark:text-gray-600" />
    </>
  );
};

export default SectionSearchbar;
