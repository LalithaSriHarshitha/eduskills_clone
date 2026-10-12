import React, { useState, useMemo, useEffect } from 'react';
import { GraduationCap, Download, ChevronDown } from 'lucide-react';
import FestiveBanner from './components/FestiveBanner';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CertificateModal from './components/CertificateModal';
import CertificatePreviewModal from './components/CertificatePreviewModal';
import EdiChatbot from './components/EdiChatbot';
import TicketModal from './components/TicketModal';
import Assess2MeModal from './components/Assess2MeModal';

export default function App() {
  // Navigation & Category Tab states
  const [activeSidebarNav, setActiveSidebarNav] = useState('certificates');
  const [activeCategory, setActiveCategory] = useState('internship'); // 'internship', 'techcamp', 'risingstar'

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modals state
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isAssess2MeOpen, setIsAssess2MeOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedCertType, setSelectedCertType] = useState('Final');
  const [isEmptyPage, setIsEmptyPage] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsEmptyPage(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Table Data for Internship (Primary match for screenshot)
  const internshipData = [
    {
      slNo: 1,
      domain: 'Celonis Business Analyst',
      cohort: 'Cohort 16',
      status: 'Completed',
      hasCertificate: true,
      canView: true,
    },
    {
      slNo: 2,
      domain: 'Google AI-ML',
      cohort: 'Cohort 12',
      status: 'Completed',
      hasCertificate: true,
      canView: true,
    },
  ];

  // Additional data for other tabs
  const techCampData = [
    {
      slNo: 1,
      domain: 'AWS Cloud Foundation',
      cohort: 'Cohort 8',
      status: 'Completed',
      hasCertificate: true,
      canView: true,
    },
    {
      slNo: 2,
      domain: 'Palo Alto Cybersecurity',
      cohort: 'Cohort 11',
      status: 'In Progress',
      hasCertificate: false,
      canView: false,
    },
    {
      slNo: 3,
      domain: 'Red Hat Enterprise Linux',
      cohort: 'Cohort 5',
      status: 'Completed',
      hasCertificate: true,
      canView: true,
    },
  ];

  const risingStarData = [
    {
      slNo: 1,
      domain: 'Alteryx Data Science Specialist',
      cohort: 'Cohort 4',
      status: 'Completed',
      hasCertificate: true,
      canView: true,
    },
    {
      slNo: 2,
      domain: 'Microchip Embedded Systems',
      cohort: 'Cohort 7',
      status: 'In Progress',
      hasCertificate: false,
      canView: false,
    },
  ];

  // Active dataset based on selected category tab
  const activeDataset = useMemo(() => {
    switch (activeCategory) {
      case 'techcamp':
        return techCampData;
      case 'risingstar':
        return risingStarData;
      case 'internship':
      default:
        return internshipData;
    }
  }, [activeCategory]);

  // Filtered rows based on search and status dropdown
  const filteredRows = useMemo(() => {
    return activeDataset.filter((item) => {
      const matchesSearch =
        item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cohort.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'All' || item.status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [activeDataset, searchQuery, statusFilter]);

  const handleOpenCertificateModal = (row) => {
    setSelectedRowData(row);
    setIsCertificateModalOpen(true);
  };

  const handleDownloadToEmptyPage = () => {
    setIsCertificateModalOpen(false);
    window.history.pushState({ page: 'empty' }, '');
    setIsEmptyPage(true);
  };

  const handleProfileClick = () => {
    window.history.pushState({ page: 'empty' }, '');
    setIsEmptyPage(true);
  };

  const handleOpenPreviewModal = (row, type = 'Final') => {
    setSelectedRowData(row);
    setSelectedCertType(type);
    setIsPreviewModalOpen(true);
  };

  // If empty page requested after clicking download or profile
  if (isEmptyPage) {
    return (
      <div
        className="min-h-screen w-full bg-white cursor-pointer"
        onClick={() => {
          window.history.back();
          setIsEmptyPage(false);
        }}
        title="Empty page. Click anywhere or press browser Back to return."
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 flex flex-col font-sans antialiased">
      {/* Top Festive Navratri Banner matching Image 1 */}
      <FestiveBanner />

      {/* Top Header Navbar */}
      <Navbar
        onOpenAssess2Me={() => setIsAssess2MeOpen(true)}
        onOpenNotifications={() => {}}
        onProfileClick={handleProfileClick}
      />

      <div className="flex flex-1">
        {/* Left Slim Sidebar */}
        <Sidebar
          activeNav={activeSidebarNav}
          setActiveNav={setActiveSidebarNav}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 md:p-10 max-w-7xl mx-auto w-full">
          {/* Centered Top Filter Tabs (Internship, TechCamp, Rising Star) matching uploaded screenshot */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center bg-[#f3f4f6] p-1 rounded-full select-none">
              {/* Internship Tab */}
              <button
                onClick={() => setActiveCategory('internship')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === 'internship'
                    ? 'bg-[#1d64f2] text-white shadow-sm'
                    : 'text-[#334155] hover:text-black hover:bg-white/40'
                }`}
              >
                <GraduationCap className="w-4 h-4 fill-white text-white" />
                <span>Internship</span>
              </button>

              {/* TechCamp Tab */}
              <button
                onClick={() => setActiveCategory('techcamp')}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === 'techcamp'
                    ? 'bg-[#1d64f2] text-white shadow-sm'
                    : 'text-[#334155] hover:text-black hover:bg-white/40'
                }`}
              >
                <span className="font-mono text-sm font-semibold">{`{}`}</span>
                <span>TechCamp</span>
              </button>

              {/* Rising Star Tab */}
              <button
                onClick={() => setActiveCategory('risingstar')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === 'risingstar'
                    ? 'bg-[#1d64f2] text-white shadow-sm'
                    : 'text-[#334155] hover:text-black hover:bg-white/40'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-[#475569] flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                  ★
                </span>
                <span>Rising Star</span>
              </button>
            </div>
          </div>

          {/* Table Controls (Search & Filter dropdown) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-5">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Filter by Dropdown */}
            <div className="flex items-center justify-end gap-2.5 self-end sm:self-auto">
              <label htmlFor="status-filter" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Filter by:
              </label>
              <div className="relative inline-block">
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 pr-9 shadow-2xs focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer min-w-[100px]"
                >
                  <option value="All">All</option>
                  <option value="Completed">Completed</option>
                  <option value="Fail">Fail</option>
                  <option value="In Progress">In Progress</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Data Table Card */}
          <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                {/* Dark Charcoal Header matching screenshot */}
                <thead>
                  <tr className="bg-[#4b5563] text-white text-sm font-semibold tracking-wide">
                    <th className="py-3.5 px-6 text-center w-24">SL No</th>
                    <th className="py-3.5 px-6">Domain</th>
                    <th className="py-3.5 px-6 text-center">Cohort</th>
                    <th className="py-3.5 px-6 text-center">Status</th>
                    <th className="py-3.5 px-6 text-center">Action</th>
                    <th className="py-3.5 px-6 text-center w-28">View</th>
                  </tr>
                </thead>

                {/* Table Body with alternating striping matching screenshot */}
                <tbody className="text-sm">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row) => (
                      <tr
                        key={row.slNo}
                        className={`transition-colors border-b border-gray-100 ${
                          row.slNo % 2 === 0 ? 'bg-[#f3f4f6]' : 'bg-white'
                        } hover:bg-blue-50/20`}
                      >
                        {/* SL No */}
                        <td className="py-3.5 px-6 text-center text-gray-700 font-medium">
                          {row.slNo}
                        </td>

                        {/* Domain */}
                        <td className="py-3.5 px-6 text-gray-900 font-medium">
                          {row.domain}
                        </td>

                        {/* Cohort */}
                        <td className="py-3.5 px-6 text-center text-gray-700">
                          {row.cohort}
                        </td>

                        {/* Status Badge */}
                        <td className="py-3.5 px-6 text-center">
                          {row.status === 'Completed' && (
                            <span className="inline-block bg-[#dcfce7] text-[#15803d] font-semibold text-xs px-3.5 py-1 rounded-full">
                              Completed
                            </span>
                          )}
                          {row.status === 'Fail' && (
                            <span className="inline-block bg-[#fee2e2] text-[#dc2626] font-semibold text-xs px-4 py-1 rounded-full">
                              Fail
                            </span>
                          )}
                          {row.status === 'In Progress' && (
                            <span className="inline-block bg-amber-50 text-amber-700 font-semibold text-xs px-3.5 py-1 rounded-full">
                              In Progress
                            </span>
                          )}
                        </td>

                        {/* Action Column */}
                        <td className="py-3.5 px-6 text-center">
                          {row.hasCertificate ? (
                            <button
                              onClick={() => handleOpenCertificateModal(row)}
                              className="inline-flex items-center gap-1.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer"
                            >
                              <Download className="w-4 h-4 stroke-[2.5]" />
                              <span>Download Certificate</span>
                            </button>
                          ) : (
                            <span className="text-[#dc2626] font-semibold text-sm">
                              Not Applicable
                            </span>
                          )}
                        </td>

                        {/* View Column - Empty matching Image 1 */}
                        <td className="py-3.5 px-6 text-center"></td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500">
                        No records found matching your filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Select Certificate Modal (Image 2) */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        rowData={selectedRowData}
        onDownload={handleDownloadToEmptyPage}
      />

      {/* Certificate Visual Preview Modal */}
      <CertificatePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        data={selectedRowData}
        type={selectedCertType}
      />

      {/* Edi AI Buddy Chatbot (Image 1, 2, 3) */}
      <EdiChatbot
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
      />

      {/* Raise a Ticket Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      {/* Assess2ME Modal */}
      <Assess2MeModal
        isOpen={isAssess2MeOpen}
        onClose={() => setIsAssess2MeOpen(false)}
      />
    </div>
  );
}
