import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// This is the file that tells the browser how to load your main App component.

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Failed to find the root element with id 'root'.");
}
