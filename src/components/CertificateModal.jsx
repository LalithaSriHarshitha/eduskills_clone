import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, rowData, onDownload }) {
  const [selectedTab, setSelectedTab] = useState('Final'); // 'Final', 'Long-term', 'Short-term'

  if (!isOpen) return null;

  const handleDownload = () => {
    // Immediately render empty page without animation
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-2xs p-4">
      <div 
        className="bg-[#f5f5f7] rounded-[28px] shadow-2xl max-w-[560px] w-full p-6 sm:p-8 border border-gray-200/50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-[26px] font-bold text-center text-[#1a3c9e] mb-6 tracking-tight">
          Select Certificate
        </h2>

        {/* Unified Tab Switcher Bar */}
        <div className="bg-white rounded-2xl shadow-2xs border border-gray-200/60 p-1 flex items-center justify-between mb-6">
          {/* Final Tab */}
          <button
            onClick={() => setSelectedTab('Final')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold cursor-pointer ${
              selectedTab === 'Final'
                ? 'bg-[#2d4cca] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-black hover:bg-gray-50'
            }`}
          >
            {/* Diploma / certificate icon */}
            <svg
              className={`w-4 h-4 ${selectedTab === 'Final' ? 'stroke-white' : 'stroke-[#4b5563]'}`}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="13" rx="2" />
              <path d="M8 4v8l3-2 3 2V4" />
              <circle cx="15.5" cy="10.5" r="1.5" fill={selectedTab === 'Final' ? 'white' : 'currentColor'} />
            </svg>
            <span>Final</span>
          </button>

          {/* Long-term Tab */}
          <button
            onClick={() => setSelectedTab('Long-term')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold cursor-pointer ${
              selectedTab === 'Long-term'
                ? 'bg-[#2d4cca] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-black hover:bg-gray-50'
            }`}
          >
            {/* Medal with star icon */}
            <svg
              className={`w-4 h-4 ${selectedTab === 'Long-term' ? 'stroke-white' : 'stroke-[#4b5563]'}`}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="14" r="5" />
              <path d="M8 4l2.5 5.5" />
              <path d="M16 4l-2.5 5.5" />
              <polygon
                points="12,12 12.8,13.8 14.8,13.9 13.2,15.2 13.8,17.1 12,16 10.2,17.1 10.8,15.2 9.2,13.9 11.2,13.8"
                fill={selectedTab === 'Long-term' ? 'white' : '#4b5563'}
              />
            </svg>
            <span>Long-term</span>
          </button>

          {/* Short-term Tab */}
          <button
            onClick={() => setSelectedTab('Short-term')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold cursor-pointer ${
              selectedTab === 'Short-term'
                ? 'bg-[#2d4cca] text-white shadow-xs'
                : 'text-[#4b5563] hover:text-black hover:bg-gray-50'
            }`}
          >
            {/* Rosette award ribbon icon */}
            <svg
              className={`w-4 h-4 ${selectedTab === 'Short-term' ? 'stroke-white' : 'stroke-[#4b5563]'}`}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="9" r="5" />
              <path d="M9 13.5L7 20l5-2.5L17 20l-2-6.5" />
            </svg>
            <span>Short-term</span>
          </button>
        </div>

        {/* Inner Card Content */}
        <div className="bg-white border border-gray-200/80 rounded-2xl min-h-[200px] flex flex-col items-center justify-center p-8 mb-6 shadow-2xs">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2.5 bg-[#388e3c] hover:bg-[#2e7d32] text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_12px_rgba(56,142,60,0.35)] text-sm sm:text-base cursor-pointer"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>
              {selectedTab === 'Final'
                ? 'Download Final Certificate'
                : `Download ${selectedTab} Certificate`}
            </span>
          </button>
        </div>

        {/* Footer Close Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-9 py-2 border-2 border-[#1a3c9e] text-[#1a3c9e] rounded-xl text-sm font-bold hover:bg-blue-50 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
