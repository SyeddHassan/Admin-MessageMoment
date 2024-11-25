import React from "react";

import { Button } from "../ui/button";

const NewCampaignButton = () => {
  return (
    <Button className="sm:w-[183px] w-full h-[45px] rounded-[6px] button-box-shadow bg-secondary-theme hover:bg-[#006bf7d5] text-white font-inter flex-center text-[15px] leading-[17.9px]">
      + New Campaign
    </Button>
  );
};

export default NewCampaignButton;
