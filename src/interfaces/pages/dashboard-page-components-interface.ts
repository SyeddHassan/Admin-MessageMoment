export interface Country {
  name: string;
  countryCode: string;
  longitude: string;
  latitude: string;
  states: {
    name: string;
    users: number;
  }[];
}

export interface RealTimeMapUsersStatsProps {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
}
