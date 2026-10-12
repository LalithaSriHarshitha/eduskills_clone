import React from 'react';
import { X, Rocket, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Assess2MeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#5e35b1] to-[#7e57c2] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <Rocket className="w-6 h-6 text-pink-200 transform -rotate-45" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Assess2ME</h3>
              <p className="text-xs text-purple-200">Next-Gen Skill Assessment & Hiring Platform</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-gray-600 leading-relaxed">
            Assess2ME is an AI-powered talent assessment engine by EduSkills designed to evaluate technical readiness, coding prowess, and problem-solving skills for corporate hiring partners.
          </p>

          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs text-gray-700 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Industry-validated benchmark tests in AI-ML, Cloud, Cybersecurity, and Data Analytics.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-gray-700 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Direct interview opportunities with 200+ partner tech companies and MNCs.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-gray-700 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>Proctored automated environment with comprehensive skill percentile reports.</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert("Redirecting to Assess2ME Candidate Assessment Portal...");
                onClose();
              }}
              className="px-5 py-2 bg-[#5e35b1] hover:bg-[#512da8] text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Launch Assessment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
