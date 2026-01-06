import React, { useState } from "react";
import { Link} from "react-router-dom"
import { Menu, X, Clock, Users, FileText, Shield, Smartphone, BarChart3, Lock, CheckCircle, QrCode, Zap, TrendingUp, Award, Database,MapPin,Phone, Linkedin, Twitter, Youtube } from "lucide-react";
import landing1 from './assets/landing1.jpg'

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Navigation bar */}
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 rounded-lg p-2">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Smart Attendance System
                </span>
              </div>
              <span className="ml-2 text-sm text-gray-500 hidden sm:inline">
                by Conclase
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                <Link to={("/login")}>Login</Link>
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <Link to={("/signup")}>Sign Up</Link>
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-700 font-medium">
                  <Link to={("/login")}>Login</Link>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-black font-medium">
                  <Link to={("/signup")}>Sign Up</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
       {/* conclase institution heading */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center mb-6">
                <span className="text-blue-600 font-semibold text-sm">★ Conclase Institution</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart Attendance. Done Right.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A secure, QR-powered attendance system built for accuracy, speed, and real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center justify-center">
                  <Link to="https://wa.me/message/Q7EVSVVTHRNFH1">Request a Demo</Link>
                  <span className="ml-2">→</span>
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 font-medium transition-colors flex items-center justify-center">
                  <span className="mr-2">▶</span>
                  <Link to="https://wa.me/message/Q7EVSVVTHRNFH1">View Product Overview</Link>
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 fill-green-500" />
                  Enterprise Security
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 fill-green-500" />
                  GDPR Compliant
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                        <QrCode className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Live Session</div>
                        <div className="text-xs text-gray-500">CS101 - Intro to Programming</div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-green-500 text-white px-3 py-1 rounded-full">Active</span>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-xl flex items-center justify-center mb-4">
                  <QrCode className="w-28 h-28 text-gray-800" />
                </div>
                
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900"></div>
                    <div className="text-xs text-gray-500"></div>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-xs text-gray-500">Absent</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">92%</div>
                    <div className="text-xs text-gray-500">Rate</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 px-5 py-3 rounded-xl shadow-xl">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2 fill-white" />
                  <div className="text-xs">
                    <div className="font-semibold">Status</div>
                    <div className="opacity-90">Checked In</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The challenge section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs text-red-600 font-bold mb-3 uppercase tracking-wider">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional Attendance Methods Are Broken
            </h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Educational institutions continue to struggle with outdated attendance systems that compromise accuracy, waste time, and lack accountability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Time-Consuming Processes</h4>
              <p className="text-sm text-gray-600">
                Manual roll calls waste valuable lecture time when class attention matters most.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Proxy Sign-ins</h4>
              <p className="text-sm text-gray-600">
                Students signing in for absent peers undermines attendance accuracy and integrity.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Paper-Based Registers</h4>
              <p className="text-sm text-gray-600">
                Physical attendance sheets are prone to errors, loss, and difficult to verify or retrieve.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Inaccurate Records</h4>
              <p className="text-sm text-gray-600">
                Manual processes lead to data entry mistakes and incomplete attendance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The solution section */}
      <section id="integration" className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-xs text-blue-600 font-bold mb-3 uppercase tracking-wider">The Solution</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Smart Attendance System
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A modern, digital attendance platform that eliminates manual processes, prevents fraud, and provides real-time insights—all through secure QR code technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Automated & Instant</h4>
                    <p className="text-sm text-gray-600">
                      Attendance is captured in seconds with a simple QR scan—no manual entry, no delays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Secure & Tamper-Proof</h4>
                    <p className="text-sm text-gray-600">
                      Time-bound, encrypted QR codes prevent proxy attendance and unauthorized access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Simple & Intuitive</h4>
                    <p className="text-sm text-gray-600">
                      Designed for ease of use—students, staff, and admins can start using it immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={landing1}
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-green-500 px-5 py-3 rounded-xl shadow-xl">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500 fill-white" />
                  <div className="text-xs">
                    <div className="font-semibold text-black">Verified Check-In</div>
                    <div className="opacity-90 text-gray-500">(17 seconds)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section id="how-it-works" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs text-green-600 font-bold mb-3 uppercase tracking-wider">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Simple Steps
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From QR generation to real-time insights, Smart Attendance System streamlines the entire attendance workflow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-100 mb-4">01</div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Admin Generates QR Code</h4>
              <p className="text-sm text-gray-600">
                Instructor creates a time-bound, encrypted QR code for the session via the web dashboard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-100 mb-4">02</div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Students Scan via Mobile</h4>
              <p className="text-sm text-gray-600">
                Students open the mobile app and scan the displayed QR code to check in instantly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-100 mb-4">03</div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Attendance Recorded Instantly</h4>
              <p className="text-sm text-gray-600">
                The system validates and logs attendance in real time with timestamp and location data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-100 mb-4">04</div>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Admin Views Dashboard</h4>
              <p className="text-sm text-gray-600">
                Real-time analytics and attendance reports are available immediately on the admin dashboard.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              The entire process takes less than 3 seconds per student.
            </p>
            <div className="inline-flex items-center text-blue-600 font-semibold text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Fast, Secure, Reliable
            </div>
          </div>
        </div>
      </section>
      {/* Key features section */}
      <section id="features" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs text-blue-600 font-bold mb-3 uppercase tracking-wider">Key Features</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, Built In
            </h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Comprehensive attendance management with enterprise-grade security, powerful analytics, and seamless integration capabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Secure Dynamic QR Codes</h4>
              <p className="text-sm text-gray-600">
                Time-bound, encrypted QR codes that are secure against unauthorized access and proxy attendance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Mobile & Web Platform</h4>
              <p className="text-sm text-gray-600">
                Accessible on any device—students use mobile apps, admins use web dashboard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real-Time Analytics Dashboard</h4>
              <p className="text-sm text-gray-600">
                Live attendance tracking with visual insights, trends, and performance metrics at a glance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Advanced Reports</h4>
              <p className="text-sm text-gray-600">
                Generate and export attendance reports in PDF and Excel format with custom date ranges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Role-Based Access Control</h4>
              <p className="text-sm text-gray-600">
                Granular permissions for administrators, instructors, and students to ensure data security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Audit Logs & Compliance</h4>
              <p className="text-sm text-gray-600">
                Complete activity tracking and tamper-proof logs to meet institutional compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Scale, Designed for Simplicity
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Whether you're managing a single classroom or an entire university campus, Smart Attendance System scales effortlessly to meet your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Schools Enrolled</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">&lt;2s</div>
              <div className="text-blue-100">Average Check-In Time</div>
            </div>
          </div>
        </div>
      </section>
      {/* User benefits section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs text-blue-600 font-bold mb-3 uppercase tracking-wider">User Benefits</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Value for Every User
            </h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Smart Attendance System is designed to benefit all stakeholders in the educational ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fast, contactless check-in process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time attendance transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated alerts for low attendance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to personal attendance history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No more manual sign-in sheets</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-4">For Staff & Lecturers</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No time wasted on roll calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Instant attendance verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated absence management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quick access to class reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Focus more on teaching</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-4">For Administrators</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Centralized attendance control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance and audit readiness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive analytics & insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduced administrative workload</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Data-driven decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Security & trust section */}
      <section id="security" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xs text-green-600 font-bold mb-3 uppercase tracking-wider">Security & Trust</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Security You Can Trust
              </h3>
              <p className="text-gray-600 mb-8">
                Built with security at its core, Smart Attendance System ensures your data is protected with industry-leading encryption, compliance standards, and tamper-proof architecture.
              </p>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Encrypted QR Codes</h4>
                    <p className="text-sm text-gray-600">
                      All QR codes are dynamically encrypted with time-based expiration to prevent unauthorized access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Secure Authentication</h4>
                    <p className="text-sm text-gray-600">
                      Multi-factor authentication and role-based access controls protect sensitive data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tamper-Proof Logs</h4>
                    <p className="text-sm text-gray-600">
                      Immutable attendance records with complete audit trails for accountability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Cloud Backups</h4>
                    <p className="text-sm text-gray-600">
                      Automated encrypted backups ensure your data is always safe and recoverable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Compliance & Standards</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">GDPR Compliant</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">ISO 27001</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">SOC 2 Type II</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">FERPA Ready</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="src/assets/landing2.jpg"
                  alt="Security"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600 fill-green-600" />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Security Status</div>
                    <div className="text-gray-600">All Systems Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Scalability and functionality section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-white px-4 py-2 rounded-lg shadow-md z-10">
                <div className="text-xs text-gray-600">↗ Growth Path</div>
                <div className="text-2xl font-bold text-gray-900">+127%</div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="src/assets/landing3.jpg"
                  alt="Growth"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center text-gray-900">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <div>
                    <div className="text-xs text-gray-600">▲ Institutions</div>
                    <div className="text-xl font-bold">500+</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xs text-purple-600 font-bold mb-3 uppercase tracking-wider">Scalability & Functionality</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Built to Grow With Your Institution
              </h3>
              <p className="text-gray-600 mb-8">
                Smart Attendance System is engineered for scalability—from small classrooms to multi-campus universities. Our cloud infrastructure grows with you, ensuring consistent performance at any scale.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Unlimited Scalability</h4>
                    <p className="text-sm text-gray-600">
                      Handle thousands of concurrent check-ins across multiple locations without performance degradation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">High Performance Infrastructure</h4>
                    <p className="text-sm text-gray-600">
                      99.9% uptime guarantee powered by enterprise-level cloud infrastructure and redundancy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">AI Powered Analytics (Coming Soon)</h4>
                    <p className="text-sm text-gray-600">
                      Predictive insights, pattern detection, and automated recommendations using machine learning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <h4 className="text-sm font-semibold text-gray-900">Seamless Integrations</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with your existing systems including LMS platforms, student information systems, and HR management tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">Canvas LMS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">Moodle</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">Blackboard</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">Google Workspace</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">Microsoft Teams</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <QrCode className="w-16 h-16 text-white mx-auto mb-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Attendance?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Join hundreds of institutions worldwide that have streamlined their operations, enhanced security, and improved student outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="px-10 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 font-bold text-lg">
              <Link to="https://wa.me/message/Q7EVSVVTHRNFH1">Request a Demo →</Link>
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-black font-bold text-lg">
             <Link to="https://wa.me/message/Q7EVSVVTHRNFH1"> ⃝ Contact Sales</Link>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 fill-blue-100" />
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 fill-blue-100" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 fill-blue-100" />
              Setup in under 1 hour
            </div>
          </div>
        </div>
      </section>
      {/* Footer section */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 rounded-lg p-2">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">SAS</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Smart Attendance System - Secure, QR-powered educational attendance for modern institutions.
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 Conclase Labs Inc. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#security" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#integration" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><Link to="https://wa.me/message/Q7EVSVVTHRNFH1" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="https://www.conclaseacademy.com/school" className="hover:text-white">Career</Link></li>
                <li><Link to="https://www.conclaseacademy.com/" className="hover:text-white">Blog</Link></li>
                <li><Link to="https://wa.me/message/Q7EVSVVTHRNFH1" className="hover:text-white">Support Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✉ info@conclase.edu</li>
                <li className="flex gap-2"><Phone /> +234 (0) 705 285 4847</li>
                <li className="flex gap-2"><MapPin /> No 10. Wole Ogunjimi Street,</li>
                <li>Opebi, Ikeja, Lagos.</li>
                
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <Link to="https://www.conclaseacademy.com/toc" className="hover:text-white">Terms of Service</Link>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
            <div className="flex gap-4">
              <Link to="https://ng.linkedin.com/company/conclaseacademy" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                
                <Linkedin className="w-5 h-5 text-gray-400" />
              </Link>
              <Link to="https://x.com/conclaseacademy/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </Link>
              <Link to="https://youtube.com/@conclaseacademyusa?si=9h3r6ONK5QNCgn3V" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Youtube className="w-5 h-5 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;