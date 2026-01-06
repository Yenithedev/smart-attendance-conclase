import { Link } from "react-router-dom"
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#2E31D6] flex items-center justify-between px-6">

      {/* Left (empty like image) */}
      <div></div>

      {/* Right */}
      <div className="flex items-center gap-6 text-white">

        {/* Notification */}
        <div className="relative cursor-pointer">
          <span className="text-xl"><Bell /></span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Thin Divider */}
        <div className="h-6 w-px bg-white/40"></div>

        {/* Admin Text */}
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold">Admin</p>
          <p className="text-xs opacity-80">Administration</p>
        </div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
          className="w-9 h-9 rounded-full border-2 border-white"
        />
      </div>

    </div>
  );
};

export default Navbar;
