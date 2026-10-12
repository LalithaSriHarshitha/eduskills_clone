import React from 'react';
import { X, Download, ShieldCheck } from 'lucide-react';
import { downloadCertificate } from '../utils/generateCertificate';
import logoImg from '../assets/eduskills-logo.png';

export default function CertificatePreviewModal({ isOpen, onClose, data, type = "Final" }) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-sm">EduSkills Verified Certificate Preview</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 overflow-y-auto bg-slate-100/60 flex items-center justify-center">
          <div className="bg-white border-8 border-[#1e3a8a] rounded-lg p-8 shadow-xl max-w-2xl w-full text-center relative select-none">
            {/* Top Official Logo */}
            <div className="flex flex-col items-center mb-4">
              <img
                src={logoImg}
                alt="EduSkills Logo"
                className="h-14 w-auto object-contain mb-2"
              />
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full">
                AICTE - EDUSKILLS VIRTUAL INTERNSHIP
              </span>
            </div>

            {/* Certificate Header */}
            <h1 className="text-3xl font-serif font-bold text-slate-800 my-2">Certificate of Completion</h1>
            <p className="text-xs italic text-slate-500 mb-2">This is proudly presented to</p>

            {/* Student Name */}
            <div className="my-3">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-blue-800 tracking-wide">
                Harish A.
              </span>
              <div className="w-48 h-0.5 bg-amber-500 mx-auto mt-1"></div>
            </div>

            {/* Body Description */}
            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed mt-3">
              for successfully completing the 10-week virtual internship program in{" "}
              <strong className="text-slate-900 font-semibold">{data.domain}</strong> ({data.cohort}) with exemplary dedication and performance.
            </p>

            {/* Badges and Signatures */}
            <div className="grid grid-cols-3 items-end mt-8 pt-4 border-t border-gray-100 text-left">
              <div>
                <p className="font-serif italic font-bold text-blue-900 text-sm">Dr. Satya Ranjan Biswal</p>
                <div className="h-0.5 w-24 bg-gray-300 my-1"></div>
                <p className="text-[10px] font-semibold text-slate-700">Executive Director</p>
                <p className="text-[9px] text-gray-400">EduSkills Foundation</p>
              </div>

              {/* Seal */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-600 bg-amber-50 flex flex-col items-center justify-center p-1 shadow-inner">
                  <span className="text-[8px] font-bold text-amber-800">OFFICIAL</span>
                  <span className="text-[9px] font-bold text-amber-900">SEAL</span>
                  <span className="text-[7px] text-amber-700">VERIFIED</span>
                </div>
              </div>

              <div className="text-right">
                <p className="font-serif italic font-bold text-emerald-800 text-sm">Industry Alliance Lead</p>
                <div className="h-0.5 w-24 bg-gray-300 my-1 ml-auto"></div>
                <p className="text-[10px] font-semibold text-slate-700">Program Director</p>
                <p className="text-[9px] text-gray-400">Google Developer Relations</p>
              </div>
            </div>

            <div className="mt-4 pt-2 text-[9px] text-slate-400 font-mono">
              Certificate ID: EDU-CERT-GAIML-2024-C12-9842 • AICTE Approved
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={() => {
              downloadCertificate({
                studentName: "Harish A.",
                domain: data.domain,
                cohort: data.cohort,
                type: type,
                certificateId: "EDU-CERT-GAIML-2024-C12-9842"
              });
            }}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download PNG Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
