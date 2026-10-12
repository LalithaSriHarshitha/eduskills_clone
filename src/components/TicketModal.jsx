import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TicketModal({ isOpen, onClose }) {
  const [domain, setDomain] = useState("Celonis Business Analyst");
  const [category, setCategory] = useState("Evaluation Review");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "TKT-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0284c7] px-6 py-4 text-white flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-base">EduSkills Helpdesk – Raise a Ticket</h3>
            <p className="text-xs text-sky-100">Direct escalation to the academic support team</p>
          </div>
          <button onClick={handleReset} className="p-1 hover:bg-white/10 rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Student Details</label>
              <input
                type="text"
                disabled
                value="Harish A. (EDU-2024-9182)"
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Domain</label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#0284c7]"
                >
                  <option value="Celonis Business Analyst">Celonis Business Analyst</option>
                  <option value="Google AI-ML">Google AI-ML</option>
                  <option value="AWS Cloud Practitioner">AWS Cloud Practitioner</option>
                  <option value="Palo Alto Cybersecurity">Palo Alto Cybersecurity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#0284c7]"
                >
                  <option value="Evaluation Review">Evaluation Review</option>
                  <option value="Certificate Correction">Certificate Correction</option>
                  <option value="LMS Access Issue">LMS Access Issue</option>
                  <option value="Attendance / Marks">Attendance / Marks</option>
                  <option value="Other Query">Other Query</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Describe your Query / Concern</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Explain the issue clearly (e.g., I completed the final capstone project but my Celonis status shows Fail)..."
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#0284c7]"
              ></textarea>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ticket</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">Ticket Submitted Successfully!</h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto">
              Your support ticket reference is <strong className="text-blue-600 font-mono text-sm">{ticketId}</strong>.
              Our support team will review your query within 24–48 working hours.
            </p>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
