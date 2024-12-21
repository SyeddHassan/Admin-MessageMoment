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
