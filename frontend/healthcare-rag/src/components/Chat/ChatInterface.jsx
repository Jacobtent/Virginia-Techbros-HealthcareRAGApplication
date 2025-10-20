import React from 'react';
import MessageBubble from './MessageBubble.jsx';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Main chat area displaying all messages or a welcome screen.
 */
export default function ChatInterface({ messages, uploadedDocs, responseEndRef }) {
  if (messages.length === 0) {
    return (
      <div className="text-center py-16">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${ACCENT_COLOR}] bg-opacity-10 mb-4`}>
          {/* Chat Icon SVG */}
          <svg className={`w-8 h-8 text-[${ACCENT_COLOR}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h3 className={`text-xl font-medium text-[${TEXT_COLOR}] mb-2`}>Ready to help with your research</h3>
        <p className={`text-[${GRAY_TEXT}] max-w-md mx-auto`}>
          {uploadedDocs.length === 0 
            ? "Ask me anything! Upload documents for citation-backed analysis, or ask general research questions."
            : "Ask questions about your uploaded documents to receive synthesized answers with accurate citations."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {messages.map((msg) => (
        <MessageBubble key={msg._id} msg={msg} />
      ))}
      <div ref={responseEndRef} />
    </div>
  );
}
