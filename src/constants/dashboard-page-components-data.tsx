import { Activity, ChartNetwork, Clock, Hourglass, MapPin } from "lucide-react";

export const MessageMomentStatsCardsData = [
  {
    stats: 1,
    bgColor: "#4CAF50",
    icon: <Activity />,
    title: "Active Users",
    detail: "12000",
  },

  {
    stats: 2,
    bgColor: "#42A5F5",
    icon: <ChartNetwork />,
    title: "Active Sessions",
    detail: "459",
  },

  {
    stats: 3,
    bgColor: "#FF6B6B",
    icon: <MapPin />,
    title: "Locations",
    detail: "34",
  },

  {
    stats: 4,
    bgColor: "#FFB74D",
    icon: <Hourglass />,
    title: "Avg. Duration",
    detail: "34m 44s",
  },

  {
    stats: 5,
    bgColor: "#AB47BC",
    icon: <Clock />,
    title: "Avg. Expiry Time",
    detail: "145",
  },
];

export const RealTimeMapData = [
  {
    countryName: "Pakistan",
    countryCode: "PK",
    latitude: 30.3753,
    longitude: 69.3451,
    countryId: "pk",
    countryCities: [
      {
        cityName: "Islamabad",
        cityLatitude: 33.6844,
        cityLongitude: 73.0479,
        citySessions: 4021,
        cityUsers: 12954,
        countryId: "pk",
      },
      {
        cityName: "Karachi",
        cityLatitude: 24.8607,
        cityLongitude: 67.0011,
        citySessions: 80485,
        cityUsers: 85115,
        countryId: "pk",
      },
      {
        cityName: "Lahore",
        cityLatitude: 31.5497,
        cityLongitude: 74.3436,
        citySessions: 26571,
        cityUsers: 49571,
        countryId: "pk",
      },
    ],
  },

  {
    countryName: "India",
    countryCode: "IN",
    latitude: 20.5937,
    longitude: 78.9629,
    countryId: "in",
    countryCities: [
      {
        cityName: "Mumbai",
        cityLatitude: 19.076,
        cityLongitude: 72.8777,
        citySessions: 93214,
        cityUsers: 421258,
        countryId: "in",
      },
      {
        cityName: "Bangalore",
        cityLatitude: 12.9716,
        cityLongitude: 77.5946,
        citySessions: 74291,
        cityUsers: 297412,
        countryId: "in",
      },
      {
        cityName: "Delhi",
        cityLatitude: 28.7041,
        cityLongitude: 77.1025,
        citySessions: 83659,
        cityUsers: 392148,
        countryId: "in",
      },
    ],
  },

  {
    countryName: "Canada",
    countryCode: "CA",
    latitude: 56.1304,
    longitude: -106.3468,
    countryId: "ca",
    countryCities: [
      {
        cityName: "Toronto",
        cityLatitude: 43.65107,
        cityLongitude: -79.347015,
        citySessions: 47030,
        cityUsers: 310756,
        countryId: "ca",
      },
      {
        cityName: "Vancouver",
        cityLatitude: 49.2827,
        cityLongitude: -123.1207,
        citySessions: 35921,
        cityUsers: 156872,
        countryId: "ca",
      },
    ],
  },

  {
    countryName: "United States",
    countryCode: "US",
    latitude: 37.0902,
    longitude: -95.7129,
    countryId: "us",
    countryCities: [
      {
        cityName: "New York",
        cityLatitude: 40.7128,
        cityLongitude: -74.006,
        citySessions: 120754,
        cityUsers: 850251,
        countryId: "us",
      },
      {
        cityName: "San Francisco",
        cityLatitude: 37.7749,
        cityLongitude: -122.4194,
        citySessions: 55241,
        cityUsers: 219654,
        countryId: "us",
      },
      {
        cityName: "Chicago",
        cityLatitude: 41.8781,
        cityLongitude: -87.6298,
        citySessions: 67420,
        cityUsers: 345512,
        countryId: "us",
      },
    ],
  },

  {
    countryName: "United Kingdom",
    countryCode: "GB",
    latitude: 55.3781,
    longitude: -3.436,
    countryId: "gb",
    countryCities: [
      {
        cityName: "London",
        cityLatitude: 51.5074,
        cityLongitude: -0.1278,
        citySessions: 67321,
        cityUsers: 248157,
        countryId: "gb",
      },
      {
        cityName: "Manchester",
        cityLatitude: 53.4808,
        cityLongitude: -2.2426,
        citySessions: 28175,
        cityUsers: 125870,
        countryId: "gb",
      },
    ],
  },
];

export const RealTimeSessionMonitoringTableData = [
  {
    sessionId: 12839712893712,
    participants: 8,
    sessionType: "Standard",
    location: "Brazil",
    locationCode: "BR",
    duration: 4324,
  },
  {
    sessionId: 18475692345981,
    participants: 3,
    sessionType: "Secure",
    location: "Germany",
    locationCode: "DE",
    duration: 2733,
  },
  {
    sessionId: 12938475672938,
    participants: 5,
    sessionType: "Wallet",
    location: "Japan",
    locationCode: "JP",
    duration: 7931,
  },
  {
    sessionId: 12783456923875,
    participants: 9,
    sessionType: "Standard",
    location: "India",
    locationCode: "IN",
    duration: 3927,
  },
  {
    sessionId: 13849576283947,
    participants: 7,
    sessionType: "Secure",
    location: "USA",
    locationCode: "US",
    duration: 5412,
  },
  {
    sessionId: 19847562938475,
    participants: 4,
    sessionType: "Wallet",
    location: "France",
    locationCode: "FR",
    duration: 7130,
  },
  {
    sessionId: 12837456928374,
    participants: 6,
    sessionType: "Standard",
    location: "Australia",
    locationCode: "AU",
    duration: 7500,
  },
  {
    sessionId: 12938475623485,
    participants: 10,
    sessionType: "Secure",
    location: "Brazil",
    locationCode: "BR",
    duration: 6630,
  },
  {
    sessionId: 19837465982347,
    participants: 2,
    sessionType: "Wallet",
    location: "Germany",
    locationCode: "DE",
    duration: 2295,
  },
  {
    sessionId: 12839475692834,
    participants: 1,
    sessionType: "Standard",
    location: "Japan",
    locationCode: "JP",
    duration: 3545,
  },
  {
    sessionId: 13984756239485,
    participants: 8,
    sessionType: "Secure",
    location: "India",
    locationCode: "IN",
    duration: 5112,
  },
  {
    sessionId: 12398475628347,
    participants: 7,
    sessionType: "Wallet",
    location: "USA",
    locationCode: "US",
    duration: 4243,
  },
  {
    sessionId: 12783945692834,
    participants: 9,
    sessionType: "Standard",
    location: "France",
    locationCode: "FR",
    duration: 5755,
  },
  {
    sessionId: 13849576238947,
    participants: 6,
    sessionType: "Secure",
    location: "Australia",
    locationCode: "AU",
    duration: 7945,
  },
  {
    sessionId: 19873456928374,
    participants: 5,
    sessionType: "Wallet",
    location: "Brazil",
    locationCode: "BR",
    duration: 6333,
  },
  {
    sessionId: 12938475623489,
    participants: 3,
    sessionType: "Standard",
    location: "Germany",
    locationCode: "DE",
    duration: 3020,
  },
  {
    sessionId: 19837465982348,
    participants: 10,
    sessionType: "Secure",
    location: "Japan",
    locationCode: "JP",
    duration: 7260,
  },
  {
    sessionId: 12839475692835,
    participants: 2,
    sessionType: "Wallet",
    location: "India",
    locationCode: "IN",
    duration: 2575,
  },
  {
    sessionId: 13984756239486,
    participants: 4,
    sessionType: "Standard",
    location: "USA",
    locationCode: "US",
    duration: 4537,
  },
  {
    sessionId: 12398475628348,
    participants: 1,
    sessionType: "Secure",
    location: "France",
    locationCode: "FR",
    duration: 3328,
  },
];

export const RealTimeSessionMonitoringTableViewParticipantsData = [
  {
    id: 1,
    userId: "12383",
    ipAddress: "189.218.212.102",
    telcomProvider: "Telecom Argentina",
    location: {
      country: "Argentina",
      coordinates: "43.432977, -74.005974",
    },
    macAddress: "0025:96FF:FE12:3456",
    device: "iPhone",
    browser: "Safari",
    sessionDuration: "12m 04s",
    sessionCount: 23,
  },
  {
    id: 2,
    userId: "83924",
    ipAddress: "203.123.45.67",
    telcomProvider: "AT&T",
    location: {
      country: "United States",
      coordinates: "40.712776, -74.005974",
    },
    macAddress: "00A0:C91E:AA12:BC34",
    device: "Android",
    browser: "Chrome",
    sessionDuration: "34m 15s",
    sessionCount: 15,
  },
  {
    id: 3,
    userId: "74829",
    ipAddress: "58.137.192.98",
    telcomProvider: "Vodafone",
    location: {
      country: "United Kingdom",
      coordinates: "51.507351, -0.127758",
    },
    macAddress: "0040:95FE:FF10:23A1",
    device: "Windows PC",
    browser: "Edge",
    sessionDuration: "45m 22s",
    sessionCount: 32,
  },
  {
    id: 4,
    userId: "58291",
    ipAddress: "120.89.76.54",
    telcomProvider: "Telstra",
    location: {
      country: "Australia",
      coordinates: "-33.868820, 151.209296",
    },
    macAddress: "0035:96AD:CD34:5678",
    device: "MacBook",
    browser: "Safari",
    sessionDuration: "18m 45s",
    sessionCount: 12,
  },
  {
    id: 5,
    userId: "93741",
    ipAddress: "45.67.89.10",
    telcomProvider: "Bharti Airtel",
    location: {
      country: "India",
      coordinates: "28.613939, 77.209023",
    },
    macAddress: "0055:96CC:FF21:8890",
    device: "Android",
    browser: "Firefox",
    sessionDuration: "21m 09s",
    sessionCount: 18,
  },
  {
    id: 6,
    userId: "19845",
    ipAddress: "88.123.45.67",
    telcomProvider: "Orange",
    location: {
      country: "France",
      coordinates: "48.856613, 2.352222",
    },
    macAddress: "0080:97AA:DD45:679A",
    device: "Linux PC",
    browser: "Opera",
    sessionDuration: "16m 58s",
    sessionCount: 10,
  },
  {
    id: 7,
    userId: "27890",
    ipAddress: "98.76.54.32",
    telcomProvider: "Rogers Communications",
    location: {
      country: "Canada",
      coordinates: "43.653225, -79.383186",
    },
    macAddress: "00C0:96AB:FF23:3345",
    device: "iPad",
    browser: "Safari",
    sessionDuration: "29m 03s",
    sessionCount: 20,
  },
  {
    id: 8,
    userId: "48291",
    ipAddress: "210.65.45.78",
    telcomProvider: "NTT Docomo",
    location: {
      country: "Japan",
      coordinates: "35.689487, 139.691711",
    },
    macAddress: "00E0:96CF:FF24:9988",
    device: "MacBook",
    browser: "Chrome",
    sessionDuration: "24m 45s",
    sessionCount: 22,
  },
];
