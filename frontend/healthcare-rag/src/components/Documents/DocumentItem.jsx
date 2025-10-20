import React from 'react';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Displays an individual uploaded document with a delete button.
 */
export default function DocumentItem({ doc, deleteDocument }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-[${ACCENT_COLOR}] bg-opacity-10 flex items-center justify-center`}>
          {/* Document Icon SVG */}
          <svg className={`w-5 h-5 text-[${ACCENT_COLOR}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-medium text-[${TEXT_COLOR}] truncate`}>{doc.name}</p>
          <p className={`text-sm text-[${GRAY_TEXT}]`}>{new Date(doc.uploadedAt).toLocaleDateString()}</p>
        </div>
      </div>
      <button
        onClick={() => deleteDocument(doc._id)}
        className="ml-4 w-8 h-8 rounded-lg hover:bg-[#fef0f0] text-[#da1e28] flex items-center justify-center transition-colors flex-shrink-0"
      >
        {/* Trash Icon SVG */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}