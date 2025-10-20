import React from 'react';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Displays the tab navigation bar at the bottom of the screen.
 */
export default function TabNavigation({ activeTab, setActiveTab, uploadedCount, conversationCount }) {
  const tabs = [
    { id: "chat", label: "Chat", count: 0, icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ) },
    { id: "documents", label: `Documents (${uploadedCount})`, count: uploadedCount, icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ) },
    { id: "conversations", label: `History (${conversationCount})`, count: conversationCount, icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ) },
  ];

  return (
    <div className="flex border-b border-[#e0e0e0]">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? `text-[${ACCENT_COLOR}] border-b-2 border-[${ACCENT_COLOR}]`
              : `text-[${GRAY_TEXT}] hover:text-[${TEXT_COLOR}]`
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {tab.icon}
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
}
