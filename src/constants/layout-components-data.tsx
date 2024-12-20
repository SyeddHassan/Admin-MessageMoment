import {
  FileBox,
  FolderGit,
  HeartPulse,
  LayoutPanelLeft,
  Megaphone,
  TrafficCone,
  Users,
} from "lucide-react";

export const SidebarNavigationData = [
  {
    page: 1,
    link: "/dashboard",
    icon: <LayoutPanelLeft />,
    title: "Dashboard",
  },

  {
    page: 2,
    link: "/users-sessions",
    icon: <Users />,
    title: "Users & Sessions",
  },

  {
    page: 3,
    link: "/file-transfer",
    icon: <FileBox />,
    title: "File Data Transfer",
  },

  {
    page: 4,
    link: "/audience-traffic",
    icon: <TrafficCone />,
    title: "Audience Traffic",
  },

  {
    page: 5,
    link: "/project-mode",
    icon: <FolderGit />,
    title: "Project Mode",
  },

  {
    page: 6,
    link: "/system-health-performance",
    icon: <HeartPulse />,
    title: "System Health & Performance",
  },

  {
    page: 7,
    link: "/advertisement-management",
    icon: <Megaphone />,
    title: "Advertisement Management System",
  },
];

export const SectionSearchbarData = [
  // DASHBOARD PAGE
  {
    sectionId: "RealTimeMonitoringMapSection",
    displaySectionName: "Real Time Global Activity Section",
    link: "/dashboard",
  },
  {
    sectionId: "RealTimeMonitoringTableSection",
    displaySectionName: "Real Time Session Monitoring Section",
    link: "/dashboard",
  },
  {
    sectionId: "UserAverageChatRoomSection",
    displaySectionName: "User Average Chat Room Section",
    link: "/dashboard",
  },
  {
    sectionId: "ReturnedVisitorsSection",
    displaySectionName: "Returned Visitors Section",
    link: "/dashboard",
  },

  // USERS & SESSIONS PAGE
  {
    sectionId: "AcctiveUsersSessionsSection",
    displaySectionName: "Active Users and Sessions Section",
    link: "/users-sessions",
  },
  {
    sectionId: "SessionTypeSection",
    displaySectionName: "Session Type Section",
    link: "/users-sessions",
  },
  {
    sectionId: "ActiveRegionSessionsSection",
    displaySectionName: "Most Active Regions (Sessions) Section",
    link: "/users-sessions",
  },
  {
    sectionId: "AverageSessionDurationSection",
    displaySectionName: "Average Session Duration Section",
    link: "/users-sessions",
  },
  {
    sectionId: "PeakUasgeTimesSection",
    displaySectionName: "Peak Usage Times Section",
    link: "/users-sessions",
  },
  {
    sectionId: "PeakTimesSection",
    displaySectionName: "Peak Times Section",
    link: "/users-sessions",
  },
  {
    sectionId: "ActiveUsersSessionTimeSection",
    displaySectionName: "Session Time by Active Users Section",
    link: "/users-sessions",
  },
  {
    sectionId: "UsersSharingLinkSection",
    displaySectionName: "Users Sharing Link Section",
    link: "/users-sessions",
  },
  {
    sectionId: "DeviceUsersSection",
    displaySectionName: "Users by Device Section",
    link: "/users-sessions",
  },
  {
    sectionId: "BroswerUsersSection",
    displaySectionName: "Users by Browser Section",
    link: "/users-sessions",
  },
  {
    sectionId: "OperatingSystemSection",
    displaySectionName: "Users by Operation System Section",
    link: "/users-sessions",
  },
  {
    sectionId: "UsersAvgMessagesLineChart",
    displaySectionName: "Avg. Messages by User Section",
    link: "/users-sessions",
  },
  {
    sectionId: "UsersAvgInactivityLineChart",
    displaySectionName: "Avg. Inactivity by User Section",
    link: "/users-sessions",
  },
];
