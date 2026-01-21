import React, { useState } from "react";
import { statsData3, attendanceData, getStatusColor2, departmentBreakdown } from "./Details";

const Attendance = () => {
  const [selectedTime, setSelectedTime] = useState("9:30Am");
  const [selectedDate, setSelectedDate] = useState("10\\12\\2025");

  

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Attendance Records</h1>
          <p className="text-sm text-gray-600">View and manage daily attendance records</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-6">
          {statsData3.map((stat, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow">
              <p className="text-xs md:text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Today's Records Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Today'records</h2>
              <div className="flex gap-3 w-full sm:w-auto">
                <input
                  type="text"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <input
                  type="text"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Department</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Check in</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Check out</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Hours</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">{record.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{record.department}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{record.date}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{record.checkIn}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{record.checkOut}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{record.hours}</td>
                      <td className={`px-4 py-4 text-sm font-medium ${getStatusColor2(record.status)}`}>
                        {record.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {attendanceData.map((record, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{record.name}</h4>
                      <p className="text-sm text-gray-600">{record.department}</p>
                    </div>
                    <span className={`text-sm font-medium ${getStatusColor2(record.status)}`}>
                      {record.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <p className="text-gray-900">{record.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Hours:</span>
                      <p className="text-gray-900">{record.hours}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Check in:</span>
                      <p className="text-gray-900">{record.checkIn}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Check out:</span>
                      <p className="text-gray-900">{record.checkOut}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Attendance Breakdown */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Department Attendance Breakdown</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentBreakdown.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{dept.department}</span>
                    <span className="text-sm text-gray-600">{dept.present}/{dept.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${dept.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600">%{dept.percentage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;