export interface RealTimeMapProps {
  selectedTab: string;
  selectedCountry?: { latitude: number; longitude: number } | null;
  setSelectedCountry?: (coords: {
    latitude: number;
    longitude: number;
  }) => void;
  data: {
    countryName: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    countryId: string;
    countryCities: {
      cityName: string;
      cityLatitude: number;
      cityLongitude: number;
      citySessions: number;
      cityUsers: number;
      countryId: string;
    }[];
  }[];
}
