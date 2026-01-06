import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { LayoutDashboard, UsersRound, QrCode, Settings, ChartColumn, ClipboardCheck, LogOut } from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [])
  
  return (
    <div
      className={`${
        collapsed ? "w-16 sm:w-20" : "w-56 sm:w-64"
      } h-screen fixed bg-white border-r flex flex-col transition-all duration-300`}
    >
      {/* Top */}
      <div className="flex-1 overflow-y-auto">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between px-2 sm:px-4 h-14 sm:h-16 border-b">
          {!collapsed && (
            <h1 className="text-[#2E31D6] font-bold text-base sm:text-lg">
              Attendance
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 hover:text-blue-600 text-xl"
          >
            ☰
          </button>
        </div>

        {/* Menu */}
        <div className="px-2 sm:px-4 pt-3 space-y-2">

          <Link
            to="/admin"
            className={`${
              pathname == "/admin" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">Dashboard Overview</span>}
          </Link>

          <Link
            to="staff"
            className={`${
              pathname == "/admin/staff" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <UsersRound className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">Staff Management</span>}
          </Link>

          <Link
            to="attendance"
            className={`${
              pathname == "/admin/attendance" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">Attendance Records</span>}
          </Link>

          <Link
            to="qrcode"
            className={`${
              pathname == "/admin/qrcode" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <QrCode className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">QR Code Management</span>}
          </Link>

          <Link
            to="reports"
            className={`${
              pathname == "/admin/reports" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <ChartColumn className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">Reports & Analytics</span>}
          </Link>

          <Link
            to="systemsettings"
            className={`${
              pathname == "/admin/systemsettings" 
                ? "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#2E31D6] text-white" 
                : "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100"
            }`}
          >
            <Settings className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            {!collapsed && <span className="text-sm sm:text-base">System Settings</span>}
          </Link>

        </div>
      </div>

      {/* Logout */}
      <div className="border-t bg-white p-2 sm:p-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex items-center gap-2 sm:gap-3 text-red-500 hover:bg-red-50 w-full p-2 sm:p-3 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              {!collapsed && <span className="text-sm sm:text-base">Log Out</span>}
            </button>
          </AlertDialogTrigger>
          
          <AlertDialogContent className="bg-[#EAE9E9] p-5 sm:p-8 md:p-10 rounded-xl shadow-2xl w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-md mx-4">
            <AlertDialogHeader>
              <AlertDialogTitle className="mb-5 sm:mb-7 text-center text-sm sm:text-base">
                Dear User, are you sure you want to log out?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-row justify-center gap-4 sm:gap-6 md:gap-10 items-center">
              <AlertDialogCancel className="bg-[#EAE9E9] cursor-pointer border-black rounded py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 hover:bg-[#2E31D6] hover:text-white text-sm sm:text-base">
                No
              </AlertDialogCancel>
              <AlertDialogAction 
                className="bg-[#2E31D6] cursor-pointer border rounded py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 hover:bg-red-500 text-white text-sm sm:text-base" 
                onClick={() => {
                  navigate("/login")
                }}
              >
                Yes
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Sidebar;