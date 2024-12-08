import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const TranscriptDownloadCard = () => {
  return (
    <Card
      id="TranscriptDownloadSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Transcript Download
        </CardTitle>
      </CardHeader>

      {/* TRANSCRIPT DOWNLOAD DOUGHNUT CHART */}
      <CardContent className="md:h-[650px] h-full max-md:pb-[5rem] flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={["#f04c3d", "#f2f2f2"]}
          label="Downloads"
          labelColor="text-[#f04c3d]"
          percentage={39}
        />
      </CardContent>
    </Card>
  );
};

export default TranscriptDownloadCard;
