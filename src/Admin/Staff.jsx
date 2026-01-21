import React, { useState } from "react";
import { UserPlus, Trash2 } from "lucide-react";
import { statsData2, staffData, getStatusColor } from "./Details";

const Staff = () => {

  

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="w-full">

        {/* Content Area */}
        <div className="p-4 md:p-6 bg-gray-100">
          {/* Title and Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Staff Management</h2>
              <p className="text-sm text-gray-600">Manage your team members and attendance records</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
              <UserPlus size={18} />
              Add new staff
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            {statsData2.map((stat) => (
              <div key={stat.label} className="bg-white p-4 md:p-6 rounded-lg shadow">
                <p className="text-xs md:text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Staff Directory */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Staff Directory</h3>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-indigo-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Department</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Employee ID</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Last check-ins</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffData.map((staff, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{staff.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{staff.department}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{staff.id}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs text-white ${getStatusColor(staff.status)}`}>
                            {staff.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600">{staff.lastCheckIn}</td>
                        <td className="px-4 py-4">
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {staffData.map((staff, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                        <p className="text-sm text-gray-600">{staff.department}</p>
                      </div>
                      <button className="text-red-500">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Employee ID:</span>
                        <span className="text-gray-900">{staff.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(staff.status)}`}>
                          {staff.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last check-in:</span>
                        <span className="text-gray-900">{staff.lastCheckIn}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;