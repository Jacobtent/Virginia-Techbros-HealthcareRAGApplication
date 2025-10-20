// src/utils/api.js
// This module encapsulates all interactions with the Flask Backend API.
import { API_BASE_URL } from './constants.jsx';

// --- Document Handlers ---

export async function getDocuments() {
    // In a real application, this would fetch the user's document list.
    const response = await fetch(`${API_BASE_URL}/documents`);
    if (!response.ok) throw new Error('Failed to fetch documents');
    return response.json();
}

export async function uploadDocument(fileData) {
    // fileData is expected to be { name, content, uploadedAt }
    const response = await fetch(`${API_BASE_URL}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fileData),
    });
    if (!response.ok) throw new Error('Failed to upload document');
    return response.json();
}

export async function deleteDocumentApi(docId) {
    const response = await fetch(`${API_BASE_URL}/documents/${docId}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete document');
    return response.json();
}

// --- Conversation Handlers ---

export async function getConversations() {
    // Fetches list of conversations for the History Sidebar.
    const response = await fetch(`${API_BASE_URL}/conversations`);
    if (!response.ok) throw new Error('Failed to fetch conversations');
    return response.json();
}

export async function startNewConversationApi(title) {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    if (!response.ok) throw new Error('Failed to start new conversation');
    return response.json(); // Expected to return { conversationId, title, createdAt }
}

export async function deleteConversationApi(conversationId) {
    const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete conversation');
    return response.json();
}

// --- Message Handlers ---

export async function getMessages(conversationId) {
    // Fetches all messages for the active conversation.
    const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`);
    if (!response.ok) throw new Error('Failed to fetch messages');
    return response.json();
}

export async function postUserMessage(conversationId, content) {
    // Sends and saves the user's message.
    const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'user', content }),
    });
    if (!response.ok) throw new Error('Failed to post user message');
    return response.json(); // Expected to return the saved message object
}

// --- CORE AI/RAG QUERY HANDLER ---

export async function sendRAGQuery(conversationId, userQuery, documentNames) {
    // This calls the main endpoint that triggers the RAG pipeline (Stephen/Tia/Granite).
    const response = await fetch(`${API_BASE_URL}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            conversationId,
            query: userQuery,
            documents: documentNames, // Used by the backend RAG pipeline for context/citation
        }),
    });

    if (!response.ok) {
        throw new Error(`AI Request Failed: ${response.status} ${response.statusText}`);
    }

    // Since streaming is complex via simple fetch, we assume the backend waits for 
    // the full Granite response and sends the final, cited text back at once.
    const data = await response.json();
    return data.response; // Expected to return the full, cited response string.
}
