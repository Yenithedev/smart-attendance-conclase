import {Users, UserCheck, UserX, Clock} from "lucide-react"; 
export const statsData = [
    {
      title: "Total Staff",
      value: 240,
      subtitle: "+12 This month",
      icon: Users,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Present Today",
      value: 186,
      subtitle: "75% Attendance",
      icon: UserCheck,
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Absent Today",
      value: 42,
      subtitle: "72% of Total",
      icon: UserX,
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Late Arrivals",
      value: 20,
      subtitle: "8% of Total",
      icon: Clock,
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  // QR Activities data
  export const qrActivities = [
    { name: "Judah Atayero", time: "3min ago" },
    { name: "Abdullah Mubarak", time: "5min ago" },
    { name: "Taiwo Ogunjobi", time: "8min ago" },
    { name: "Unayzah Musa", time: "18min ago" },
    { name: "Hafsoh Abonyin", time: "28min ago" },
  ];

  // Recent check-ins data
  export const recentCheckIns = [
    { name: "Hafsoh Abonyin", department: "Design", time: "10:02am", status: "On Time" },
    { name: "Taiwo Ogunjobi", department: "Sales", time: "10:32am", status: "Late" },
  ];

  // Weekly attendance trends
  export const weeklyTrends = [
    { day: "Monday", percentage: 95 },
    { day: "Tuesday", percentage: 80 },
    { day: "Wednesday", percentage: 75 },
    { day: "Thursday", percentage: 100 },
    { day: "Friday", percentage: 98 },
  ];

  export const statsData2 = [
    { label: "Total Staff", value: "248" },
    { label: "Active today", value: "186" },
    { label: "On Leave", value: "12" },
    { label: "Inactive", value: "5" }
  ];

  export const staffData = [
    { name: "Judah Alayero", department: "Civil", id: "MAC133", status: "Active", lastCheckIn: "10:12 Today" },
    { name: "Hafsoh Aboyiri", department: "Sales", id: "PTMF44", status: "Active", lastCheckIn: "10:15 Today" },
    { name: "Taiwo Ogunjobi", department: "HR", id: "AAFTR23", status: "Active", lastCheckIn: "11:05 Today" },
    { name: "Abdullah Mubarak", department: "Design", id: "QTLL54", status: "On Leave", lastCheckIn: "Nov 30" },
    { name: "Umaysan Musa", department: "Accounting", id: "PTYM67", status: "Active", lastCheckIn: "Yesterday" },
    { name: "Idris Jamilu", department: "Engineering", id: "SJMN43", status: "Inactive", lastCheckIn: "Feb 22" }
  ];


  export const getStatusColor = (status) => {
  if (status === "Active") {
    return "bg-green-500";
  } else if (status === "On Leave") {
    return "bg-red-400";
  } else if (status === "Inactive") {
    return "bg-gray-400";
  } else {
    return "bg-gray-400";
  }
};

export const statsData3 = [
    { label: "Total Records", value: "248" },
    { label: "Present", value: "186" },
    { label: "Late", value: "186" },
    { label: "Absent", value: "42" },
    { label: "Avg. Hours", value: "8.5" }
  ];

  export const attendanceData = [
    { name: "Judah Alayero", department: "Civil", date: "Dec,9,2025", checkIn: "9:15am", checkOut: "6:20pm", hours: "8.9hours", status: "present" },
    { name: "Hafsoh Aboyiri", department: "Sales", date: "Dec,9,2025", checkIn: "9:22am", checkOut: "6:15pm", hours: "8.8hours", status: "present" },
    { name: "Taiwo Ogunjobi", department: "HR", date: "Dec,9,2025", checkIn: "9:45am", checkOut: "6:30pm", hours: "8.8hours", status: "Late" },
    { name: "Abdullah Mubarak", department: "Design", date: "Dec,9,2025", checkIn: "-", checkOut: "-", hours: "0 hours", status: "Absent" },
    { name: "Umaysan Musa", department: "Accounting", date: "Dec,9,2025", checkIn: "10:05am", checkOut: "8:10pm", hours: "8.hours", status: "Late" },
    { name: "Idris Jamilu", department: "Engineering", date: "Dec,9,2025", checkIn: "08:45am", checkOut: "5:50pm", hours: "9.hours", status: "present" }
  ];

  export const departmentBreakdown = [
    { department: "Engineering", present: 45, total: 52, percentage: 87 },
    { department: "Design", present: 18, total: 22, percentage: 82 },
    { department: "HR", present: 22, total: 28, percentage: 80 },
    { department: "Accounting", present: 32, total: 40, percentage: 80 },
    { department: "Sales", present: 12, total: 15, percentage: 80 },
    { department: "Civil", present: 28, total: 35, percentage: 79 }
  ];

   export const getStatusColor2 = (status) => {
  if (status.toLowerCase() === "present") {
    return "text-green-600";
  } else if (status.toLowerCase() === "late") {
    return "text-orange-600";
  } else if (status.toLowerCase() === "absent") {
    return "text-red-600";
  } else {
    return "text-gray-600";
  }
};