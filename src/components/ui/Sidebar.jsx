import { Link,useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LayoutDashboard, UsersRound, QrCode,Settings, ChartColumn, ClipboardCheck, LogOut  } from "lucide-react";

const Sidebar = ({collapsed,setCollapsed}) => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  },[])
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-[90vh] fixed bg-white border-r flex flex-col justify-between transition-all duration-300`}
    >
      {/* Top */}
      <div>
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between px-4 h-16 border-b">
          {!collapsed && (
            <h1 className="text-[#2E31D6] font-bold text-lg">
              Attendance
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 hover:text-blue-600"
          >
            ☰
          </button>
        </div>

        {/* Menu */}
        <div className="px-4 pt-3 space-y-2">

          <Link
            to="/admin"
            className={`${pathname=="/admin" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <LayoutDashboard />
            {!collapsed && <span>Dashboard Overview</span>}
          </Link>

          <Link
            to="staff"
            className={`${pathname=="/admin/staff" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <UsersRound />
            {!collapsed && <span>Staff Management</span>}
          </Link>

          <Link
            to="attendance"
            className={`${pathname=="/admin/attendance" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <ClipboardCheck />
            {!collapsed && <span>Attendance Records</span>}
          </Link>

          <Link
            to="qrcode"
            className={`${pathname=="/admin/qrcode" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <QrCode />
            {!collapsed && <span>QR Code Management</span>}
          </Link>

          <Link
            to="reports"
            className={`${pathname=="/admin/reports" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <ChartColumn />
            {!collapsed && <span>Reports & Analytics</span>}
          </Link>

          <Link
            to="systemsettings"
            className={`${pathname=="/admin/systemsettings" ? "flex items-center gap-3 p-3 rounded-lg bg-[#2E31D6] text-white" : "flex items-center gap-3 p-3 rounded-lg text-black"}`}
          >
            <Settings />
            {!collapsed && <span>System Settings</span>}
          </Link>

        </div>
      </div>

      {/* Logout */}
    
      <AlertDialog>
    <AlertDialogTrigger className="pb-20 p-6">
    <button className="flex items-center gap-3 text-red-500 hover:underline">
          <LogOut/>
          {!collapsed && <span>Log Out</span>}
    </button>
    </AlertDialogTrigger>
  <AlertDialogContent className="bg-[#EAE9E9] p-5 lg:p-15 rounded-xl text-sm shadow-2xl w-[80%] md:w-[40%] max-w-x">
    <AlertDialogHeader>
      <AlertDialogTitle className="mb-7 text-center text-sm">Dear User are you sure you want to log out?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter className="flex justify-between gap-10 items-center">
      <AlertDialogCancel className="bg-[#EAE9E9] cursor-pointer  border-black rounded py-5 px-10 hover:bg-[#2E31D6] hover:text-white">No</AlertDialogCancel>
      <AlertDialogAction className="bg-[#2E31D6] cursor-pointer border rounded py-5 px-10 hover:bg-red-500 text-white" onClick={()=>{
        navigate("/login")
      }}>Yes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  );
};

export default Sidebar;

