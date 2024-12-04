export interface RealTimeMapProps {
  selectedTab: string;
  MapData: {
    countryName: string;
    countryCode: string;
    session: number;
    latitude: number;
    longitude: number;
  }[];
}
