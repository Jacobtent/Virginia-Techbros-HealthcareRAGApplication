import React from 'react';
import { ACCENT_COLOR, TEXT_COLOR, GRAY_TEXT } from '../../utils/constants.jsx';

/**
 * Displays a single chat message, styling based on sender role.
 */
export default function MessageBubble({ msg }) {
  const isUser = msg.role === "user";
  const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-3xl ${isUser ? "w-auto" : "w-full"}`}>
        <div className={`rounded-2xl px-5 py-3 shadow-sm ${
          isUser 
            ? `bg-[${ACCENT_COLOR}] text-white ml-12` 
            : `bg-white text-[${TEXT_COLOR}]`
        }`}>
          <div className="text-xs font-medium mb-1.5 opacity-75">
            {isUser ? "You" : "ResearchBot"}
          </div>
          <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
          <div className={`text-xs mt-2 ${isUser ? "text-white opacity-70" : `text-[${GRAY_TEXT}]`}`}>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}