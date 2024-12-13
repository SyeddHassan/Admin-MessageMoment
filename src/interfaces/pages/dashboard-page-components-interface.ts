export interface RealTimeMapProps {
  selectedTab: string;
  data: {
    countryName: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    session: number;
    users: number;
    states: {
      name: string;
      latitude: number;
      longitude: number;
      session: number;
      users: number;
    }[];
  }[];
}
