import React from "react";
import { Users, TrendingUp, QrCode } from "lucide-react";
import { statsData, qrActivities, recentCheckIns,weeklyTrends } from "./Details";

const Dashboard = () => {


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Dashboard Overview
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
              Welcome Back! Here is your attendance summary for today
            </p>
          </div>
          <div className="text-left sm:text-right bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm w-full sm:w-auto">
            <p className="text-xs text-gray-600">Current Time</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-800">
              DEC AM,10,2025
            </p>
          </div>
        </div>

        {/* Stats Grid - Responsive: 1 col (mobile) -> 2 cols (tablet+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-3 truncate">
                      {stat.title}
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-500 text-xs truncate">{stat.subtitle}</p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${stat.color} flex-shrink-0`}>
                    <Icon size={20} className={`sm:w-7 sm:h-7 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-Time QR Activities */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-start justify-between mb-4 sm:mb-5 gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Real-Time QR Activities
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                Latest QR Code scans and Generations
              </p>
            </div>
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-green-500 rounded-full animate-pulse mt-1 flex-shrink-0"></div>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {qrActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 sm:py-4 first:pt-0 last:pb-0 gap-2"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <QrCode className="text-gray-700" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">QR scanned</p>
                    <p className="text-gray-600 text-xs sm:text-sm truncate">{activity.name}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Check-ins */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 mb-4 sm:mb-5 md:mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
            Recent check-ins
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">Latest Staff attendance activities</p>
          
          <div className="space-y-3 sm:space-y-4">
            {recentCheckIns.map((checkIn, index) => (
              <div
                key={index}
                className="flex flex-col gap-2.5 sm:gap-3 py-3 border-t border-gray-100 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-gray-700" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {checkIn.name}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">{checkIn.department}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 pl-0 sm:pl-0">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium">{checkIn.time}</span>
                  <span
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold flex-shrink-0 ${
                      checkIn.status === "On Time"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {checkIn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Attendance Trends */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4 sm:mb-5 gap-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                This Week's Attendance Trends
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Daily Attendance Percentage</p>
            </div>
            <TrendingUp className="text-green-600 flex-shrink-0" size={20} />
          </div>

          <div className="space-y-4 sm:space-y-5">
            {weeklyTrends.map((trend, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-gray-900 font-semibold text-xs sm:text-sm">
                    {trend.day}
                  </span>
                  <span className="text-gray-900 font-bold text-xs sm:text-sm">
                    %{trend.percentage}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 sm:h-3 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${trend.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;