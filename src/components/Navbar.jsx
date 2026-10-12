import React, { useState } from 'react';
import { Rocket, Bell, ChevronDown, User, LogOut, Settings, Award } from 'lucide-react';
import EduSkillsLogo from './EduSkillsLogo';

export default function Navbar({ onOpenAssess2Me, onOpenNotifications, onProfileClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Certificate Ready!",
      desc: "Your Google AI-ML Cohort 12 Certificate is available for download.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "Celonis Evaluation Result",
      desc: "Scores for Cohort 16 have been published.",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      title: "Assess2ME Mock Test",
      desc: "New assessment modules are open for registration.",
      time: "3 days ago",
      unread: false,
    }
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Left: Brand Logo */}
      <div className="flex items-center gap-4">
        <EduSkillsLogo />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Join Assess2ME Button */}
        <button
          onClick={onOpenAssess2Me}
          className="flex items-center gap-2 bg-[#5e35b1] hover:bg-[#512da8] transition-all text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow active:scale-95"
        >
          <Rocket className="w-3.5 h-3.5 text-pink-300 transform -rotate-45" />
          <span>Join Assess2ME</span>
        </button>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotificationMenu(!showNotificationMenu);
              setShowProfileMenu(false);
            }}
            aria-label="Notifications"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative cursor-pointer"
          >
            <Bell className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Notifications Dropdown */}
          {showNotificationMenu && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                <span className="font-semibold text-sm text-gray-800">Notifications</span>
                <span className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded-full">1 New</span>
              </div>
              <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${n.unread ? 'bg-blue-50/40' : ''}`}>
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-gray-900">{n.title}</p>
                      <span className="text-[10px] text-gray-400">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar HA */}
        <div className="relative">
          <button
            onClick={onProfileClick}
            aria-label="Profile"
            title="Profile"
            className="w-9 h-9 rounded-full bg-[#f97316] text-white font-semibold text-sm flex items-center justify-center hover:ring-2 hover:ring-orange-200 transition-all shadow-sm cursor-pointer"
          >
            HA
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
              <div className="px-4 py-2.5 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Harish A.</p>
                <p className="text-xs text-gray-500">Student ID: EDU-2024-9182</p>
                <p className="text-[11px] text-blue-600 font-medium mt-0.5">harish.a@college.edu.in</p>
              </div>

              <div className="py-1">
                <button
                  onClick={onProfileClick}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 cursor-pointer"
                >
                  <User className="w-4 h-4 text-gray-400" />
                  <span>My Profile</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gray-400" />
                  <span>My Certificates</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2.5">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span>Account Settings</span>
                </button>
              </div>

              <div className="border-t border-gray-100 pt-1 mt-1">
                <button className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2.5">
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
