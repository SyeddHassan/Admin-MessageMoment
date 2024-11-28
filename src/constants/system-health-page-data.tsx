// System status

export const generateTimelineData = () => {
  return Array.from({ length: 90 }, (_, i) => ({
    date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000),
    status:
      Math.random() > 0.95
        ? Math.random() > 0.5
          ? "partial"
          : "major"
        : "operational",
  }));
};

// data/serverActivityData.ts

export const serverActivityData = {
  labels: [
    "12:00 AM",
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ],
  datasets: [
    {
      label: "Response Time (ms)",
      data: [
        750, 800, 720, 650, 900, 880, 790, 720, 670, 710, 850, 920, 870, 890,
        780, 760, 720, 830, 870, 910, 950, 890, 860, 780, 740,
      ],
      borderColor: "rgb(249, 115, 22)", // Orange
      backgroundColor: "rgba(249, 115, 22, 0.5)",
      tension: 0.4,
      pointRadius: 1,
    },
    {
      label: "Content Length (kb)",
      data: [
        220, 230, 240, 250, 200, 210, 220, 230, 240, 250, 210, 220, 215, 225,
        235, 240, 245, 250, 255, 250, 230, 220, 215, 210, 205,
      ],
      borderColor: "rgb(34, 197, 94)", // Green
      backgroundColor: "rgba(34, 197, 94, 0.5)",
      tension: 0.1,
      pointRadius: 0,
    },
  ],
};

// annomalies data
export const anomalyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  values: [140, 50, 35, 25, 30, 25, 20, 18, 15, 12, 15, 13],
};

// databse Transaction
export const DatabaseOptionsData = {
  labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
  datasets: [
    {
      label: "ASPState",
      data: [70, 80, 60, 90, 75],
      borderColor: "#2c3e50",
      backgroundColor: "rgba(44, 62, 80, 0.2)",
      fill: true,
      tension: 0,
    },
    {
      label: "DBADMIN",
      data: [150, 160, 170, 155, 165],
      borderColor: "#34495e",
      backgroundColor: "rgba(52, 73, 94, 0.2)",
      fill: true,
      tension: 0,
    },
    {
      label: "master",
      data: [200, 210, 220, 215, 205],
      borderColor: "#3498db",
      backgroundColor: "rgba(52, 152, 219, 0.2)",
      fill: true,
      tension: 0,
    },
    {
      label: "msdb",
      data: [250, 260, 255, 245, 250],
      borderColor: "#2980b9",
      backgroundColor: "rgba(41, 128, 185, 0.3)",
      fill: true,
      tension: 0,
    },
    {
      label: "tempdb",
      data: [90, 85, 80, 95, 85],
      borderColor: "#7f8c8d",
      backgroundColor: "rgba(127, 140, 141, 0.2)",
      fill: true,
      tension: 0,
    },
    
  ],
};

// CPU usage chart

export const generateCPUData = (): number => {
  const baseValue = 5 + Math.random() * 5;
  const spike = Math.random() < 0.2 ? Math.random() * 30 : 0;
  return Math.min(40, baseValue + spike);
};


// Memory graph data

// Data-related logic
export const timeRanges = {
  "15m": 3,
  "30m": 6,
  "1h": 11,
};

// Function to get data for specific time ranges
export const getDataForTimeRange = (range: keyof typeof timeRanges) => {
  const dataPoints = timeRanges[range];
  return {
    labels: [
      "18:45",
      "18:50",
      "18:55",
      "19:00",
      "19:05",
      "19:10",
      "19:15",
      "19:20",
      "19:25",
      "19:30",
      "19:35",
    ].slice(-dataPoints),
    datasets: [
      {
        label: "Memory Active (Average)",
        data: [110, 100, 320, 200, 230, 150, 240, 230, 160, 170, 280].slice(
          -dataPoints
        ),
        borderColor: "#f6ad55",
        backgroundColor: "#f6ad55",
        tension: 0.4,
      },
      {
        label: "Memory Balloon (Average)",
        data: Array(dataPoints).fill(50),
        borderColor: "#4a5568",
        backgroundColor: "#4a5568",
        tension: 0.4,
      },
      {
        label: "Memory Swap Used (Average)",
        data: Array(dataPoints).fill(10),
        borderColor: "#48bb78",
        backgroundColor: "#48bb78",
        tension: 0.4,
      },
      {
        label: "Memory Granted (Average)",
        data: Array(dataPoints).fill(400),
        borderColor: "#4299e1",
        backgroundColor: "#4299e1",
        tension: 0.4,
      },
      {
        label: "Memory Shared Common (Average)",
        data: Array(dataPoints).fill(20),
        borderColor: "#f56565",
        backgroundColor: "#f56565",
        tension: 0.4,
      },
    ],
  };
};
