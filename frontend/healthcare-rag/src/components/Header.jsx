import React from 'react';
import { MAX_DOCUMENTS, ACCENT_COLOR, GRAY_TEXT } from '../utils/constants.jsx';

/**
 * Global application header, displays branding and document count summary.
 */
export default function Header({ uploadedCount, startNewConversation }) {
  return (
    <div className="bg-white shadow-sm border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-semibold text-[${ACCENT_COLOR}]`}>ResearchBot</h1>
            <p className={`text-sm text-[${GRAY_TEXT}] mt-0.5`}>AI Literature Analysis Assistant</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`text-sm text-[${GRAY_TEXT}]`}>
              <span className="font-medium">{uploadedCount}</span>/{MAX_DOCUMENTS} documents
            </div>
            <button
              onClick={startNewConversation}
              className={`bg-[${ACCENT_COLOR}] text-white px-4 py-2 rounded-lg hover:bg-[#0353e9] transition-colors shadow-sm text-sm font-medium`}
            >
              + New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}