import React from 'react';
import { ClipboardCheck, Layers, Award, Star } from 'lucide-react';

export default function Sidebar({ activeNav = 'certificates', setActiveNav }) {
  const navItems = [
    { id: 'assessments', label: 'Assessments', icon: ClipboardCheck },
    { id: 'courses', label: 'Courses', icon: Layers },
    { id: 'certificates', label: 'Certificates & Internships', icon: Award },
    { id: 'milestones', label: 'Milestones', icon: Star },
  ];

  return (
    <aside className="w-14 bg-white border-r border-gray-100 flex flex-col items-center py-5 gap-5 shrink-0 min-h-[calc(100vh-4rem)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeNav === item.id;

        return (
          <div key={item.id} className="relative group flex items-center justify-center">
            <button
              onClick={() => setActiveNav(item.id)}
              className={`w-9 h-9 rounded-md flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#e0f2fe] text-[#0369a1] shadow-2xs font-bold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Hover Tooltip */}
            <div className="absolute left-14 ml-2 px-2.5 py-1 bg-gray-900 text-white text-xs rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {item.label}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
