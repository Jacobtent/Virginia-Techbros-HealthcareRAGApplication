import React from 'react';
import HistoryItem from './HistoryItem.jsx';
import { GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Displays the list of all past conversations.
 */
export default function HistorySidebar({ conversations, activeConversationId, loadConversation, deleteConversation }) {
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {conversations.length === 0 && (
        <div className={`text-center py-12 text-[${GRAY_TEXT}]`}>
          No conversations yet
        </div>
      )}
      {conversations.map(conv => (
        <HistoryItem 
          key={conv._id}
          conv={conv}
          activeConversationId={activeConversationId}
          loadConversation={loadConversation}
          deleteConversation={deleteConversation}
        />
      ))}
    </div>
  );
}
