export interface RealTimeSessionMonitoringTableProps {
  selectedTab: string;
  filteredInput: string;
}

export interface RealTimeFileTransferTableProps {
  selectedTab: string;
  filteredInput: string;
}

export interface DeviceTrafficTableProps {
  data: {
    deviceType: string;
    pageViews: number;
    siteSessions: number;
    uniqueVisitors: number;
    isTotal?: boolean;
  }[];
}

export interface AdvertismentCampaignTableProps {
  selectedTab: string;
  filteredInput: string;
}
