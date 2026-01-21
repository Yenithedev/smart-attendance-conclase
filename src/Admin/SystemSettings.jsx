import React, { useState } from 'react';
import { User, Clock, Bell } from 'lucide-react';

const SystemSettings = () => {
  const [notifications, setNotifications] = useState({
    lateArrivals: false,
    absence: false,
    dailySummary: false,
    weeklyReport: false
  });

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e8e4f3 0%, #d4d9f5 50%, #e8e4f3 100%)' }}>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5" >
        <div className="max-w-6xl mx-auto sm:block lg:flex items-center justify-between px-4">
          <div className='pb-5'>
            <h1 className="text-xl sm:text-2xl font-bold text-black mb-1">
              System settings
            </h1>
            <p className="text-xs sm:text-sm text-black" >
              Configure your attendance management system
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors" style={{ backgroundColor: '#5d4ce6' }}>
              Go to Admin Profile
            </button>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-900" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}></div>
            </div>
            General Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Company Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                style={{ focusRingColor: '#4c3bdb' }}
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Time Zone
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Date Fomart
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            Working Hours
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Office start time
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Office end time
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Late arrival threshold (min)
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Minimum work hours
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm transition-all"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            Notification Settings
          </h2>
          
          <div className="space-y-3">
            {/* Late arrivals alerts */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 text-sm mb-0.5">
                  Late arrivals alerts
                </h3>
                <p className="text-xs text-gray-500">
                  Get notified when staff arrive late
                </p>
              </div>
              <button 
                onClick={() => toggleNotification('lateArrivals')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: notifications.lateArrivals ? '#4c3bdb' : '#e5e7eb',
                  focusRingColor: '#4c3bdb'
                }}
              >
                <span 
                  className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  style={{
                    transform: notifications.lateArrivals ? 'translateX(1.25rem)' : 'translateX(0)'
                  }}
                />
              </button>
            </div>

            {/* Absence alerts */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 text-sm mb-0.5">
                  Absence alerts
                </h3>
                <p className="text-xs text-gray-500">
                  Get notified about staff absence
                </p>
              </div>
              <button 
                onClick={() => toggleNotification('absence')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: notifications.absence ? '#4c3bdb' : '#e5e7eb'
                }}
              >
                <span 
                  className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  style={{
                    transform: notifications.absence ? 'translateX(1.25rem)' : 'translateX(0)'
                  }}
                />
              </button>
            </div>

            {/* Daily summary */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 text-sm mb-0.5">
                  Daily summary
                </h3>
                <p className="text-xs text-gray-500">
                  Recieve end of the day attendance summary
                </p>
              </div>
              <button 
                onClick={() => toggleNotification('dailySummary')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: notifications.dailySummary ? '#4c3bdb' : '#e5e7eb'
                }}
              >
                <span 
                  className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  style={{
                    transform: notifications.dailySummary ? 'translateX(1.25rem)' : 'translateX(0)'
                  }}
                />
              </button>
            </div>

            {/* Weekly report */}
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 text-sm mb-0.5">
                  Weekly report
                </h3>
                <p className="text-xs text-gray-500">
                  Recieve weekly report
                </p>
              </div>
              <button 
                onClick={() => toggleNotification('weeklyReport')}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: notifications.weeklyReport ? '#4c3bdb' : '#e5e7eb'
                }}
              >
                <span 
                  className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  style={{
                    transform: notifications.weeklyReport ? 'translateX(1.25rem)' : 'translateX(0)'
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Admin Email */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            Admin Email
          </h2>
          <input 
            type="email" 
            value="@Admin.mail.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm"
            readOnly
          />
        </div>

        {/* Caution Section */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-red-600 mb-4">
            Caution
          </h2>
          
          <button className="w-full mb-3 px-4 py-3 border-2 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium" style={{ borderColor: '#fecaca' }}>
            Clear all attendance records
          </button>
          
          <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium shadow-sm">
            Reset system to default
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default SystemSettings;