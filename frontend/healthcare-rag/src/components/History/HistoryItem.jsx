import React from 'react';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Displays a single conversation entry with load and delete actions.
 */
export default function HistoryItem({ conv, activeConversationId, loadConversation, deleteConversation }) {
  return (
    <div
      key={conv._id}
      className={`bg-white rounded-xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-all ${
        activeConversationId === conv.conversationId ? `ring-2 ring-[${ACCENT_COLOR}]` : ""
      }`}
      onClick={() => loadConversation(conv.conversationId)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className={`font-medium text-[${TEXT_COLOR}] truncate`}>{conv.title}</p>
          <p className={`text-sm text-[${GRAY_TEXT}] mt-1`}>
            {new Date(conv.createdAt).toLocaleDateString()} • {new Date(conv.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent loading the conversation when deleting
            deleteConversation(conv);
          }}
          className="ml-4 w-8 h-8 rounded-lg hover:bg-[#fef0f0] text-[#da1e28] flex items-center justify-center transition-colors"
        >
          {/* Trash Icon SVG */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
