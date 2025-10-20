import React from 'react';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * The input form for submitting queries to the AI.
 */
export default function QueryInput({ promptDoc, mergePrompt, isProcessing, uploadedDocs, handleSubmitQuery }) {
  const placeholderText = uploadedDocs.length > 0 
    ? "Ask a question about your research documents..." 
    : "Ask me anything about research or general topics..."
    
  return (
    <form onSubmit={handleSubmitQuery} className="p-4">
      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <textarea
            value={promptDoc.prompt}
            onChange={(e) => mergePrompt({ prompt: e.target.value })}
            placeholder={placeholderText}
            className={`w-full border border-[#e0e0e0] rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[${ACCENT_COLOR}] focus:border-transparent bg-[#f4f4f4] text-[${TEXT_COLOR}]`}
            rows={2}
            disabled={isProcessing}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmitQuery(e);
              }
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isProcessing || !promptDoc.prompt.trim()}
          className={`px-6 py-3 bg-[${ACCENT_COLOR}] text-white rounded-xl hover:bg-[#0353e9] disabled:bg-[#c6c6c6] disabled:cursor-not-allowed transition-colors font-medium shadow-sm h-12 flex items-center gap-2`}
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send
            </>
          )}
        </button>
      </div>
      {uploadedDocs.length === 0 && (
        <p className={`text-xs text-[${GRAY_TEXT}] mt-2 italic`}>
          💡 Upload documents for citation-backed analysis, or ask general questions now
        </p>
      )}
    </form>
  );
}
