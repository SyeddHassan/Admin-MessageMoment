export interface RealTimeMapProps {
  selectedTab: string;
  selectedCountry?: string;
  setSelectedCountry?: (tab: string) => void;
  data: {
    countryName: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    countryCities: {
      cityName: string;
      cityLatitude: number;
      cityLongitude: number;
      citySessions: number;
      cityUsers: number;
    }[];
  }[];
}
