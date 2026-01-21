import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Qrcode = () => {
  const [sessionName, setSessionName] = useState("Morning Attendance");
  const [validFrom, setValidFrom] = useState("Dec,10,2025 7:00AM");
  const [expiresAt, setExpiresAt] = useState("Dec,10,2025 1:00PM");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [attendanceType, setAttendanceType] = useState("Check-In");
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const departments = ["All", "Civil", "Sales", "HR", "Design", "Accounting", "Engineering"];
  const attendanceTypes = ["Check-In", "Check-Out"];

  const handleGenerate = () => {
    console.log({
      sessionName,
      validFrom,
      expiresAt,
      selectedDepartment,
      attendanceType
    });
    alert("QR Code Generated!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">QR Code Management</h1>
            <p className="text-sm text-gray-600">Generate, manage, and scan QR codes for attendance</p>
          </div>

          {/* Generate QR Code Section */}
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Generate QR Code</h2>
            <p className="text-sm text-gray-600 mb-6">Create a new QR Code for staff member</p>

            {/* Form */}
            <div className="space-y-6">
              {/* Session Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Session Name
                </label>
                <input
                  type="text"
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                  placeholder="Morning Attendance"
                />
              </div>

              {/* Valid From and Expires At */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Valid From
                  </label>
                  <input
                    type="text"
                    value={validFrom}
                    onChange={(e) => setValidFrom(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    placeholder="Dec,10,2025 7:00AM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Expires At
                  </label>
                  <input
                    type="text"
                    value={expiresAt}
                    onChange={(e) => setExpiresAt(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    placeholder="Dec,10,2025 1:00PM"
                  />
                </div>
              </div>

              {/* Selected Department and Attendance Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Selected Department
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowDeptDropdown(!showDeptDropdown);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white flex items-center justify-between"
                    >
                      <span>{selectedDepartment}</span>
                      <ChevronDown size={20} className="text-gray-500" />
                    </button>
                    {showDeptDropdown && (
                      <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {departments.map((dept) => (
                          <button
                            key={dept}
                            onClick={() => {
                              setSelectedDepartment(dept);
                              setShowDeptDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-100 text-gray-900"
                          >
                            {dept}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Attendance Type
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowTypeDropdown(!showTypeDropdown);
                        setShowDeptDropdown(false);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white flex items-center justify-between"
                    >
                      <span>{attendanceType}</span>
                      <ChevronDown size={20} className="text-gray-500" />
                    </button>
                    {showTypeDropdown && (
                      <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {attendanceTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setAttendanceType(type);
                              setShowTypeDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-100 text-gray-900"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleGenerate}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;