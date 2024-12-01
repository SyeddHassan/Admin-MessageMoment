import React from "react";

import { RealTimeMapProps } from "@/interfaces/dashboard-page-interfaces";

const RealTimeMap = ({ selectedTab }: RealTimeMapProps) => {
  return <div>{selectedTab}</div>;
};

export default RealTimeMap;
