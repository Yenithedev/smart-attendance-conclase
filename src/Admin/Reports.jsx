import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, ChevronDown } from 'lucide-react';

const Reports = () => {
  // Data for attendance trends
  const trendsData = [
    { month: 'Jan', active: 200, late: 50, absent: 10 },
    { month: 'Feb', active: 190, late: 55, absent: 5 },
    { month: 'Mar', active: 185, late: 60, absent: 15 },
    { month: 'Apr', active: 195, late: 45, absent: 8 },
    { month: 'May', active: 200, late: 50, absent: 12 },
    { month: 'Jun', active: 198, late: 48, absent: 10 },
    { month: 'Jul', active: 200, late: 42, absent: 8 },
    { month: 'Aug', active: 197, late: 45, absent: 11 },
    { month: 'Sep', active: 199, late: 40, absent: 9 },
    { month: 'Oct', active: 201, late: 43, absent: 7 },
    { month: 'Nov', active: 198, late: 41, absent: 10 },
    { month: 'Dec', active: 195, late: 42, absent: 12 },
  ];

  // Data for department attendance
  const departmentData = [
    { department: 'Sales', rate: 235 },
    { department: 'HR', rate: 178 },
    { department: 'Design', rate: 115 },
    { department: 'Accounting', rate: 198 },
    { department: 'Marketing', rate: 98 },
    { department: 'Social', rate: 58 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Reports and Analytics
            </h1>
            <p className="text-sm text-gray-500 mt-1">View attendance trends and generate reports</p>
          </div>

          {/* Reports Filter Section */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reports</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* From Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
                <div className="relative">
                  <input
                    type="text"
                    value="10/12/2025"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* To Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
                <div className="relative">
                  <input
                    type="text"
                    value="10/12/2026"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>All Department</option>
                    <option>All</option>
                    <option>Sales</option>
                    <option>Design</option>
                    <option>Civil</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>All Status</option>
                    <option>Present</option>
                    <option>Late</option>
                    <option>Absent</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Avg Attendance */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Avg.Attendance</h3>
                <p className="text-3xl font-bold text-purple-600">88.5%</p>
                <p className="text-xs text-green-600 mt-1">+2.5 from last week</p>
              </div>

              {/* Total Present Days */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total present Days</h3>
                <p className="text-3xl font-bold text-green-600">1,986</p>
                <p className="text-xs text-gray-500 mt-1">Last 9 Days</p>
              </div>

              {/* Total Late Arrivals */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Late Arrivals</h3>
                <p className="text-3xl font-bold text-yellow-600">137</p>
                <p className="text-xs text-gray-500 mt-1">Last 9 Days</p>
              </div>

              {/* Total Absents */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Absents</h3>
                <p className="text-3xl font-bold text-red-600">139</p>
                <p className="text-xs text-gray-500 mt-1">Last 9 Days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Trends Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Attendance Trends
            </h2>
            <p className="text-sm text-gray-500 mt-1">Daily Attendance trends</p>
          </div>

          <div className="w-full h-64 sm:h-80 lg:h-96 pointer-events-none">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendsData}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="#888"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#888"
                />
                <Legend 
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="active" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                  name="Active"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="late" 
                  stroke="#eab308" 
                  strokeWidth={2}
                  name="Late"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="absent" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Absent"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          
        </div>

        {/* Department Attendance Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Average attendance rate by department
            </h2>
          </div>

          <div className="w-full h-64 sm:h-80 lg:h-96 pointer-events-none">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="department" 
                  tick={{ fontSize: 12, fill: '#000' }}
                  stroke="#888"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#888"
                />
                <Bar 
                  dataKey="rate" 
                  fill="#22c55e" 
                  radius={[8, 8, 0, 0]}
                  name="Attendance Rate"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;