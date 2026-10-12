import React, { useState } from 'react';
import festiveBannerImg from '../assets/festive-navratri-banner.png';

export default function FestiveBanner() {
  const [showBlessingModal, setShowBlessingModal] = useState(false);

  return (
    <>
      <div className="w-full select-none overflow-hidden shrink-0 relative bg-white">
        <img
          src={festiveBannerImg}
          alt="Shubh Navratri 2026 - Day 2: Maa Brahmacharini - The Blessing of Discipline & Knowledge"
          className="w-full h-auto min-h-[28px] max-h-[38px] object-cover sm:object-fill block cursor-pointer"
          onClick={() => setShowBlessingModal(true)}
          title="Click to view Navratri Blessing"
        />
      </div>

      {/* Blessing Modal on click */}
      {showBlessingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-orange-100 overflow-hidden text-center p-6 animate-in zoom-in-95 duration-150">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
              🪔
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Shubh Navratri 2026
            </h3>
            <p className="text-xs font-semibold text-orange-600 mb-3">
              Day 2: Maa Brahmacharini • The Blessing of Discipline & Knowledge
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              "May Goddess Brahmacharini bestow upon you the virtues of knowledge, patience, focused intellect, and penance for success in your learning and career endeavors."
            </p>
            <button
              onClick={() => setShowBlessingModal(false)}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
            >
              Jai Mata Di 🙏
            </button>
          </div>
        </div>
      )}
    </>
  );
}
