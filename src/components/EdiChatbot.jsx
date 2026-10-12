import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Ticket, Sparkles, ChevronRight, HelpCircle, ArrowLeft } from 'lucide-react';
import EdiAvatar from './EdiAvatar';
import ediAvatarMasked from '../assets/edi-avatar-masked.png';

export default function EdiChatbot({ onOpenTicketModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAcknowledgedIntro, setHasAcknowledgedIntro] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'edi',
      text: "Hello Harish! 👋 I'm EDI, your EduSkills AI Buddy. How can I assist you with your internships, courses, or certificates today?",
      time: "Just now"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const quickPrompts = [
    "How to download my Certificate?",
    "Why did Celonis status show Fail?",
    "When will next cohort open?",
    "Raise a support ticket"
  ];

  const handleSend = (textToSend = null) => {
    const query = textToSend || inputVal.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal("");

    // Simulate smart bot response
    setTimeout(() => {
      let botReply = "I understand. Let me check the EduSkills knowledgebase for you.";
      const lower = query.toLowerCase();

      if (lower.includes("download") || lower.includes("certificate")) {
        botReply = "🎉 You can download your Google AI-ML Certificate directly from your dashboard by clicking the green 'Download Certificate' button. You can choose between Final, Long-term, or Short-term certificates!";
      } else if (lower.includes("celonis") || lower.includes("fail")) {
        botReply = "⚠️ For Celonis Business Analyst (Cohort 16), the status is marked as 'Fail' due to missing the final capstone submission deadline or not reaching the 60% threshold. If you believe this is an error, you can raise a ticket for evaluation review.";
      } else if (lower.includes("cohort") || lower.includes("next") || lower.includes("open")) {
        botReply = "📅 Registrations for Cohort 17 virtual internships will be opening next month through the AICTE Internship Portal. Keep checking the Assess2ME tab for mock evaluations!";
      } else if (lower.includes("ticket") || lower.includes("support")) {
        botReply = "🎫 No problem! You can click the 'Raise a Ticket' button below or on the top right of this chat to submit your issue directly to the EduSkills Helpdesk.";
      } else {
        botReply = `Thanks for asking about "${query}". I've recorded your question. Would you like me to connect you with an EduSkills support executive by raising a ticket?`;
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'edi',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Floating Trigger Button matching Image 1 exactly */}
      {!isOpen && (
        <div className="flex flex-col items-center animate-bounce-subtle">
          {/* Tooltip bubble "Hi! I'm Edi" floating directly above */}
          <div className="mb-1.5 z-10">
            <div className="bg-white px-3.5 py-1 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-1.5">
              <span className="text-xs">👏</span>
              <span className="text-[12px] font-bold text-gray-800 tracking-tight whitespace-nowrap">
                Hi! I'm Edi
              </span>
            </div>
          </div>

          {/* Clean circular avatar button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Edi AI Buddy"
            className="w-13 h-13 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] hover:shadow-[0_10px_26px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer p-0 border-none bg-transparent flex items-center justify-center focus:outline-none"
            title="Chat with Edi – Your AI Buddy"
          >
            <img
              src={ediAvatarMasked}
              alt="Edi - Your AI Buddy"
              className="w-full h-full object-contain rounded-full"
            />
          </button>
        </div>
      )}

      {/* Popover Window (Image 3) */}
      {isOpen && (
        <div className="w-[390px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Blue Header */}
          <div className="bg-[#0284c7] px-5 py-3.5 flex items-center justify-between text-white shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <img src={ediAvatarMasked} alt="Edi" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">Edi – Your AI Buddy</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] text-sky-100 font-normal">Online • Always Here</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (onOpenTicketModal) onOpenTicketModal();
                }}
                className="p-1.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Raise a Ticket"
              >
                <Ticket className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Screen Content: Intro Screen (Image 3) or Interactive Chat */}
          {!hasAcknowledgedIntro ? (
            /* Intro Screen Matching Image 3 Exactly */
            <div className="flex-1 p-6 flex flex-col items-center justify-between overflow-y-auto bg-gradient-to-b from-white to-sky-50/30">
              <div className="w-full flex flex-col items-center text-center">
                {/* Heading with sparkle */}
                <h2 className="text-lg font-bold text-gray-800 flex items-center justify-center gap-2 mt-2">
                  <span className="text-amber-500">✨</span>
                  <span>New Support Experience Is Here!</span>
                  <span className="text-amber-500">✨</span>
                </h2>

                {/* Robot Illustration */}
                <div className="my-5 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <EdiAvatar size="xl" variant="illustration" className="w-24 h-24" />
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mb-6">
                  Our ticketing system has been upgraded to a smart chatbot{" "}
                  <strong className="text-gray-900 font-bold">"EDI"</strong> to help you get instant answers to your queries.
                </p>

                {/* Info Cards */}
                <div className="w-full space-y-3 text-left">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                    <span className="text-lg">💬</span>
                    <p className="text-xs text-gray-600">
                      Please ask to <strong className="text-[#0284c7]">EDI</strong> first to find a quick solution.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                    <span className="text-lg">🎫</span>
                    <p className="text-xs text-gray-600">
                      If your query is not resolved, you will then have the option to{" "}
                      <strong className="text-[#ea580c]">Raise a Ticket</strong> for further assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Orange Got It! Button */}
              <button
                onClick={() => setHasAcknowledgedIntro(true)}
                className="w-full mt-6 bg-[#f97316] hover:bg-[#ea580c] active:scale-98 transition-all text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg text-sm text-center cursor-pointer"
              >
                Got It!
              </button>
            </div>
          ) : (
            /* Interactive Live Chat View */
            <div className="flex-1 flex flex-col bg-slate-50/50 overflow-hidden">
              {/* Back to intro bar */}
              <div className="bg-sky-50/80 px-4 py-1.5 border-b border-sky-100 flex items-center justify-between text-xs text-sky-800">
                <button
                  onClick={() => setHasAcknowledgedIntro(false)}
                  className="flex items-center gap-1 hover:underline text-gray-600 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>About EDI</span>
                </button>
                <button
                  onClick={onOpenTicketModal}
                  className="text-orange-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Raise Ticket</span>
                </button>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'edi' && (
                      <div className="w-7 h-7 rounded-full bg-sky-100 p-0.5 mr-2 shrink-0 self-end">
                        <EdiAvatar size="sm" className="w-6 h-6" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] p-3 rounded-2xl text-xs leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-[#0284c7] text-white rounded-br-xs shadow-xs'
                          : 'bg-white text-gray-800 rounded-bl-xs border border-gray-100 shadow-xs'
                      }`}
                    >
                      <p>{m.text}</p>
                      <span
                        className={`text-[9.5px] block mt-1 text-right ${
                          m.sender === 'user' ? 'text-sky-200' : 'text-gray-400'
                        }`}
                      >
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto scrollbar-none">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="shrink-0 text-[11px] bg-sky-50 text-sky-700 hover:bg-sky-100 px-2.5 py-1 rounded-full border border-sky-100 transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask Edi a question..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  className="p-2 bg-[#0284c7] hover:bg-[#0369a1] disabled:bg-gray-200 text-white rounded-xl transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
