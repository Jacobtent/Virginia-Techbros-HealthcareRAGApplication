import React from 'react';
import DocumentItem from './DocumentItem.jsx';
import { MAX_DOCUMENTS, ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Manages the document upload interface and displays the list of uploaded documents.
 */
export default function DocumentManager({ uploadedDocs, handleFileUpload, deleteDocument }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <h2 className={`text-lg font-semibold text-[${TEXT_COLOR}] mb-3`}>Upload Documents</h2>
        <p className={`text-sm text-[${GRAY_TEXT}] mb-4`}>
          Upload research papers, articles, or literature (text/PDF format). Max {MAX_DOCUMENTS} documents. Documents enable citation-backed RAG analysis.
        </p>
        <label className="block">
          <div className={`bg-[${ACCENT_COLOR}] text-white px-6 py-3 rounded-lg text-center cursor-pointer hover:bg-[#0353e9] transition-colors font-medium ${
            uploadedDocs.length >= MAX_DOCUMENTS ? "opacity-50 cursor-not-allowed" : ""
          }`}>
            {uploadedDocs.length >= MAX_DOCUMENTS ? "Maximum documents reached" : "Choose Files"}
          </div>
          <input
            type="file"
            multiple
            accept=".txt,.pdf"
            onChange={handleFileUpload}
            className="hidden"
            disabled={uploadedDocs.length >= MAX_DOCUMENTS}
          />
        </label>
      </div>

      <div className="space-y-3">
        {uploadedDocs.length === 0 && (
          <div className={`text-center py-12 text-[${GRAY_TEXT}]`}>
            No documents uploaded yet
          </div>
        )}
        {uploadedDocs.map(doc => (
          <DocumentItem key={doc._id} doc={doc} deleteDocument={deleteDocument} />
        ))}
      </div>
    </div>
  );
}
