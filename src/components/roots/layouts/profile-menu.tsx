import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-[50px] h-[50px] cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 bg-white font-inter animation-standard p-2 py-4"
      >
        <DropdownMenuItem
          onClick={() => console.log("View Profile")}
          className="bg-white hover:bg-hovered-color py-2 cursor-pointer"
        >
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => console.log("Settings")}
          className="bg-white hover:bg-hovered-color py-2 cursor-pointer"
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => console.log("Logout")}
          className="bg-white hover:bg-hovered-color py-2 cursor-pointer"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
